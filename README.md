= RSS memory leak test case

RSS memory doesn't release after doing some intensive tasks (highload).

== My environment

- CPU: Core i5 450M 2.4Ghz
- OS: Ubuntu Server 12.04 (64 bit)
- RAM: 4096Mb
- Node.JS verison: 0.8.14

== How to reproduce leak

1. Start `node server.js`
2. Start `node client.js`
3. Wait until RSS memory usage of `node server.js` rise up to 250-300Mb (or more).
4. Stop `client.js` and wait some time to give `server.js` time to complete all tasks.
5. If heap memory hasn't released you may start `client.js` for a short time again, to get GC of `server.js` work.

== Expected result

RSS memory will be released as well as a heap memory and will be comparable with initial values.

== Actual result

Heap memory released successfully, but RSS memory not.

My results:

Before test:

	{ rss: 9768960, heapTotal: 6131200, heapUsed: 2604752 }

After test:

	{ rss: 184217600, heapTotal: 6114560, heapUsed: 2660472 }

== Related discussions

https://github.com/einaros/ws/issues/43
http://grokbase.com/t/gg/nodejs/12ab62nmvb/is-growing-rss-something-to-worry-about
https://groups.google.com/d/topic/nodejs/7EixhOfY2Ds/discussion