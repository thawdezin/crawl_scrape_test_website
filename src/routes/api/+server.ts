// src/routes/api/+server.ts

import type { RequestHandler } from '@sveltejs/kit';
import { authenticate } from '$lib/server/auth'; // Adjust path as necessary
import { json } from '@sveltejs/kit'; // For returning JSON responses

export const GET: RequestHandler = async (event) => {
    const authResult = await authenticate(event);
    if (authResult) {
        return authResult; // Return the error response from authenticate
    }

    // If authentication is successful, continue with the original logic
    return json({ message: 'GET called', time: new Date().toISOString(), user: event.locals.user }, {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
};

export const POST: RequestHandler = async (event) => {
    const authResult = await authenticate(event);
    if (authResult) {
        return authResult;
    }

    const data = await event.request.json();
    return json({ message: 'POST called', data, user: event.locals.user }, {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    });
};

export const PUT: RequestHandler = async (event) => {
    const authResult = await authenticate(event);
    if (authResult) {
        return authResult;
    }

    const data = await event.request.json();
    return json({ message: 'PUT called', data, user: event.locals.user }, {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
};

export const PATCH: RequestHandler = async (event) => {
    const authResult = await authenticate(event);
    if (authResult) {
        return authResult;
    }

    const data = await event.request.json();
    return json({ message: 'PATCH called', data, user: event.locals.user }, {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
};

export const DELETE: RequestHandler = async (event) => {
    const authResult = await authenticate(event);
    if (authResult) {
        return authResult;
    }

    return json({ message: 'DELETE called', user: event.locals.user }, {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
};