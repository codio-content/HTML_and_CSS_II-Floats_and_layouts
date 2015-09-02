This is a more classing layout for a blog for example, it has a header at the top with full width, a sidebar on the left with some links, a main content part with some text, and finally a footer.

You can have a look at it on the left. As you can see, the sidebar has float:left and the main content has float right. We have put the sidebar with a width of 24% and the main content with a width of 74%, leaving 2% of space between them, which is also the padding and margin we have put everywhere so things are spaced evenly.

Well there is a problem with our layout, it doesn't look quite good ... It should look like this:

![](.guides/img/good-layout.png)

{Check It!|assessment}(test-2507104303)

|||guidance

Solution :

```css
    #footer {
      background-color:#ccc;
      text-align:center;
      clear:both;
    }
```

|||