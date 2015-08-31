var fs = require('fs');
var cheerio = require('cheerio');

var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/divsandspans/concrete-example.html";


if (!fs.existsSync(stylepath)) {
    errors.push("clear.html doesnt exist")
} else {
    var $ = cheerio.load(fs.readFileSync(stylepath));

    if ($("div:nth-of-type(2)").length != 1) {
      errors.push("There is no div at the end of the body");
    } else {
      if (!$("div:nth-of-type(2)").hasClass('my-div')) {
        errors.push("The div at the end of the body doesn't have the class `my-div`");
      }
      
      if (!$().text().trim() == "This is my first div !") {
        errors.push("The div you created doesn't have the correct text: 'This is my first div !'");
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
