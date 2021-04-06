# CSS | Positioning and Flexbox  
*Goals*  
* How to position elements on your page using *CSS position* property  
* What *flexbox* is and what it does  
* How to structure HTML page using *flexbox*  
  
---  
## Positioning  
The CSS *position* property allows you to organize elements on the screen. Position can be:  
* **static**  
* **relative**  
* **fixed**  
* **absolute**  
  
When setting the position, you can use the following properties:  
* **top**  
* **right**   
* **bottom**  
* **left**  
  
### position: static  
The initial or default value of an element is *static*. It means that the element is **not positioned** in any particular way - it just follows the normal flow of the webpage. 
If they are block level elements, they will each take a full available width; if they are inline level elements, they will flow like a text.  
* Elements with *position*: *static*, are described as **not positioned**  
* Elements with any other form of the *position* property are described as **position**  
  
### position: relative  
A *relative* positioned element behaves the same as *static* unless you add some extra properties. You can adjust the position by settin the *top*, 
*left*, *right*, and *bottom* properties.  
> It will move the element relative to where it would normally occur in the document. 
Other content *will not* be adjusted to fit into any gap left by the element.  
  
### position: fixed  
A fixed element is *positioned relatively to the screen of your device -aka viewport* (computer, mobile, etc.).  
> * The element will always be in the same place, even when you scroll.  
> * As with *relative*, the *top*, *left*, *right*, and *bottom* properties are used.  
  
### position: absolute  
The absolute position works similarly to a *fixed position*. However, instead of being positioned relative to the viewport, **it is positioned to the nearest positioned element in the DOM.** 
That is - to the nearest element with a *position* other than *static*.  
If there is no ancestor positioned element in the document, it will use the *body*.  
Absolutely positioned page elements are removed from the flow of the page. This means that they don't affect the position of other elements, and the other elements will not affect them.  
  
---  
## The basics of Flexbox  
### What is flexbox and why should you use it?  
As you probably have noticed, some times it is really hard to position the elements of a web page where you want them to be. Instead of giving margins and paddings and having to rewrite whenever changes are made, 
wouldn't it be great to have a way to organize HTML elements in a more adaptive and *flexible* way?   
That's why [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) was created.  
> By following some rules (impmlemented by you), it automatically organizes, aligns, and rearranges the content according to the changes on width and height of the device 
while it still preserves the proportions you have written on your code.  
  
To start using Flexbox you need to write only one line of code inside of your CSS rule:  
> display: flex  
  
By using the rule on the parent element, it will **convert it into a flex container and every direct child of the element will be transformed into its flex children 
(elements that will be changed to fit inside the box).**  
After that, you will want to five your flex container a few directives. For example, how will the elements be organized? 
How will we position horizontally and/or vertically? If you don't decide this by yourself, some of these decisions will be made for you by the default values.  
  
### The *flex-directory* property  
> The *flex-directory* shows the direction on which the contents will be aligned.  
  
There are two main elements: **The Main Axis** and **the Cross Axis**.  
By **default** it is **_row_ which is from left to right**.  
Some other options are:  
* row : left to right  
* row-reverse : right to left  
* column : top to bottom  
* column-reverse : bottom to top  
  
### The *justify-content* property  
> With *justify-content* we can **horizontally** arrange the items inside the flex container.  
  
By **default**, it will be **flex-start, which will position everything at the beginning of the flex container (according to its direction).**  
Here are some options you have:  
* **flex-end:** items are positioned on the end of the flex-direction line  
* **center:** items are centered along the line  
* **space-between:** items are evenly distributed in the line; the first item is on the start line, last item on the end line  
* **space-around:** items are evenly distributed in line with equal space around them. Note that visually the spaces aren't equal since all the items have equal space on both sides. 
The first item will have one unit of space against the container edge, but two units of space between the next item because the next item has its own spacing that applies.  
* **space-evenly:** items are distributed so that the spacing between any two items (and the space to the edges) is equal  
  
### The *align-items* property  
This one is a lifesaver. Remember how hard it was to align the elements **vertically**? With *align-items* you can easily do this. 
Be careful with this one. If you don't assign any value to this property, its **default value will be *stretch* which stretches the children to fill the whole container**.  
You have these options to vertically align your flex items:  
* **flex-start:** cross-start margin edge of the items is placed on the cross-start line  
* **flex-end:** cross-end margin edge of the items is placed on the cross-end line  
* **center:** items are centered in the cross-axis  
* **baseline:** items are aligned such as their baselines align  
  
> If you have an image as a flex item (a direct child of the flex container), it will be distorted by the automatic sizing and alignig. To "protect" the dimensions of an image, we need to put it inside a div.  
  
There are *many* more things you can do with Flexbox. Check out [CSS Trick's Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and take a look at all the possibilities you have.  
Another cool link to learn about flexbox is [Flexbox Froggy](https://flexboxfroggy.com/)  

