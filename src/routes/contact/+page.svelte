<svelte:head>
  <title>Contact Us - Computer Shop</title>
  <meta name="description" content="Contact details for our dummy computer shop for web crawling and scraping testing." />
</svelte:head>

<div class="container">
  <p class="breadcrumb">
    <a href="/">Home</a> &gt; Contact Us
  </p>
  <h1>Contact Us</h1>
  <p>Since this is a dummy website for testing purposes, we do not have real contact information. However, you can imagine reaching us through the following:</p>

  <div class="contact-info">
    <p><strong>Email:</strong> <a href="mailto:info@dummycomputershop.com">info@dummycomputershop.com</a></p>
    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
    <p><strong>Address:</strong> 123 Test Street, Dummy City, 12345, Imaginary Land</p>
  </div>

  <h2>Send us a message (dummy form)</h2>
  <form class="contact-form" on:submit|preventDefault={() => alert('This is a dummy form and does not send messages.')}>
    <div class="form-group">
      <label for="name">Your Name:</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="email">Your Email:</label>
      <email type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="message">Your Message:</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    <button type="submit">Send Message</button>
  </form>

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
  h1, h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }
  .contact-info {
    text-align: center;
    margin-bottom: 30px;
  }
  .contact-info p {
    margin-bottom: 10px;
  }
  .contact-info a {
    color: #007bff;
    text-decoration: none;
  }
  .contact-info a:hover {
    text-decoration: underline;
  }
  .contact-form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .form-group input[type="text"],
  .form-group input[type="email"],
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; /* Include padding in width */
  }
  .form-group textarea {
    resize: vertical;
  }
  button[type="submit"] {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    display: block;
    width: 100%;
    transition: background-color 0.3s ease;
  }
  button[type="submit"]:hover {
    background-color: #0056b3;
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