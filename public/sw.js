self.options = {
    "domain": "5gvci.com",
    "zoneId": 10540157
}
self.lary = ""
importScripts('https://5gvci.com/act/files/service-worker.min.js?r=sw')

/**
 * Service Worker for PDFCraft
 */

const CACHE_NAME = 'pdfcraft-cache-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Simple pass-through for now to avoid errors
    // In a real PWA, caching logic would go here
});
