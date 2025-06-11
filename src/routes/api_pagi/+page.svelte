<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  interface Product {
    id: number;
    name: string;
    brand: string;
    type: string;
    price: string;
    imageUrl: string;
    inStock: boolean;
  }

  const products = writable<Product[]>([]);
  const page = writable(1);
  const limit = 10;
  const totalPages = writable(1);
  const loading = writable(false);
  const error = writable<string | null>(null);

  async function fetchProducts(p: number) {
    loading.set(true);
    error.set(null);
    try {
      const res = await fetch(`/api/products?page=${p}&limit=${limit}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      products.set(json.data);
      totalPages.set(json.totalPages);
      page.set(json.page);
    } catch (err: any) {
      error.set(err.message);
    } finally {
      loading.set(false);
    }
  }

  function prevPage() {
    $page > 1 && fetchProducts($page - 1);
  }

  function nextPage() {
    $page < $totalPages && fetchProducts($page + 1);
  }

  onMount(() => {
    fetchProducts(1);
  });
</script>

<svelte:head>
  <title>Computer Shop with Pagination</title>
</svelte:head>

<div class="container">
  <h1>Thaw De Zin Computer Shop</h1>

  {#if $loading}
    <p>Loading...</p>
  {:else if $error}
    <p class="error">Error: {$error}</p>
  {:else}
    <div class="product-list">
      {#each $products as prod}
        <div class="product-card">
          <img src={prod.imageUrl} alt={prod.name} loading="lazy" />
          <h3>{prod.name}</h3>
          <p><strong>${prod.price}</strong></p>
          <p>{prod.inStock ? 'In Stock' : 'Out of Stock'}</p>
        </div>
      {/each}
    </div>

    <div class="pagination">
      <button on:click={prevPage} disabled={$page === 1}>« Prev</button>
      <span>Page {$page} of {$totalPages}</span>
      <button on:click={nextPage} disabled={$page === $totalPages}>Next »</button>
    </div>
  {/if}
</div>

<style>
  /* ... (reuse previous styles for .container, .product-list, .product-card, etc.) ... */
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 20px;
  }
  .pagination button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .error {
    color: red;
    text-align: center;
  }
</style>
