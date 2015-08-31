var fs = require('fs');
var cheerio = require('cheerio');

var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/divsandspans/dont-abuse-list.html";


if (!fs.existsSync(stylepath)) {
    errors.push("clear.html doesnt exist")
} else {
    var $ = cheerio.load(fs.readFileSync(stylepath));

    if ($("div.list").length >= 1) {
      errors.push("There is still a div with class list.");
    }
  
    if ($("span.element").length >= 3) {
      errors.push("There are still 3 spans with class element.");
    } 
  
    if ($("ul").length != 1) {
      errors.push("We didn't find the ul tag.");
    } else {
      if ($("ul > li").length != 3) {
        errors.push("We didn't find the 3 li tags.");
      }
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
