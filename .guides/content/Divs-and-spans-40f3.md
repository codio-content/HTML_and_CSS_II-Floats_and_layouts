In modern HTML, all elements are supposed to have a meaning, a `<p>` is a paragraph, a `<li>` is a list item, a `<a>` is a link, and we should use the right tag for the right purpose. 
Nevertheless sometimes we need to group things together or to target subparts of elements to alter their style or behaviour. For this purpose two tags exists that have no "meaning", these two tags are `<div>` and `<span>`. 
Where no existing element is applicable, div and span can represent parts of documents so that HTML attributes such as `class` or `id` can be applied.

`<span>` and `<div>` are used to imply a logical grouping of enclosed elements.
There are 3 main use cases for using this tags :
1. Apply some CSS styling
1. Applying semantic sense
1. Accessing from code

The difference between `<span>` and `<div>` is that a `span` is an inline element, usually used to wrap a small portion of text inside a line, for example inside a paragraph. On the other end a `div` (division) element is a block level element and is generally used to group together large blocks of html.
