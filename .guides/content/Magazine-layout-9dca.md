In the left hand pane, we have the "magazine" layout from the previous challenge.

Again let's take a bit of time to see how it works?

First we have the balloons 1-3-5 with `float:left;` and 2-4 with `float:right;`. So they are on the right sides, but again we need each of those to clear the float of the previous one. The easy way is to put them all with `clear:both;` and that works, but it's not necessary. If you put the balloons 3 and 5 with `clear:right;` they will clear the float of the 2 and 4 which are floating right and similarly if you put the balloons 2 and 4 with `clear:left;` they will clear the floats of balloons 1 and 3 which are floating left. Anyway you can never go wrong when using `clear:both;` and that's what most people do in their webpages ... But it's important to understand it correctly.

{Check It!|assessment}(test-3061906460)
