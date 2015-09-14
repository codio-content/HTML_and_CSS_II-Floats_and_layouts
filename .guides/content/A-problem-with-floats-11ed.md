Let's have a look at the example in the left hand panes, we have two orange `div`s that have `float: left;` and they are inside another `div` which has an id of `container` and a gray background.

```
<div id="container">
  <div class="floating"> </div>
  <div class="floating"> </div>    
</div>
```

The floating `div`s are out of the flow and thus not taking any space inside the containing `div`. That's why we see that the container is "collapsed", the only space taken is by its own padding. Without its padding, it would collapse totally on a line, and without borders and background it would just be invisible.

But what if we would like to have our container `div` growing with the floats ? See next.