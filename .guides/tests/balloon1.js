var io = require('socket.io-client');
var socket = io.connect('http://localhost:9500');

socket.emit('get_config_test',{});


socket.on('set_config_test', function(msg){
    v
});





