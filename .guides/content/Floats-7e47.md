Let's continue on our example of having a "photo" with some text around. In the bottom left hand preview, you can see the result as we want it !

What's the difference ? This time the element is a block-level element but we have added him the property: `float:left;` and thus it will "float" on the top left of its container. Text is pushed to the right of it because it is still a block element and is thus pushing things around it. In this case we have added a margin of 10px on the right and bottom of the box so it looks nice ! Problem solved.

### The possible values for the float property are :

```css
float: none | left | right ;
```

- `float: none;` is the default and is normally not necessary, except if you want to "unfloat" an element that was made floating by some CSS class or other.

- `float: left;` will make an element float on the left side.

- `float: right;` will make an element float on the right side.

In order to float an element, it has to have an explicit "width" property, if it doesn't the result will be unpredictable.

It makes sense to "float" elements only if there are block-level elements, inline elements do not need to be "floated" because they are already inline with their content. If you try to float an inline element, you will automatically transform it into a block-level element.


{Check It!|assessment}(test-2954323356)

|||guidance

Solution :

```css
 div { 
      float:right; 
      box-sizing:border-box; 
      padding:10px; 
      width:80px; 
      height:80px; 
      background-color:#FFBB83; 
      margin:0 10px 10px 0; 
    }
```

|||


Now let's go to the next sections to see floats in depth.