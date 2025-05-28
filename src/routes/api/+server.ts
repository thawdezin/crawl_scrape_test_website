// src/routes/api/+server.ts

import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	return new Response(JSON.stringify({ message: 'GET called', time: new Date().toISOString() }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
};

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	return new Response(JSON.stringify({ message: 'POST called', data }), {
		status: 201,
		headers: { 'Content-Type': 'application/json' }
	});
};

export const PUT: RequestHandler = async ({ request }) => {
	const data = await request.json();
	return new Response(JSON.stringify({ message: 'PUT called', data }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
};

export const PATCH: RequestHandler = async ({ request }) => {
	const data = await request.json();
	return new Response(JSON.stringify({ message: 'PATCH called', data }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
};

export const DELETE: RequestHandler = async ({ url }) => {
	return new Response(JSON.stringify({ message: 'DELETE called' }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
};
