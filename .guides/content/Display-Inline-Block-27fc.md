## display : inline-block

Now that we have seen block-level elements and inline elements. We know that block elements stack up on each other and respect all the properties of the box model. Inline elements do not stack up and they respect only the properties of the box model that make sense in the context of text.

But sometimes we need elements that do not stack up on each other but still respect the box model fully.

Welcome `inline-block`.

In the file `inline-block.html` in the left hand panes, you can see a first example:

We have the same three blocks as before, we have given them a height of 80px and a width of 80px and a display mode of `inline-block`. You can see that they behave like blocks because they respect the height and width, but they behave like inline elements in the way that they don't stack up on each other but stay on the same line.

So `inline-block` is a display mode that can be very practical for certain types of layouts. But it has one major drawback ...