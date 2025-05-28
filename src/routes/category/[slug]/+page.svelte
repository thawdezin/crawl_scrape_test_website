<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let categoryName = $page.params.slug;
  let products = [];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function generateCategoryProducts(count, type) {
    const brands = ['Dell', 'HP', 'Lenovo', 'Acer', 'Asus', 'MSI', 'Apple'];
    const descriptions = [
      'Powerful machine for demanding tasks.',
      'Sleek design, perfect for everyday use.',
      'High performance for gaming and creativity.',
      'Budget-friendly option with solid performance.',
    ];

    const newProducts = [];
    for (let i = 1; i <= count; i++) {
      const brand = brands[Math.floor(Math.random() * brands.length)];
      const price = (Math.random() * (1500 - 300) + 300).toFixed(2);
      const rating = (Math.random() * (5 - 3) + 3).toFixed(1);
      const reviews = Math.floor(Math.random() * 500);
      const inStock = Math.random() > 0.2;
      const imageUrl = `https://picsum.photos/seed/${Math.random()}/300/200`;

      newProducts.push({
        id: `${type}-${i}`, // Unique ID for category products
        name: `${brand} ${capitalizeFirstLetter(type)} ${i}`,
        brand,
        type,
        price,
        description: descriptions[Math.floor(Math.random() * descriptions.length)],
        imageUrl,
        rating,
        reviews,
        inStock,
        detailsUrl: `/product/${i + 100}` // Link to a different set of product IDs to avoid collisions
      });
    }
    return newProducts;
  }

  onMount(() => {
    products = generateCategoryProducts(100, categoryName); // 10 products per category
  });

  $: displayCategoryName = capitalizeFirstLetter(categoryName.replace('-', ' '));
</script>

<svelte:head>
  <title>{displayCategoryName} - Computer Shop</title>
  <meta name="description" content="Dummy {displayCategoryName} category page for web crawling and scraping testing." />
</svelte:head>

<div class="container">
  <p class="breadcrumb">
    <a href="/">Home</a> &gt; {displayCategoryName}
  </p>

  <h1>{displayCategoryName}</h1>
  <p>Explore our range of {displayCategoryName.toLowerCase()} products.</p>

  <div class="product-list">
    {#each products as product (product.id)}
      <div class="product-card">
        <a href={product.detailsUrl}>
          <img src={product.imageUrl} alt={product.name} loading="lazy" />
        </a>
        <div class="product-info">
          <h3 class="product-name"><a href={product.detailsUrl}>{product.name}</a></h3>
          <p class="product-brand">Brand: {product.brand}</p>
          <p class="product-price">${product.price}</p>
          <p class="product-rating">Rating: {product.rating} ({product.reviews} reviews)</p>
          <p class="product-stock">
            {#if product.inStock}
              <span class="in-stock">In Stock</span>
            {:else}
              <span class="out-of-stock">Out of Stock</span>
            {/if}
          </p>
          <button class="add-to-cart-btn" disabled={!product.inStock}>
            {product.inStock ? 'Add to Cart' : 'Notify Me'}
          </button>
        </div>
      </div>
    {/each}
  </div>

  <div class="pagination">
    <a href="/category/{categoryName}/page/1" class="page-link">1</a>
    <a href="/category/{categoryName}/page/2" class="page-link">2</a>
  </div>

  <footer class="footer">
    <p>&copy; 2025 Dummy Computer Shop. All rights reserved.</p>
    <a href="/about">About Us</a> |
    <a href="/contact">Contact</a> |
    <a href="/privacy">Privacy Policy</a>
  </footer>
</div>

<style>
  :global(body) {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
  }

  .container {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .breadcrumb {
    font-size: 0.9em;
    color: #666;
    margin-bottom: 20px;
  }

  .breadcrumb a {
    color: #007bff;
    text-decoration: none;
  }

  .breadcrumb a:hover {
    text-decoration: underline;
  }

  h1 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    line-height: 1.6;
    text-align: center;
    margin-bottom: 30px;
  }

  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }

  .product-card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease-in-out;
  }

  .product-card:hover {
    transform: translateY(-5px);
  }

  .product-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    border-bottom: 1px solid #eee;
  }

  .product-info {
    padding: 15px;
  }

  .product-name {
    font-size: 1.2em;
    margin-top: 0;
    margin-bottom: 10px;
    min-height: 48px;
  }

  .product-name a {
    text-decoration: none;
    color: #333;
  }

  .product-name a:hover {
    color: #007bff;
  }

  .product-brand {
    font-size: 0.9em;
    color: #666;
    margin-bottom: 5px;
  }

  .product-price {
    font-size: 1.4em;
    font-weight: bold;
    color: #007bff;
    margin-bottom: 10px;
  }

  .product-rating {
    font-size: 0.9em;
    color: #555;
    margin-bottom: 10px;
  }

  .product-stock {
    font-weight: bold;
    margin-bottom: 15px;
  }

  .in-stock {
    color: #28a745;
  }

  .out-of-stock {
    color: #dc3545;
  }

  .add-to-cart-btn {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    width: 100%;
    transition: background-color 0.3s ease;
  }

  .add-to-cart-btn:hover:not(:disabled) {
    background-color: #218838;
  }

  .add-to-cart-btn:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  .pagination {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .pagination .page-link {
    display: inline-block;
    padding: 8px 15px;
    margin: 0 5px;
    border: 1px solid #007bff;
    border-radius: 4px;
    text-decoration: none;
    color: #007bff;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .pagination .page-link:hover {
    background-color: #007bff;
    color: white;
  }

  .pagination span {
    font-size: 1.2em;
    vertical-align: middle;
  }

  .footer {
    text-align: center;
    margin-top: 50px;
    padding-top: 20px;
    border-top: 1px solid #eee;
    font-size: 0.9em;
    color: #777;
  }

  .footer a {
    color: #007bff;
    text-decoration: none;
  }

  .footer a:hover {
    text-decoration: underline;
  }
</style>