<svelte:head>
  <title>About Us - Computer Shop</title>
  <meta name="description" content="Learn about our dummy computer shop for web crawling and scraping testing." />
</svelte:head>

<div class="container">
  <p class="breadcrumb">
    <a href="/">Home</a> &gt; About Us
  </p>
  <h1>About Us</h1>
  <p>Welcome to the Dummy Computer Shop! This website has been built purely for the purpose of demonstrating and testing web crawling and scraping techniques.</p>
  <p>We do not sell any real products. All product names, descriptions, prices, and images are randomly generated and serve no commercial purpose.</p>
  <p>Feel free to crawl and scrape this site to test your bots, but please be mindful of the server load if you plan on running extensive tests.</p>
  <p>Thank you for visiting!</p>
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
    max-width: 800px;
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
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }
  p {
    line-height: 1.6;
    margin-bottom: 15px;
    text-align: justify;
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