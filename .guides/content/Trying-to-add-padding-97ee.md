### 3. [Trying to add padding](close_all panel=1; open_preview display-inline/inline1.html#example3 panel=1)

What do we see from this example ?
(On the right picture we have added some transparency so we can see better.)

![](.guides/img/inline-padding.png)

We see that inline elements do respect padding "in a way", namely the box with the background color and the border is bigger but the padding is only pushing the elements on the left and right sides (as with the margin) while on the top and bottom the `div`s are not pushed but the box goes "over" them (This is more clear in the transparent example). 

An interesting thing to observe when the box is not transparent, is that the box is "above" the text content that was before it and "behind" the text content that was after it.

