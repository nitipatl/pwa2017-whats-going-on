importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/404.html",
    "revision": "a4e2271d19eb1f6f93a15e1b7a4e74dd"
  },
  {
    "url": "/icon/icon-192x192.png",
    "revision": "d82ff596aed51b6d49085bddf1f0f1a1"
  },
  {
    "url": "/icon/icon-48x48.png",
    "revision": "c85a1c8eb7e8340b0593db74faf4bbd1"
  },
  {
    "url": "/icon/icon-96x96.png",
    "revision": "2b1bf8d653691d20c9ae490d198329b8"
  },
  {
    "url": "/index.html",
    "revision": "ea89a51c4ccbb0b30406895cf377d490"
  },
  {
    "url": "/location-vr/IMG_20170624_133639.vr-converted.jpg",
    "revision": "f7aeb7d542308618c8d28ed2a45a20e8"
  },
  {
    "url": "/location-vr/index.html",
    "revision": "337bbc95e4c80e591c4b579b6f24ab0a"
  },
  {
    "url": "/manifest.json",
    "revision": "3908e74059459bdd5f80bf64dcb8df3a"
  },
  {
    "url": "/test_webvr.html",
    "revision": "6786e58cbd360e4fa7eb2cdb7954ef59"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
