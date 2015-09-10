var cssutils = require('codio-css-utils');
var fs = require('fs');
var cheerio = require('cheerio');

var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/clear/clear.html";

var ast = cssutils.get_ast(stylepath);


var float_check = {
  "selector" : ".clearfix",
  "check" : "clear:both;"
}

if (ast.ast == undefined) {
  errors.push(stylepath + " doesn't exist or cannot be parsed"); 
} else {
  
  if (! (ast.selector_has_property(".clearfix","clear","both") || ast.selector_has_property(".clearfix","clear","left")) ) {
    errors.push(".clearfix doesn't have the correct clear property");
  }

  ast.selector_has_property (float_check,errors);

}

if (!fs.existsSync(stylepath)) {
    errors.push("clear.html doesnt exist")
} else {
    var $ = cheerio.load(fs.readFileSync(stylepath));

    if ($("div.container > div:nth-of-type(3)").length != 1) {
      errors.push("There is no div with class after the 2 floating divs");
    } else {
      if (!$("div.container > div:nth-of-type(3)").hasClass('clearfix')) {
        errors.push("The div after the 2 floating divs doesn't have class clearfix");
      }
    }
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
