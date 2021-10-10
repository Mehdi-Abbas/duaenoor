var CACHE_NAME = 'pwa-task-manager';
var urlsToCache = [
  '/duaenoor/',
  '/duaenoor/index.html',
  '/duaenoor/read.html',
  '/duaenoor/readlisten.html',
  '/duaenoor/style.css',
  '/duaenoor/listen.html',
  '/duaenoor/images/noor1-min.png',
  '/duaenoor/images/noor2-min.png',
  '/duaenoor/images/noor3-min.png',
  '/duaenoor/images/noor4-min.png',
  '/duaenoor/images/noor5-min.png',
  '/duaenoor/images/noor6-min.png',
  '/duaenoor/images/noor7-min.png',
  '/duaenoor/images/noor8-min.png',
  '/duaenoor/images/noor9-min.png',
  '/duaenoor/images/noor10-min.png',
  '/duaenoor/images/noor11-min.png',
  '/duaenoor/images/noor12-min.png',
  '/duaenoor/images/noor13-min.png',
  
  
];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = ['pwa-task-manager'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});