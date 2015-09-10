var io = require('socket.io-client');
var socket = io.connect('http://localhost:9500');
var _ = require('underscore');

socket.emit('get_config_test',{});

socket.on('set_config_test', function(msg){
    var all_left = _.all(msg, function(item){
      if (item.color==="red" || item.color==="green" || item.color ==="blue") {
        return item.float === "left";
      } else {
        return item.float === "right";
      }
    });
  
    if (all_left) {
      process.stdout.write('Well done!\n');
      process.exit(0);
    } else {
      process.stdout.write('Some balloons should be on the right and some on the left.\n');
      process.exit(1);
    }
});





