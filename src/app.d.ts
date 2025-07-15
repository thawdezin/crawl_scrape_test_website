// src/app.d.ts
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            user?: {
                userId: string;
                // Add any other properties from your decoded token here
            };
        }
        // interface PageData {}
        // interface Platform {}
    }
}

export {};