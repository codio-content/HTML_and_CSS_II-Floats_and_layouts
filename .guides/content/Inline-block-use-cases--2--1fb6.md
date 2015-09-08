### 2. A block inside a text.

Have a look at the left panes, we would like to have a picture on the left, with the text going on the right of it and then under it. This doesn't work quite well in this case ... There is a big space after the first line of text until the end of the "Photo", then the text continues underneath.

### Why ? 

This behaviour is quite coherent, as the inline-block element behaves like a block with its width and height, but still is "in a line" so he is pushing the next line of text underneath it .. Let's go the next section to see how to have the text flow around our "photo" nicely.