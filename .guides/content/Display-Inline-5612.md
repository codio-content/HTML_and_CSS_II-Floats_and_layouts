## display : inline

Here are some examples of elements who have `display:inline;` by default. They are called inline elements: `<span>`, `<a>`, `<b>`, `<i>`, etc.

The properties of an inline element are:

- It will take the width of its content.
- It will NOT begin on a new line by default.
- It may only contain text or other inline elements.

## What about the box model ?

Inline elements do not respect the box model that we have seen in previous unit.

In the left hand pane, you can see different examples to demonstrate the behaviour of inline elements regarding the box model.

For all the examples, we have repeated the same structure, an orange `span` between other gray `span`s and blue `div`s. In each example, we try to set properties on the orange `span` to see how it reacts. You can scroll down to see the examples along while reading the text. Or you can click the underlined titles below and it will scroll to the correct position in the preview in the bottom left hand pane.

### 1. [Only a background color and a border](close_all panel=1; open_preview display-inline/inline1.html#example1 panel=1)

For this one we have only added a background color and border to the `span` so it stands out. Moreover it allows us to see that the inline elements can have a background color and a border and that they will be displayed as expected.

### 2. [Trying to add margins](close_all panel=1; open_preview display-inline/inline1.html#example2 panel=1)

What do we see from this example ?

![](.guides/img/inline-margin.png)

We see that inline elements only respect the left and right margins, they do not respect top and bottom margins. So we put a margin of 40px everywhere and we only got a margin of 40px on the right and left side, as shown by the arrows.

### 3. [Trying to add padding](close_all panel=1; open_preview display-inline/inline1.html#example3 panel=1)

What do we see from this example ?
(On the right picture we have added some transparency so we can see better.)

![](.guides/img/inline-padding.png)

We see that inline elements do respect padding "in a way", namely the box with the background color and the border is bigger but the padding is only pushing the elements on the left and right sides (as with the margin) while on the top and bottom the `div`s are not pushed but the box goes "over" them (This is more clear in the transparent example). 

An interesting thing to observe when the box is not transparent, is that the box is "above" the text content that was before it and "behind" the text content that was after it.

### 4. [Trying to add height and width](close_all panel=1; open_preview display-inline/inline1.html#example4 panel=1)

What do we see from this example?

![](.guides/img/inline-width-height.png)

We see from this example that adding a width and height on an inline element has absolutely no effect and thus the inline elements do not respect width and height properties at all.

### 5. [Trying to add font-size](close_all panel=1; open_preview display-inline/inline1.html#example5 panel=1)

What do we see from this example?

![](.guides/img/inline-font-size.png)

We can see that increasing the font-size on an inline element has the expected effect. The text becomes bigger and is pushing the lines above and under it so that it has the space to display correctly (You can see it with the red arrows).

### 6. [Trying to add line-height](close_all panel=1; open_preview display-inline/inline1.html#example3 panel=1)

What do we see from this example?

![](.guides/img/inline-line-height.png)

We can see that increasing the line-height on an inline element has the expected effect. The whole line, as you can see with the red arrows, become bigger and has a height of 4em. This is some kind of alternative solution to the top and bottom margins having no effect at all.

## Conclusion

All in all, this behaviour seems coherent. An inline element is supposed to be in the flow with the other elements around it.

To summarize in one table:

<table>
<thead>
<tr>
<th width="30%" style="text-align:center">Property applied</th>
<th width="70%" style="text-align:left">Result</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code>background-color</code></td>
<td style="text-align:left">Displays normally.</td>
</tr>
<tr>
<td style="text-align:center"><code>border</code></td>
<td style="text-align:left">Displays normally.</td>
</tr>
<tr>
<td style="text-align:center"><code>margin</code></td>
<td style="text-align:left">Only left and right margins are applied, the top and bottom are ignored.</td>
</tr>
<tr>
<td style="text-align:center"><code>padding</code></td>
<td style="text-align:left">Same behaviour as margins for the text around. Normal behaviour in regard to the background color and border.</td>
</tr>
<tr>
<td style="text-align:center"><code>height</code></td>
<td style="text-align:left">No effect.</td>
</tr>
<tr>
<td style="text-align:center"><code>width</code></td>
<td style="text-align:left">No effect.</td>
</tr>
<tr>
<td style="text-align:center"><code>font-size</code></td>
<td style="text-align:left">Displays normally.</td>
</tr>
<tr>
<td style="text-align:center"><code>line-height</code></td>
<td style="text-align:left">Displays normally. Possible alternative for top and bottom margins/paddings.</td>
</tr>
</tbody>
</table>


{Check It!|assessment}(test-2811472131)

|||guidance

Solution :

```css
 div {
  display:block;
  background-color:#c9650e;
  border:1px solid #633308;
  text-align:center;
}
```

|||
