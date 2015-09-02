## display : none

This one is quite easy to understand, and I'm sure you will have figured it out.
When you set `display:none;` on an element, it is not displayed on screen anymore, it disappears totally.

Beware that it is like the element don't exist anymore. The space it was taking can be re-used by other elements.

Have a look at the example on the left. We have 3 divs, on top of each other with different colors. If you click on "Toggle display none" at the bottom. You will see that the blue div will disappear totally, and the green div will go up and take its position as if the blue element was never there.

So this is very practical if you want to hide elements. But sometime when you hide elements you don't want to free the space they are using, because otherwise it breaks your layout, for that we have another css property: `visibility:hidden;`

## visibility : hidden

Let's compare the behaviour of those two ways of hidding something in CSS. [Click here](close_all; open_file display-modes/none-hidden.html panel=0; open_preview display-modes/none-hidden.html panel=1) to open the next example.

If you click "Toggle display none" it will act as in the previous example. But if you click on "Toggle visibility hidden", it will add/remove "visibility:hidden;" on the blue div. In this case, the element is effectively hidden from the page but its space remains taken, the green element doesn't go up to take its place.

| display:block | display:none | visibility:hidden |
| :--: | :--: | :--: |
| ![](.guides/img/display-block.png) | ![](.guides/img/display-none.png) | ![](.guides/img/visibility-hidden.png) |


