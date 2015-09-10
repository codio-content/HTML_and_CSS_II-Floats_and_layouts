var fs = require('fs');
var cheerio = require('cheerio');

var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/dont-abuse/dont-abuse-p.html";


if (!fs.existsSync(stylepath)) {
    errors.push("clear.html doesnt exist")
} else {
    var $ = cheerio.load(fs.readFileSync(stylepath));

    if ($("#paragraph").length >= 1) {
      errors.push("There is still a div with id = paragraph");
    }
  
    if ($("span.emphasize").length >= 1) {
      errors.push("There is still a span with class emphasize.");
    } 
  
    if ($("p").length != 1) {
      errors.push("We didn't find the correct p tag.")
    } else {
        if ($("p").text().trim() != "This is nice") {
          errors.push("The paragraph doesn't have the correct text.")
        }
      
        if ($("p b").length != 1) {
          errors.push("We didn't find the correct b tag inside the paragraph.")
        } else {
          if ($("p b").text().trim() != "nice") {
            errors.push("The b tag doesn't have the correct text.")
          }
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
