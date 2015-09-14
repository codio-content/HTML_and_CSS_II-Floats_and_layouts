### Why are floats out of the flow ?

| If floats were taking vertical space | Actual behaviour |
| :--: | :--: |
| ![](.guides/img/without-clear.png) | ![](.guides/img/actual-clear.png) |

The reason for this behaviour is simple: if containers would have to consider the floats they contain as part of the flow and thus taking space, we would have problems if we have a tall float inside an element containing text. At the end of it, their would be a big empty space (as you can see on the left picture above) with no possibility to fix it. You can see how it is displayed correctly on the right image, with the float continuing after the end of the first gray container and over the second one, and pushing the text of both.

So, by default, floats do not take any vertical or horizontal space in their containers (except for pushing text content on the sides) and we can fix it by using the CSS property `clear`.

An element that has the `clear` property set will not move up next to the float, like it would normally, but will instead stay under the float as if the float would be a normal block element. (That's why it's called "clear", because it clearing the floats before him.)

The values for `clear` are :

```css
clear : none | left | right | both;
```

 - `clear: none;` being the default value with no effect.
 - `clear: left;` will not move up on left floated elements.
 - `clear: right;` will not move up on right floated elements.
 - `clear: both;` will not move up on left or right floated elements.