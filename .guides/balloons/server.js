var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/game.html');
});

io.on('connection', function(socket){
    console.log("connection")
  
    socket.on('get_config_test', function(msg){
      console.log("received get_config_test");
      io.emit('get_config',{});
    });

    socket.on('set_config', function(msg){
      console.log("received set_config");
      io.emit('set_config_test',msg);
    });
});





http.listen(9500, function(){
  console.log('listening on *:9500');
});