var cssutils = require('codio-css-utils');

var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/layout-3-colum/3columns.html";

var ast = cssutils.get_ast(stylepath);


var center_check = {
  "selector" : "#center",
  "check" : "margin-left:2%;",
  "error" : "You didn't fix the blue div!"
}

var right_check = {
  "selector" : "#right",
  "check" : "margin-left:2%;",
  "error" : "You didn't fix the orange div!"
}

if (ast.ast == undefined) {
  errors.push(stylepath + " doesn't exist or cannot be parsed"); 
} else {
  ast.check(center_check,errors);
  ast.check(right_check,errors);
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

