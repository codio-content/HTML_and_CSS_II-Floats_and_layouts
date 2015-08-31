In the previous section we have said that the divs are *block* elements and that spans are *inline* elements.
These notions are the "display modes" of html elements. To be entirely true, we have to say that, by default, divs are block elements and spans are inline elements.

## What does it mean ?

In a very simplified way, block elements behave like blocks, they pile up on each other. While inline elements are "in line" they stay on the same line and are "in" the content.

You can see an example on the left. In the preview, The left column display 3 divs with different colors. They stack up like blocks. The right column shows 3 spans with different colors, first inside a text and secondly all at once. You see that the spans are "inline" with their content, they stay where they are, they dont stack up. 

[Click Here](close_all; open_file display-modes/example2.html panel=0; open_preview display-modes/example2.html panel=1) to see how the same text would look like if we would put divs inside the text inside of spans.

## Display modes

As we have just seen, divs have a display mode called "block" and spans have a display mode called "inline", in CSS you define a display mode by using the "display" property, like this :

```css
display : block; /* This will be a block-level element */
display : inline; /* This will be an inline element */
```

Let's see some more details about the different display modes in the next sections