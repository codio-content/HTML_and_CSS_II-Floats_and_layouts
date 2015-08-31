var fs = require('fs');

var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/display-modes/inline-block-space.html";



if (!fs.existsSync(stylepath)) {
    errors.push("inline-block-space.html doesnt exist")
} else {
    
  var content = fs.readFileSync(stylepath, "utf8");
  
  if (content.indexOf('</span> <span class="blue">') != -1 
     || content.indexOf('</span> <span class="green">') != -1 
     || content.indexOf('</span><span class="blue">') == -1 
     || content.indexOf('</span><span class="green">') == -1 ) {
    
    errors.push("You didn't remove the whitespaces");
  }
  
}



if( errors.length <= 0 ) {
  process.stdout.write('Well done!!!\n');
  process.exit(0);
}
else {
  process.stdout.write(errors.join("\n"));
  process.stdout.write('\n');
  process.exit(1);
}
