var io = require('socket.io-client');
var socket = io.connect('http://localhost:9500');
var _ = require('underscore');

socket.emit('get_config_test',{});

socket.on('set_config_test', function(msg){
    var all_left = _.all(msg, function(item){
      if (item.color==="red") {
        return (item.float === "left");
      } else if (item.color==="blue" || item.color ==="pink") {
        return (item.float === "left" && (item.clear === "right" || item.clear === "both"));
      } else {
        return (item.float === "right" && (item.clear === "left" || item.clear === "both"));
      }
    });
  
    if (all_left) {
      process.stdout.write('Well done!!!\n');
      process.exit(0);
    } else {
      process.stdout.write('All balloons should be making the magazine layout as in the picture!\n');
      process.exit(1);
    }
});





