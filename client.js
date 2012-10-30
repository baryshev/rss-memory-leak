var net = require('net');

var client = net.connect({ port : 1337 }, function() {
	setInterval(function() {
		client.write('hello');
	}, 1);
});

