Because an element that has a display mode of `inline-block` behaves like a block it will not ignore the whitespaces around itself. So if you put whitespaces between the elements, as we did here, it will leave a little space between them.

Have a look at the file `inline-block-space.html` in the top left hand pane along with its preview, to see an example of this.

In it, we have given the elements a width of 33%, so normally we would like all three elements to be on the same line and occupy 1/3 of the available space...

So why doesn't it work ?

![](.guides/img/whitespaces.png)

Because there are white spaces between the tags (you can see it here with the red arrows or this line is highlighted in the top left hand pane.) the browser will put a little space between the elements and thus breaking our layout because the total of (33% * 3) + 2 whitespaces is bigger than the available width and is thus pushing our last element to the next line.