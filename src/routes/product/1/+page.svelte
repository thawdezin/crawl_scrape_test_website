<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let product = null;
  let productId = $page.params.id;

  // Function to generate a single random product (similar to the home page, but for one item)
  function generateSingleProduct(id) {
    const brands = ['Dell', 'HP', 'Lenovo', 'Acer', 'Asus', 'MSI', 'Apple'];
    const types = ['Laptop', 'Desktop', 'Monitor', 'Keyboard', 'Mouse', 'Webcam'];
    const descriptions = [
      'This high-performance machine is equipped with the latest processor and ample RAM, making it ideal for demanding tasks like video editing, 3D rendering, and heavy multitasking. Its sleek design and robust build quality ensure durability and aesthetic appeal.',
      'A versatile and portable solution, perfect for students and professionals on the go. Features a long-lasting battery, a vibrant display, and a comfortable keyboard for extended use. Enjoy seamless productivity and entertainment wherever you are.',
      'Experience immersive visuals with this stunning 4K monitor, offering incredible clarity and color accuracy. Ideal for graphic designers, gamers, and anyone who appreciates a superior viewing experience. Multiple connectivity options ensure compatibility with all your devices.',
      'Boost your gaming setup with this mechanical keyboard, featuring customizable RGB lighting and tactile switches for a responsive and satisfying typing experience. Designed for durability and precision, it gives you the edge in competitive gaming.',
      'Achieve pinpoint accuracy with this ergonomic gaming mouse, equipped with a high-precision sensor and programmable buttons. Its comfortable grip reduces fatigue during long gaming sessions, and customizable weights allow for personalized control.',
      'Stay connected and look professional with this full HD webcam, offering crisp video and clear audio. Perfect for video conferencing, online classes, and streaming. Its easy plug-and-play setup gets you ready in minutes.'
    ];
    const longDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This product is designed to meet the highest standards of quality and performance, ensuring customer satisfaction. It comes with a full manufacturer's warranty and dedicated customer support.";

    const brand = brands[Math.floor(Math.random() * brands.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const price = (Math.random() * (1500 - 300) + 300).toFixed(2);
    const rating = (Math.random() * (5 - 3) + 3).toFixed(1);
    const reviews = Math.floor(Math.random() * 500) + 50; // Ensure at least 50 reviews
    const inStock = Math.random() > 0.2;
    const imageUrl = `https://picsum.photos/seed/${id * 100}/600/400`; // Consistent image for a given ID

    return {
      id: parseInt(id),
      name: `${brand} ${type} ${id}`,
      brand,
      type,
      price,
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      longDescription,
      imageUrl,
      rating,
      reviews,
      inStock,
      sku: `SKU-${Math.floor(Math.random() * 99999)}`,
      weight: (Math.random() * (5 - 0.5) + 0.5).toFixed(2), // kg
      dimensions: `${(Math.random() * 50 + 10).toFixed(0)}x${(Math.random() * 40 + 10).toFixed(0)}x${(Math.random() * 30 + 5).toFixed(0)} cm`,
      specs: [
        'Processor: Intel Core i7 / AMD Ryzen 7',
        'RAM: 16GB DDR4',
        'Storage: 512GB NVMe SSD',
        'Graphics: NVIDIA GeForce RTX 3050',
        'Operating System: Windows 11 Home',
        'Connectivity: Wi-Fi 6, Bluetooth 5.2',
        'Ports: USB-C, USB 3.0, HDMI, Ethernet'
      ],
      relatedProducts: [
        { id: parseInt(id) + 1, name: `Related Product A`, imageUrl: `https://picsum.photos/seed/${(parseInt(id) + 1) * 100}/150/100`, price: (Math.random() * (500 - 100) + 100).toFixed(2) },
        { id: parseInt(id) + 2, name: `Related Product B`, imageUrl: `https://picsum.photos/seed/${(parseInt(id) + 2) * 100}/150/100`, price: (Math.random() * (500 - 100) + 100).toFixed(2) },
      ]
    };
  }

  onMount(() => {
    product = generateSingleProduct(productId);
  });
</script>

<svelte:head>
  <title>{product ? product.name : 'Product'} - Computer Shop</title>
  <meta name="description" content={product ? product.description : 'Product detail page for web crawling test.'} />
</svelte:head>

<div class="container">
  <p class="breadcrumb">
    <a href="/">Home</a> &gt; <a href="/category/{product?.type.toLowerCase() ?? 'unknown'}">{product?.type ?? 'Product'}</a> &gt; {product?.name ?? 'Loading...'}
  </p>

  {#if product}
    <div class="product-detail">
      <div class="product-image-section">
        <img src={product.imageUrl} alt={product.name} class="main-product-image" />
      </div>
      <div class="product-info-section">
        <h1 class="product-title">{product.name}</h1>
        <p class="product-brand">Brand: {product.brand}</p>
        <div class="rating-reviews">
          <span class="product-rating">Rating: {product.rating} / 5</span>
          <span class="product-reviews">({product.reviews} reviews)</span>
        </div>
        <p class="product-price">${product.price}</p>
        <p class="product-description">{product.description}</p>
        <p class="product-stock">
          Status:
          {#if product.inStock}
            <span class="in-stock">In Stock</span>
          {:else}
            <span class="out-of-stock">Out of Stock</span>
          {/if}
        </p>
        <button class="add-to-cart-btn" disabled={!product.inStock}>
          {product.inStock ? 'Add to Cart' : 'Notify Me When Available'}
        </button>

        <div class="additional-details">
          <h2>Product Details</h2>
          <p><strong>SKU:</strong> {product.sku}</p>
          <p><strong>Weight:</strong> {product.weight} kg</p>
          <p><strong>Dimensions:</strong> {product.dimensions}</p>
          <p>{product.longDescription}</p>

          <h3>Technical Specifications</h3>
          <ul>
            {#each product.specs as spec}
              <li>{spec}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>

    <div class="related-products">
      <h2>Related Products</h2>
      <div class="related-product-list">
        {#each product.relatedProducts as related}
          <div class="related-card">
            <a href="/product/{related.id}">
              <img src={related.imageUrl} alt={related.name} loading="lazy" />
              <p class="related-name">{related.name}</p>
              <p class="related-price">${related.price}</p>
            </a>
          </div>
        {/each}
      </div>
    </div>
  {:else}
    <p>Loading product details...</p>
  {/if}

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

  .product-detail {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 30px;
  }

  .product-image-section {
    flex: 1;
    min-width: 300px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .main-product-image {
    max-width: 100%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }

  .product-info-section {
    flex: 2;
    min-width: 350px;
  }

  .product-title {
    font-size: 2em;
    margin-top: 0;
    margin-bottom: 10px;
    color: #333;
  }

  .product-brand {
    font-size: 1.1em;
    color: #666;
    margin-bottom: 10px;
  }

  .rating-reviews {
    margin-bottom: 15px;
  }

  .product-rating {
    font-weight: bold;
    color: #f0ad4e; /* Star color */
  }

  .product-reviews {
    font-size: 0.9em;
    color: #777;
    margin-left: 5px;
  }

  .product-price {
    font-size: 2.2em;
    font-weight: bold;
    color: #007bff;
    margin-bottom: 20px;
  }

  .product-description {
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .product-stock {
    font-weight: bold;
    margin-bottom: 20px;
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
    padding: 12px 25px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1em;
    width: auto;
    transition: background-color 0.3s ease;
  }

  .add-to-cart-btn:hover:not(:disabled) {
    background-color: #218838;
  }

  .add-to-cart-btn:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  .additional-details {
    margin-top: 40px;
    border-top: 1px solid #eee;
    padding-top: 20px;
  }

  .additional-details h2,
  .additional-details h3 {
    color: #333;
    margin-bottom: 15px;
  }

  .additional-details ul {
    list-style: disc;
    margin-left: 20px;
    padding: 0;
  }

  .additional-details li {
    margin-bottom: 8px;
  }

  .related-products {
    margin-top: 60px;
    padding-top: 30px;
    border-top: 1px solid #eee;
  }

  .related-products h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
  }

  .related-product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .related-card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease-in-out;
    width: 180px; /* Fixed width for related cards */
    text-align: center;
  }

  .related-card:hover {
    transform: translateY(-3px);
  }

  .related-card a {
    text-decoration: none;
    color: #333;
    display: block;
    padding: 10px;
  }

  .related-card img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    display: block;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
  }

  .related-name {
    font-size: 1em;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .related-price {
    font-size: 1.1em;
    font-weight: bold;
    color: #007bff;
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