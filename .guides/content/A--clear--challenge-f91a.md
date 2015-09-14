{Check It!|assessment}(test-420257072)
 
|||guidance
### Solution :

```html
<!DOCTYPE html>
<html>
<head>
  <title> clear </title>
  <style>
    body {
      font-family:Arial,sans-serif;
      background-color:#eee;
    }
    
    .container {
      background:#999;
      border:1px dashed #000;
      padding:10px;
      text-align:center;
    }
    
    .floating {
      width : 56px;
      height: 63px;
      background-color:#d1472b;
      float:left;
      border:1px dashed #000;
      margin-right:15px;
    }
    
    .clearfix {
      clear:both;
    }
    
  </style>
</head>
<body>
  <h2> Collapsed container </h2>
  <div class="container">
    <div class="floating"> </div>
    <div class="floating"> </div> 
    <div class="clearfix"> </div>
  </div>
  </body>
</html>
```