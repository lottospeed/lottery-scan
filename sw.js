const CACHE_NAME = 'lotto-lucky-v1';
const ASSETS = [
  'index.html',
  'privacy.html',
  'manifest.json'
];

// 安裝並快取基礎檔案 (符合 Google Lighthouse PWA 評分規範)
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// 攔截請求，優化載入速度
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
