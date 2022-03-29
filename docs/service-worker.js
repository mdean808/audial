const build = [
  "/_app/start-e43c41ee.js",
  "/_app/pages/__layout.svelte-c12af0bd.js",
  "/_app/assets/pages/__layout.svelte-2b10fab5.css",
  "/_app/pages/__error.svelte-24bc969d.js",
  "/_app/pages/index.svelte-f61d8bc6.js",
  "/_app/chunks/vendor-dca149f1.js",
  "/_app/assets/vendor-0aa84dd2.css",
  "/_app/chunks/singletons-d1fb5791.js",
  "/_app/chunks/store-6e616064.js"
];
const files = [
  "/favicon.ico",
  "/fonts/LeagueSpartan.ttf",
  "/icons/android-chrome-192x192.png",
  "/icons/android-chrome-512x512.png",
  "/icons/apple-touch-icon.png",
  "/icons/favicon-16x16.png",
  "/icons/favicon-32x32.png",
  "/manifest.json"
];
const version = "1648597958425";
const worker = self;
const CACHE_NAME = "audial-cache-" + version;
const VALID_HOSTS = [location.host, "api.spotify.com"];
const filesToCache = build.concat(files);
worker.addEventListener("install", (event) => {
  if (!worker)
    return;
  event.waitUntil(installWorker());
});
worker.addEventListener("activate", (event) => {
  if (!worker)
    return;
  event.waitUntil(activateWorker());
});
worker.addEventListener("fetch", (event) => {
  if (!worker)
    return;
  event.respondWith((async () => {
    const r = await caches.match(event.request);
    if (r) {
      return r;
    }
    const response = await fetch(event.request);
    if (!VALID_HOSTS.find((host) => host === new URL(event.request.url).host)) {
      return response;
    }
    const cache = await caches.open(CACHE_NAME);
    await cache.put(event.request, response.clone());
    return response;
  })());
});
const installWorker = async () => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(filesToCache);
};
const activateWorker = async () => {
  const keys = await caches.keys();
  for (const key of keys) {
    if (key !== CACHE_NAME) {
      await caches.delete(CACHE_NAME);
    }
  }
};