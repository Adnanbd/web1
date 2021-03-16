'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "adddc9173de80afa9bfd2f22a7d67fe8",
".git/config": "78f9b83fadf332b7f6426207b66c8bbe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "82540a0617e11b8d5b1fed3df7590d5e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "96f3867a0c2cd95ee6bd6ecef47e1a05",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "39568f9cdd4740e0dac2fd8f75763a83",
".git/logs/refs/heads/master": "39568f9cdd4740e0dac2fd8f75763a83",
".git/logs/refs/remotes/origin/master": "24b6309dda7590a29897c91f0a14cb19",
".git/objects/04/17c3145a282f73e87a9650224c01bf2d29db6a": "0f804907c5795422fe9958e1f3f010bd",
".git/objects/0d/9b6bbf3817093563fb5df10c09a61900a23a6b": "fc4be926697ba789a040d10133374ed9",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/1b/719857e84746e441c60c5d160e2fa889d6af39": "dbdd4ce84f0973f32402dec2de197847",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/bd14412b8d19386b59be402a16f968de6760f2": "ed5d27a7a267469f38db8999c6913971",
".git/objects/3e/1aa52e3ed21c020b35fe7170489ec0fe67dfc3": "88218ce4df34452449d11752dac1a280",
".git/objects/42/d089380a0e98f328ef9cf2fe0034faaa84e34f": "dab79246646f0c5dbd5ca4571d459f95",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/55/d7c87a7a386f27dc38aac0e95b0dc8d1b35c34": "aaecdc05b38679fda6a66911080d1152",
".git/objects/56/a7558571a73f55d5796de26d1809d9395ae90d": "f3a48b93c2091f1fab1778c056128d0d",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/60/dc7beba7964acfab241eff912dd5e24c84dcf7": "eab5c3fa540e2833381deb332d4cb51b",
".git/objects/61/344438012e73ba69130de8d548c20e634266b7": "cba34a11dc9ed4a3737f57d4a449a371",
".git/objects/79/7562da248a114e2ce4794786185a5c48bbd149": "d7465c0098b8f3e67b34ae39a09d1dd2",
".git/objects/7d/36328b112649c91fecb548230f15a5207d84fa": "2e87d49df250d1920d789d2744c022f5",
".git/objects/7d/9aad51fb7077500dae6f4dc8ab68f542ef3b15": "0ed657fe79be049e85927e252ec76726",
".git/objects/7e/4a02908b6505ac6359b3201a882ac721880436": "7eb6a28e6dcfb42e93fb9f8906999a2f",
".git/objects/81/3ee27f59a09729f5bab3f04697dcc91dcf74a2": "ebc0146581dc3d35d26ad5e9de33c24d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/93/efbfbe920ccb6e975001c8c03b6e7682869197": "fa40769d0c211c0761e6bea576e257cf",
".git/objects/98/dbedf94c70f7088b7708f9760aa354d81c2dd7": "c1cbdbea4167e00013cabb6fb5a28f2a",
".git/objects/b0/73c698dafea0890479fd6af7daf8f81552ed38": "bfe57e3d4e8fe8a6d5955c4fee69d3a1",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/00c1b8e4d4cc84bf40e33c95f00b603912c9f7": "b9cb5c7a200f66aceb3933f02e8c9799",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c4/331684185574d570c4c0aae1821995e2e305b1": "2540b73e174fa2d3c852558f30dbeefb",
".git/objects/c8/88883c3d0fc9dd1be577a0ffa42571ad0482c1": "96bd9c7a16f467ac21621287d8b2310c",
".git/objects/cc/db152e3fb7eb0acb69c6155d7db53e22574341": "68d2860e90b579f0bc9695b83c3b43dd",
".git/objects/d1/9601242d0af022de18475528e0fa4d53096b00": "53ca02bfc87b47b666c1f82f861b989d",
".git/objects/d3/0ba952ef55027c3992b5d0c02f917c2dca9d28": "388cb2d30b4025b67fabc3c7cc1d84cf",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/f7/c0cec49ddae3b5d235a03f7f50f71abcd07bc3": "a6c0f8a2578c4fa7dd195ae7cad3e399",
".git/refs/heads/master": "6db1ed1ac57f9c4b54d1fc06e1ab98dd",
".git/refs/remotes/origin/master": "6db1ed1ac57f9c4b54d1fc06e1ab98dd",
"assets/AssetManifest.json": "81a188e30abd350c9c3e9eb0e0f5a9fa",
"assets/assets/antopolis.JPG": "1fae915687665244610cd83cbd78cabc",
"assets/assets/logo1.png": "7e48ebab7bc6fd3be8f8be78e4439343",
"assets/assets/logo2.png": "40f42adf7561bc6a2bdd9e76306fbfe7",
"assets/assets/logo3.png": "593bf5b8d723a79aef2b16b0388298b6",
"assets/assets/one.jpg": "60885c7f3fcae6a97a132d571d0cd255",
"assets/assets/shabashfakibaj.JPG": "326f69904a68bb7a4a8e3c6b3b0f833c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "670eb862edc48c86ed379e77d595d773",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "cebb49f6965ad16954ff8a8cdd17e8b5",
"/": "cebb49f6965ad16954ff8a8cdd17e8b5",
"main.dart.js": "c0c8a6b79b110c3261e8c20815e201a5",
"manifest.json": "7268d731e85213fad6b35f4c3b52f2e6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
