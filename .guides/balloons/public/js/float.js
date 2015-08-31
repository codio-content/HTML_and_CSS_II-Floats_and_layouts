function parseHashBangArgs(aURL) {
    aURL = aURL || window.location.href;

    var vars = {};
    var hashes = aURL.slice(aURL.indexOf('#') + 1).split('&');

    for(var i = 0; i < hashes.length; i++) {
        var hash = hashes[i].split('=');

        if(hash.length > 1) {
            vars[hash[0]] = hash[1];
        } else {
            vars[hash[0]] = null;
        }      
    }

    return vars;
}


function linkClick($this) {
  //get things to apply
  var theclass = $this.attr("class");
  var parts = theclass.split("-");
  var prop = parts[0];
  var val = parts[1];

  //get parent span
  var $span = $this.parent("span")

  //get color
  var $minib = $this.parents(".miniballoon-container").find(".miniballoon");
  var cls = $minib.attr("class")
  var color = cls.split(" ")[1];

  $("div.balloon."+color).css(prop,val);

  $span.find(".selected").removeClass("selected")

  $this.addClass("selected")
}

function get_config(){
  
  var config = [];
 
  $("div.balloon").each(function(){
    
    var $this = $(this);
    var theclass = $this.attr("class");
    var parts = theclass.split(" ");
    var color = parts[1];
    
    config.push({
      "color" : color,
      "float" : $this.css("float"),
      "clear" : $this.css("clear")      
    });
    
  })
  
  return config;
}


$(document).ready(function(){
  
  if(window.location.hash) {
    var hashes = parseHashBangArgs();
    
    if (hashes.noClear == "1" || hashes.noClear == "true") {
      $("span.clear").hide();
    }
    
    if (hashes.config) { //example : #config=red-fl-cl|blue-fl-cl|green-fl-cl|yellow-fl-cl|pink-fl-cl
      var configs = hashes.config.split("|");
      $.each(configs,function(idx,val){
        var configparts = val.split("-");
        var which = configparts[0];
        var float = configparts[1][1];
        var clear = configparts[2][1];
        
        var float_selector = ".float-";
        var clear_selector = ".clear-";
        
        switch(float) {
          case 'n':
              float_selector+="none";
              break;
          case 'l':
              float_selector+="left";
              break;
          case 'r':
              float_selector+="right";
              break;
          default:
              float_selector+="none";
        }
        
        switch(clear) {
          case 'n':
              clear_selector+="none";
              break;
          case 'l':
              clear_selector+="left";
              break;
          case 'r':
              clear_selector+="right";
              break;
          case 'b':
              clear_selector+="both";
              break;
          default:
              clear_selector+="none";
        }
        
        linkClick($(".miniballoon."+which).parent().find(float_selector));
        linkClick($(".miniballoon."+which).parent().find(clear_selector));
        
      })
      
    }
    
  }
  
  
  $(".links a").click(function(){
    linkClick($(this));
  })
  
})