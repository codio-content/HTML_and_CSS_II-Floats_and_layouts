As stated earlier, when there is a "meaningfull" HTML element that can be used, use it. Don't use divs and spans everywhere. We will follow with 2 concrete examples.

### 1) List example

```html
<div class="list">
  <span class="element"> Item 1 </span>
  <span class="element"> Item 2 </span>
  <span class="element"> Item 3 </span>
</div>
```

Don't use divs and spans if you want to make a list, then use a real list :

```html
<ul>
  <li> Item 1 </li>
  <li> Item 2 </li>
  <li> Item 3 </li>
</ul>
```

( H )

Try to use an HTML which has meaning whenever possible.


### 2) Paragraph and emphasize example

```html
<div id="paragraph">
    This is <span class="emphasize">nice</span>
</div>
```

If you want a paragraph, use a `p` and if you want to emphasize something, use `em` or `b`, like this :

```html
<p>
    This is <b>nice</b>
</p>
```

([Click here](close_all; open_file divsandspans/dont-abuse-p.html panel=0; open_preview divsandspans/dont-abuse-p.html panel=1) to see this example on the left)


Earlier we have said that `<div>` is a block level element and that `<span>` is an inline element, let's head to the next section to see more about that.