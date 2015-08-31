## Two more use cases for inline-block

### 1. A gallery.

Have a look at [this example](close_all;open_file display-modes/gallery.html panel=0;open_preview display-modes/gallery.html panel=1)

We use a serie of spans with display inline-block. The cool thing is that they fill the screen until the end of the line and then go onto the next line. If you resize the preview window, you will see that more boxes will fill each line in order to take all the horizontal space.

### 2. A block inside a text.

Have a look at [this example](close_all;open_file display-modes/block-in-text.html panel=0;open_preview display-modes/block-in-text.html panel=1)

Well we would like to have a picture on the left, with the text going on the right of it and then under it. This doesn't work quite well in this case ... Why ? The behaviours is quite coherent as the inline-block element behaves like a block with its width and height, but still is "in a line" so he is pushing the next line of text underneath it .. Let's go the next section to see how to do that !
