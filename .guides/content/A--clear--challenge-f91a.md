### Now we have a solution to fix our collapsed container problem.
 
 In order to fix it, we have to add a `div` after the two floats, with the property `clear:left;` or `clear:both;` (in this case we want to clear left floated elements so both of these will work). This `div` will not go up and thus stay under the floats, as it is also in the container, the container will grow to contain this `div`.
 
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