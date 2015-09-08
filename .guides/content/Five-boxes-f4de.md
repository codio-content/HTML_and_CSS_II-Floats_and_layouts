This is also a quite common layout.

You have a big section (blue) on the top that takes most of the space. It holds the main content. Then we have four little (green) boxes underneath it.

These green boxes are all floating left, with a width of 22.5% (We take the full width of 100%, we substract 5 times the margin of 2%, which gives us 90% then we divide by 4).

You can also notice that we used `box-sizing:border-box;` so we don't have to do more calculations about the paddings and borders sizes.

This layout could be used ,for example if you have an e-shop. The featured product in the blue zone and 4 more related products at the bottom in the green boxes.
