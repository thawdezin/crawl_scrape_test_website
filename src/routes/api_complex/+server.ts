// src/routes/api_complex/+server.ts

import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

/**
 * Helper function: Returns an empty JSON object: {}
 */
const getEmptyObject: RequestHandler = async () => {
    return json({"Hsu Myat Wai"}, { status: 200 });
};

/**
 * Helper function: Returns an empty JSON array: []
 */
const getEmptyArray: RequestHandler = async () => {
    return json(["Hsu Myat Wai"], { status: 200 });
};

/**
 * Helper function: Returns a JSON object containing an array: { items: [...] }
 */
const getObjectWithArray: RequestHandler = async () => {
    const data = {
        items: [
            { id: 1, name: 'Apple', category: 'Fruit' },
            { id: 2, name: 'Banana', category: 'Fruit' },
            { id: 3, name: 'Carrot', category: 'Vegetable' }
        ],
        total: 3,
        message: 'List of items'
    };
    return json(data, { status: 200 });
};

/**
 * Helper function: Returns a JSON array of objects: [{...}, {...}]
 */
const getArrayOfObjects: RequestHandler = async () => {
    const data = [
        { id: 101, product: 'Laptop', price: 1200.00, inStock: true },
        { id: 102, product: 'Mouse', price: 25.50, inStock: false },
        { id: 103, product: 'Keyboard', price: 75.00, inStock: true }
    ];
    return json(data, { status: 200 });
};

/**
 * Helper function: Other useful format 1: Nested Objects and Arrays
 * Returns an object with nested objects and arrays.
 * { user: { id: ..., name: ... }, orders: [{...}, {...}] }
 */
const getNestedData: RequestHandler = async () => {
    const data = {
        user: {
            id: 'user123',
            name: 'Alice Smith',
            email: 'alice@example.com'
        },
        orders: [
            { orderId: 'ORD001', date: '2025-07-01', total: 150.00, status: 'completed',
              products: [
                { productId: 'P001', qty: 1 },
                { productId: 'P002', qty: 2 }
              ]
            },
            { orderId: 'ORD002', date: '2025-06-28', total: 75.20, status: 'pending',
              products: [
                { productId: 'P003', qty: 1 }
              ]
            }
        ],
        preferences: {
            theme: 'dark',
            notifications: true
        }
    };
    return json(data, { status: 200 });
};

/**
 * Helper function: Other useful format 2: Primitive Value (e.g., a string or number)
 * While not strictly JSON "objects" or "arrays", an API can sometimes return a raw primitive.
 * For example, a count, a success message, or a status.
 * Important: Flutter's `jsonDecode` expects a JSON string, so even a primitive needs to be
 * JSON-encoded (e.g., `"success"` or `123`).
 */
const getPrimitiveValue: RequestHandler = async () => {
    // Example 1: Returning a plain string (JSON encoded)
    // return new Response(JSON.stringify("Operation successful!"), {
    //     status: 200,
    //     headers: { 'Content-Type': 'application/json' }
    // });

    // Example 2: Returning a plain number (JSON encoded)
    return new Response(JSON.stringify(42), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
};


// Main GET handler to allow flexible testing
// You can access these specific responses by adding a 'type' query parameter,
// e.g., /api_complex?type=empty_object
// If no type is provided, it defaults to a common array of objects response.
export const GET: RequestHandler = async ({ url }) => {
    const type = url.searchParams.get('type');

    switch (type) {
        case 'empty_object':
            return getEmptyObject();
        case 'empty_array':
            return getEmptyArray();
        case 'object_with_array':
            return getObjectWithArray();
        case 'array_of_objects':
            return getArrayOfObjects();
        case 'nested_data':
            return getNestedData();
        case 'primitive_value':
            return getPrimitiveValue();
        default:
            // Default to a commonly used format if no type is specified
            return getArrayOfObjects();
    }
};

// You can add POST, PUT, DELETE, PATCH handlers if needed for other operations
// For learning basic JSON structures, GET is sufficient.
