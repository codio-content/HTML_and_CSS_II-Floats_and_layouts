Now let's see a three columns layout, we have three divs and all of them have `float:left;` and a width of 32%, because we wants spaces of 2% between elements.

As you see the layout, at the moment, isn't quite right: all the columns are stuck together on the left, without any space between them and there is a big space on the right.

{Check It!|assessment}(test-1974047303)

|||guidance

Solution:

```css
#center {
  margin-left:2%;
  float:left;
  background-color:#4ca7e8;
  width:32%;
}

#right {
  margin-left:2%;
  float:left;
  background-color:#e2781b;
  width:32%;
}
```

|||
