As stated earlier, when there is a "meaningful" HTML element that can be used, use it. Don't use `div` and `span` everywhere. We will follow with two concrete examples:

### 1) List example
Here is an example of a "wrong" list.

```html
<div class="list">
  <span class="element"> Item 1 </span>
  <span class="element"> Item 2 </span>
  <span class="element"> Item 3 </span>
</div>
```

Don't use `div` and `span` if you want to make a list, then use a real list instead:

```html
<ul>
  <li> Item 1 </li>
  <li> Item 2 </li>
  <li> Item 3 </li>
</ul>
```

Try to use HTML elements which have meaning whenever possible.