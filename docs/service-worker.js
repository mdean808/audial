const build = [
  "/_app/start-302331c9.js",
  "/_app/pages/__layout.svelte-a1c4d212.js",
  "/_app/assets/pages/__layout.svelte-096405ad.css",
  "/_app/pages/__error.svelte-1cc9eaa7.js",
  "/_app/pages/index.svelte-e2a9b140.js",
  "/_app/chunks/vendor-c11fbefc.js",
  "/_app/assets/vendor-0aa84dd2.css",
  "/_app/chunks/singletons-d1fb5791.js",
  "/_app/chunks/store-ff5d40bc.js"
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
const version = "v0.0.5";
const worker = self;
const CACHE_NAME = "audial-cache-" + version;
const VALID_HOSTS = [
  location.host,
  "api.spotify.com",
  "us-central1-audial-6e1bd.cloudfunctions.net"
];
const filesToCache = build.concat(files);
worker.addEventListener("install", (event) => {
  if (!worker)
    return;
  event.waitUntil(installWorker());
  event.waitUntil(activateWorker());
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
    if (!VALID_HOSTS.find((host) => host === new URL(event.request.url).host) || event.request.url.includes("/daily")) {
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
