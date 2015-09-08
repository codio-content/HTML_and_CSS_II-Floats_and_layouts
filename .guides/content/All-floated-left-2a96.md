In this case all the balloons form a line from left to right on the top of the page, they are "floating" from left to right in the order in which they appear in the document and because they are "floating" they don't take the whole width of the screen but only their own width, allowing the paragraphs of text underneath to go all they way up at the top of the page, on the right of the five balloons.

### This demonstrate the basic behaviour of left floating elements
 
- They "float" on the top left of their containers, except:
  - if there are other floating elements before them, then the go directly on the right of them (You can see this in action here, as the five balloons are in a line 1-2-3-4-5 at the top of their container).
  - if there are other block level elements before them, then they float "under" them (we will see an example of this in the next section).

- They "allow" other elements to overlap with them, but pushing the text content (and other inline elements) of those other elements to the right so they have enough "space".

### Another way to understand it 

A left-floated element is laid out according to the normal flow, then taken out of the flow and shifted to the left as far as possible (until the end of the container or until other left-floated elements). Content can flow on the right side of a left-floated box (like the text around the balloons in this example).


{Check It!|assessment}(test-3862507183)

