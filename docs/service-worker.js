"use strict";var precacheConfig=[["./index.html","e98caf77abe9af917bb1fd70687a75e6"],["./static/css/main.3701dd35.css","2326375dd7f653217cbe337762add87d"],["./static/js/main.6e26c6cb.js","e0ed84777fd3330ed46d9e0140d56791"],["./static/media/cover_mobile2.02888926.png","028889260bcb23f036eb02e036404983"],["./static/media/designer.f91b7229.svg","f91b72292a123be04c8c09861d022001"],["./static/media/desktop.b9e786bf.png","b9e786bf69c7c7ee1218bb50edd3140a"],["./static/media/dots.4d1fa736.png","4d1fa7365db2c81d8155ddb29580859a"],["./static/media/download.b5f590d9.svg","b5f590d9aee9d356f76cf3bc7d086038"],["./static/media/logocorto.7edb1e32.png","7edb1e32bec6b9854e15dbf4d6334b32"],["./static/media/logolargo.2de2b3d2.png","2de2b3d2e2e0997a471027540734f2f8"],["./static/media/menu.76a25c4a.svg","76a25c4a71a0a3b9c9f189a8dff046c4"],["./static/media/paint-palette.746f8c69.svg","746f8c69d5106e7e889a4809b197d8b3"],["./static/media/text.2a5ea142.svg","2a5ea142f58c345009857749ae0df257"],["./static/media/writing.1f9bd395.svg","1f9bd395171c646b2a3a344bd15841ed"],["./static/media/zigZag.ecff126d.png","ecff126dbe043a3c0a04adca31088bda"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="./index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});