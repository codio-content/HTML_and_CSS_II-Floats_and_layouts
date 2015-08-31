var io = require('socket.io-client');
var socket = io.connect('http://localhost:9500');
var _ = require('underscore');

socket.emit('get_config_test',{});

socket.on('set_config_test', function(msg){
    var all_left = _.all(msg, function(item){
      return item.float === "left";    
    });
  
    if (all_left) {
      process.stdout.write('Well done!!!\n');
      process.exit(0);
    } else {
      process.stdout.write('All balloons should be floating left ..\n');
      process.exit(1);
    }
});








