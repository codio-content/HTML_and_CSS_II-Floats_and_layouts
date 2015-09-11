In the previous section we have said that a `div` is a *block* element and that a `span` is an *inline* element.
These notions are called the "display modes" of HTML elements. To be entirely true, we have to say that, by default, `div` is a block element and `span` is an inline element, but that can be overridden.

## What does it mean ?

In a very simplified way, block elements behave like blocks, they pile up on each other. While inline elements are "in line" they stay on the same line and are "in" the content.

You can see an example in the left hand panes. In the preview at the bottom, the left column displays 3 `div`s with different colors. They stack up like blocks. The right column shows 3 spans with different colors, first inside a text and secondly all at once. You see that the spans are "inline" with their content, they stay where they are, they dont stack up. 

[Click here](close_all; open_file display-modes/example2.html panel=0; open_preview display-modes/example2.html panel=1) to see how the same text would look like if we would put `div`s instead of spans inside the text.

You can also [Click here](close_all; open_file display-modes/example1.html panel=0; open_preview display-modes/example1.html panel=1) if you would like to see the previous example again in order to compare.

## Display modes

As we have just seen, `div`s have a display mode called `block` and spans have a display mode called `inline`, in CSS you define a display mode by using the `display` property, like this:

```css
display : block; /* This will be a block-level element */
display : inline; /* This will be an inline element */
```

Let's see some more details about the different display modes in the next sections.