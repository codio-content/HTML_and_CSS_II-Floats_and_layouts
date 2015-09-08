var cssutils = require('codio-css-utils');

var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/display-modes/none-challenge.html";

var ast = cssutils.get_ast(stylepath);

var check1 = {
  "selector" : ".title",
  "check" : "display:block;",
  "error" : ".title doesn't have the correct display mode."
}

var check2 = {
  "selector" : ".paragraph",
  "check" : "display:block;",
  "error" : ".paragraph doesn't have the correct display mode."
}

var check3 = {
  "selector" : ".author",
  "check" : "display:inline;",
  "error" : ".author doesn't have the correct display mode."
}

var check4 = {
  "selector" : ".book",
  "check" : "display:inline;",
  "error" : ".book doesn't have the correct display mode."
}

var check5 = {
  "selector" : ".highlight",
  "check" : "display:inline;",
  "error" : ".highlight doesn't have the correct display mode."
}

if (ast.ast == undefined) {
  errors.push(stylepath + " doesn't exist or cannot be parsed"); 
} else {

  ast.check(check1,errors);
  ast.check(check2,errors);
  ast.check(check3,errors);
  ast.check(check4,errors);
  ast.check(check5,errors);
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

