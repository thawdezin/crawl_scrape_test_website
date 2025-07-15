// src/lib/server/auth.ts
import jwt from 'jsonwebtoken';
import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

// IMPORTANT: In a real application, get this from an environment variable!
// Example: process.env.JWT_SECRET or import.meta.env.VITE_JWT_SECRET if exposed client-side (be careful)
// For server-side only secrets, use a server-side environment variable.
const JWT_SECRET = 'I_LOVE_HSU_MYAT_WAI'; // CHANGE THIS IN PRODUCTION!

interface DecodedToken {
    userId: string;
    // Add other properties you might store in the token
    iat: number;
    exp: number;
}

export async function authenticate(event: RequestEvent) {
    const authHeader = event.request.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return json({ message: 'Authorization token not provided or malformed' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
        // You can attach the decoded user info to the event locals if needed for later use
        event.locals.user = decoded;
        return null; // No error, authentication successful
    } catch (error) {
        console.error('JWT verification error:', error);
        return json({ message: 'Invalid or expired token' }, { status: 403 });
    }
}