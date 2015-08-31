### A drawback

Because an element that has a display mode of "inline-block" behaves like a block it will not ignore the whitespaces around himself. So if you put whitespaces between the elements, as we did here, it will leave a little space between them.

[Click here](close_all; open_file display-modes/inline-block-space.html panel=0; open_preview display-modes/inline-block-space.html panel=1 ) to see an example of this.

In this example we have given the elements a width of 33%, so normally we would like all three elements to be on the same line and occupy 1/3 of the available space...

So why doesn't it work ?

![](.guides/img/whitespaces.png)

Because there are white spaces in between the tags (you can see it here with the red arrows) the browser will put a little space between the elements and thus breaking our layout because the total of 33% * 3 + 2 whitespaces is bigger than the available widht and is thus pushing our element on the next line.

{Check It!|assessment}(test-1827571993)