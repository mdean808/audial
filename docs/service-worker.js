const build = [
  "/_app/start-038339be.js",
  "/_app/pages/__layout.svelte-5ad4d269.js",
  "/_app/assets/pages/__layout.svelte-90d1bb6c.css",
  "/_app/pages/__error.svelte-8f673b82.js",
  "/_app/pages/index.svelte-1f602490.js",
  "/_app/chunks/vendor-832d971d.js",
  "/_app/assets/vendor-0aa84dd2.css",
  "/_app/chunks/singletons-d1fb5791.js",
  "/_app/chunks/store-a531a00f.js"
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
const version = "v0.0.4";
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
    if (!VALID_HOSTS.find((host) => host === new URL(event.request.url).host) || event.request.url.includes("version.json")) {
      return await fetch(event.request);
    }
    const r = await caches.match(event.request);
    if (r) {
      return r;
    }
    const response = await fetch(event.request);
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
      await caches.delete(key);
    }
  }
};
