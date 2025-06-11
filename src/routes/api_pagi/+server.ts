// src/routes/api/products/+server.ts

import type { RequestHandler } from '@sveltejs/kit';

interface Product {
  id: number;
  name: string;
  brand: string;
  type: string;
  price: string;
  description: string;
  imageUrl: string;
  rating: string;
  reviews: number;
  inStock: boolean;
  detailsUrl: string;
}

// Helper to generate `count` products starting from `startId`
function generateProducts(startId: number, count: number): Product[] {
  const brands = ['Dell', 'HP', 'Lenovo', 'Acer', 'Asus', 'MSI', 'Apple'];
  const types = ['Laptop', 'Desktop', 'Monitor', 'Keyboard', 'Mouse', 'Webcam'];
  const descriptions = [
    'Powerful for demanding tasks.',
    'Sleek design, everyday use.',
    'High performance for gaming.',
    'Budget-friendly, solid performance.',
    'Ergonomic, comfortable.',
    'Crystal clear display.',
  ];

  return Array.from({ length: count }, (_, i) => {
    const id = startId + i;
    const brand = brands[id % brands.length];
    const type = types[id % types.length];
    const price = (Math.random() * (1500 - 300) + 300).toFixed(2);
    const rating = (Math.random() * (5 - 3) + 3).toFixed(1);
    const reviews = Math.floor(Math.random() * 500);
    const inStock = Math.random() > 0.2;
    const imageUrl = `https://picsum.photos/seed/${id}/300/200`;

    return {
      id,
      name: `${brand} ${type} ${id}`,
      brand,
      type,
      price,
      description: descriptions[id % descriptions.length],
      imageUrl,
      rating,
      reviews,
      inStock,
      detailsUrl: `/product/${id}`
    };
  });
}

export const GET: RequestHandler = async ({ url }) => {
  // Query parameters: ?page=1&limit=10
  const page = Number(url.searchParams.get('page') ?? '1');
  const limit = Number(url.searchParams.get('limit') ?? '10');
  const offset = (page - 1) * limit;

  // Generate total count e.g. 100 items
  const TOTAL = 100;

  // Slice products for this page
  const items = generateProducts(offset + 1, Math.min(limit, TOTAL - offset));

  return new Response(
    JSON.stringify({
      page,
      limit,
      total: TOTAL,
      totalPages: Math.ceil(TOTAL / limit),
      data: items
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};
