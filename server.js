var net = require('net');

var server = net.createServer(function (socket) {
	socket.on('data', function() {
		setTimeout(function() {
			// Play with iterations here
			// 1000 or less works for me as expected (without leak)
			for (var i = 0; i < 100000; i++) {
				var d = new Date();
				socket.write(d.toString());
			}
		}, 10);
	});
});

server.listen(1337, '127.0.0.1');

setInterval(function() {
	console.log(process.memoryUsage());
}, 2000);

process.on('uncaughtException', function (err) {
	console.log(err);
	// Ignore
});
