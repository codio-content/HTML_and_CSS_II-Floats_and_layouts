var io = require('socket.io-client');
var socket = io.connect('http://localhost:9500');
var _ = require('underscore');

socket.emit('get_config_test',{});

socket.on('set_config_test', function(msg){
    var all_left = _.all(msg, function(item){
      if (item.color==="blue" || item.color ==="yellow" ) {
        return (item.float === "left" && (item.clear === "left" || item.clear === "both"));
      } else {
        return (item.float === "left" && item.clear === "none");
      }
    });
  
    if (all_left) {
      process.stdout.write('Well done!\n');
      process.exit(0);
    } else {
      process.stdout.write('All balloons should be making a C like in the picture!\n');
      process.exit(1);
    }
});





