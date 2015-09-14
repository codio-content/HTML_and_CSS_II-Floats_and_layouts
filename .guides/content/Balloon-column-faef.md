In the left hand pane, we have a balloon column as you did in the previous challenge.

Let's think for a while about how it works?

First we have the balloons floating left, that's obvious, we want the column on the left. But the important part here is that the balloons 2-3-4-5 need to have `clear:left;` or `clear:both` for this to work. The balloon 2 clears the float of balloon 1, meaning it will not go up next to it, but stay underneath it. The balloon 3 clears the float of baloon 2 and so on ...