Let's have a look at the example on the left, we have two orange divs that have `float: left;` and they are inside a `#container` div, which has a gray background.

```css
<div id="container">
  <div class="balloon red"> </div>
  <div class="balloon green"> </div>    
</div>
```

Nevertheless, the floating divs are out of the flow and thus not taking any space inside the `#container` div. That's why we see that the container is "collapsed", the only space taken is by its own padding, without its padding it would collapse totally on a line, and without borders and background it would just be invisible.

## Why is that ? And how can we fix it ?

| If floats were taking vertical space | Actual behaviour |
| :--: | :--: |
| ![](.guides/img/without-clear.png) | ![](.guides/img/actual-clear.png) |

The reason of this behaviour is simple, if containers would have to consider the floats they contain as part of the flow and thus taking space, we would have problems if we have a tall float inside an element containing text, then at the end of it, their would be a big empty space (as you can see on the left picture above) with no possibility to fix it. You can see how it is displayed correctly on the left image, with the float continuing after the end of the first gray container and over the second one, and pushing the text of both.

So, by default, floats do not take any vertical or horizontal space in their containers (except for pushing TEXT content on the sides) and we can fix it by using the css property `clear`.

An element that has the clear property set, will not move up, next to the float, like it would normally, but will instead stay under the float as if the float would be a normal block element. (That's why it's called "clear", because it clearing the floats before him.)

The values for clear are :

```css
clear : none | left | right | both;
```

 - `clear: none;` being the default value with no effect.
 - `clear: left;` will not go up on left floated elements.
 - `clear: right;` will not go up on right floated elements.
 - `clear: both;` will not go up on left or right floated elements.
 
 ### Now we have a solution to fix our collapsed container problem.
 
 In order to fix it, we have to add a `div` after the two floats, with the property `clear:left;` or `clear:both;` (in this case we want to clear left floated elements so both of these will work). This div will not go up and thus stay under the floats, as it is also in the container, the container will grow to contain this div.
 
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


 
