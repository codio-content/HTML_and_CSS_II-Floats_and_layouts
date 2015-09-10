var cssutils = require('codio-css-utils');

var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/layout-site/fixit.html";

var ast = cssutils.get_ast(stylepath);


var float_check = {
  "selector" : "#footer",
  "check" : "clear:both;",
  "error" : "You didn't fix the layout!"
}

if (ast.ast == undefined) {
  errors.push(stylepath + " doesn't exist or cannot be parsed"); 
} else {
  ast.check(float_check,errors);
}


if( errors.length <= 0 ) {
  process.stdout.write('Well done!\n');
  process.exit(0);
}
else {
  process.stdout.write(errors.join("\n"));
  process.stdout.write('\n');
  process.exit(1);
}

