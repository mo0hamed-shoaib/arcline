production build report:

Performance 97
Accessibility 100
Best Practices 100
SEO 100

First Contentful Paint 0.3 s
Largest Contentful Paint 1.2 s
Total Blocking Time 0 ms
Cumulative Layout Shift 0
Speed Index 1.0 s

Insights
Legacy JavaScript Est savings of 14 KiB
Polyfills and transforms enable older browsers to use new JavaScript features. However, many aren't necessary for modern browsers. Consider modifying your JavaScript build process to not transpile Baseline features, unless you know you must support older browsers. Learn why most sites can deploy ES6+ code without transpilingFCPLCP
URL
Wasted bytes
localhost 1st party
13.7 KiB
…chunks/c6cd7da0013d1fca.js(localhost)
13.7 KiB
c6cd7da0013d1fca.js:19
Array.prototype.at
c6cd7da0013d1fca.js:19
Array.prototype.flat
c6cd7da0013d1fca.js:19
Array.prototype.flatMap
c6cd7da0013d1fca.js:19
Object.fromEntries
c6cd7da0013d1fca.js:19
Object.hasOwn
c6cd7da0013d1fca.js:19
String.prototype.trimEnd
c6cd7da0013d1fca.js:19
String.prototype.trimStart
Render blocking requests Est savings of 80 ms
Requests are blocking the page's initial render, which may delay LCP. Deferring or inlining can move these network requests out of the critical path.FCPLCP
URL
Transfer Size
Duration
localhost 1st party
21.5 KiB 90 ms
…chunks/b8dd2f29ea0723eb.css(localhost)
19.9 KiB
…chunks/9d37ccf4f9b2760e.css(localhost)
1.6 KiB
90 ms
Network dependency tree
Avoid chaining critical requests by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.LCP
Maximum critical path latency: 53 ms
Initial Navigation
http://localhost:3000 - 41 ms, 24.38 KiB
…chunks/b8dd2f29ea0723eb.css(localhost) - 53 ms, 19.88 KiB
…chunks/9d37ccf4f9b2760e.css(localhost) - 48 ms, 1.62 KiB
Preconnected origins
preconnect hints help the browser establish a connection earlier in the page load, saving time when the first request for that origin is made. The following are the origins that the page preconnected to.
Origin
Source
https://res.cloudinary.com/
head > link

<link rel="preconnect" href="https://res.cloudinary.com" crossorigin="anonymous">
Unused preconnect. Only use `preconnect` for origins that the page is likely to request.
Preconnect candidates
Add preconnect hints to your most important origins, but try to use no more than 4.
No additional origins are good candidates for preconnecting
LCP breakdown
These insights are also available in the Chrome DevTools Performance Panel - record a trace to view more detailed information.
Diagnostics
Avoid serving legacy JavaScript to modern browsers Est savings of 13 KiB
Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. Consider modifying your JavaScript build process to not transpile Baseline features, unless you know you must support legacy browsers. Learn why most sites can deploy ES6+ code without transpilingFCPLCP
URL
Est Savings
localhost 1st party
13.4 KiB
…chunks/c6cd7da0013d1fca.js(localhost)
13.4 KiB
c6cd7da0013d1fca.js:19
Array.prototype.at
c6cd7da0013d1fca.js:19
Array.prototype.flat
c6cd7da0013d1fca.js:19
Array.prototype.flatMap
c6cd7da0013d1fca.js:19
Object.fromEntries
c6cd7da0013d1fca.js:19
Object.hasOwn
c6cd7da0013d1fca.js:19
String.prototype.trimEnd
c6cd7da0013d1fca.js:19
String.prototype.trimStart
Reduce unused JavaScript Est savings of 95 KiB
Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. Learn how to reduce unused JavaScript.FCPLCP
URL
Transfer Size
Est Savings
localhost 1st party
254.3 KiB	95.4 KiB
…chunks/9f7685f08ad57342.js(localhost)
134.2 KiB
45.9 KiB
…chunks/c6cd7da0013d1fca.js(localhost)
67.9 KiB
24.8 KiB
…chunks/8e9af62dcbe6c112.js(localhost)
52.2 KiB
24.7 KiB
Avoid long main-thread tasks 1 long task found
More information about the performance of your application. These numbers don't directly affect the Performance score.
