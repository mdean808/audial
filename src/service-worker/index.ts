import { build, files, version } from '$service-worker';

const worker = self as unknown as ServiceWorker;

const CACHE_NAME = 'audial-cache-' + version;
const VALID_HOSTS = [location.host, 'api.spotify.com'];
const filesToCache = build.concat(files);

worker.addEventListener('install', (event) => {
  if (!worker) return;
  event.waitUntil(installWorker());
});

worker.addEventListener('activate', (event) => {
  if (!worker) return;
  event.waitUntil(activateWorker());
});

// check the cache for the request before fetching -- if it's not there, fetch it and update the cache
worker.addEventListener('fetch', (event) => {
  if (!worker) return;
  event.respondWith(
    (async () => {
      const r = await caches.match(event.request);
      if (r) {
        return r;
      }
      // make sure we only cache things we want to.
      const response = await fetch(event.request);

      if (!VALID_HOSTS.find((host) => host === new URL(event.request.url).host)) {
        return response;
      }
      const cache = await caches.open(CACHE_NAME);
      await cache.put(event.request, response.clone());
      return response;
    })()
  );
});

// set up the cache and add all local files
const installWorker = async () => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(filesToCache);
};

// prevent cache buildup on version changes
const activateWorker = async () => {
  const keys = await caches.keys();
  for (const key of keys) {
    if (key !== CACHE_NAME) {
      await caches.delete(CACHE_NAME);
    }
  }
};
