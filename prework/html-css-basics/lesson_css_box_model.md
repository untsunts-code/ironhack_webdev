# CSS | Box Model  
*Goals*  
* What margin, padding and border properties are and how to apply them  
* What are the differences between them  
* How these prioerties affect other elements' properties  
  
---  
## Introduction  
To master CSS and web design there is a basic premise you need to know:  
> **Every HTML element is a rectangular box.**  
> The **CSS Box Model** describes the space taken by an element. Each box has four different areas: **content**, **border**, **padding**, and **margin**.  
  
---  
## The box model  
We will discuss the following aspects throughout the lesson: (margin, border, padding, height, width)  
  
> **Spacing behaviour**  
> The spacing behavior is referred to as the real space taken by a box. The spacing behavior formula equals to:  
> **ContentSpace + PaddingSpace + BorderSpace + MarginSpace**  
  
---  
## Border Property  
> The border property allows you to set the border of an element.  
> You can specify three values for border:  
> * width  
> * style  
> * color  
  
Every property has a default value, so if you don't specify one of them, it will still have value.  
If borders are undeclared, they are either zero or the browser default value.  
Let's add a border to your < div >:  
> border: 1px solid #17212e;  
  
### Border properties  
In the previous example, the border is defined with three values:  
* **width [1px]**: you can specify any [unit size](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units) to set the border width. You can also use the *border-width* property to do that.   
  * >  border-width: 1px;  
* **style [solid]**: you can specify any [border style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style) value, depending on the design you want to have. You can also use the *border-style* property to do that.   
  * > border-style: solid;   
* **color [#17212e]**: finally, you can specify a color, in any of the formats you have already seen. Again, you can also use the property *border-color* to do that.   
  * > border-color: #17212e;  
    
> **Shorthand**  
> > border: 1px solid #17212e;   
  
> **Full Version**  
> > border-width: 1px;  
> > border-style: solid;  
> > border-color: #17212e;  
  
### Spacing Behavior with border  
If you take a look at our CSS, the < div > element should have a width of 170px. After applying the border, the width is not 170px anymore, it is 172px...  
**When you apply a border to an element, it increases its width**, even if you have specified a fixed width. Our element's border is 1px width. The total width of the < div > will be 172px:  
* 170 px < div > width  
* + 1px border-left  
* + 1px border-right  
* = 172px  
  
When you apply a border to an element, it modifies the toal width of that element.  
  
#### Single borders  
There are two ways to have a border on just one side of an element:  
* Simple  
  * > border-bottom: 1px solid #17212e;  
* Complex, but customizable  
  * > border: solid #17212e;  
  * > border-width: 0 0 1px 0;  
    * As you can see, the border-width receives *4 different values*. These values correspond to:  
    * > border-width: [border-top] [border-right] [border-bottom] [border-left]   
    * You can use this technique with all pieces of the *border* property  
  
### Border-radius Property  
Related to the *border* property, we have the *border-radius*. The border-radius property allows you to define how rounded border corners are. 
**We can even create a circular < div >!**  
To set a rounded border in our element, we can do this:  
> border-radius: 12px;  
  
This will create a 12px border radius. As we did before with the border property, you can set the border radius values individually. The syntax is:  
> border-< top | bottom >-< left | right >-radius  
  
So, if you want to have a 12px border radius just at the tope left border, you have to set the property as follows:  
> border-top-left-radius: 12px;  
  
One cool trick you can do with *border-radius* is using it to make circular elements.  
To do this, you have to set the properties *width* and *height* with the same value and the *border-radius* property to 50%.  
> .circular-div {  
>   background-color: #ccc;  
>   border-radius: 50%;  
>   height: 100px;  
>   width: 100px;  
> }  
  
---  
## Padding property  
### What is padding?  
> **The padding property sets the space between the content and the border of an element.**  
  
To add some padding to your code:  
> padding: 10px 10px 10px 10px;  
  
### Spacing behavior   
Just like the border property, **the padding property increases the < div >'s size**. 
The total width won't be the specified in the CSS, it will be the sum of all the modifiers. 
In this case, it will be 192px:  
* 170px < div > width  
* + 10px padding-left  
* + 10px padding-right  
* + 1px border-left  
* + 1px border-right  
  
### Padding values  
You can specify different values on the padding. Its behaviour is the same as you saw with the *border-width* property:  
> padding: [ padding-top ] [padding-right] [padding-bottom] [padding-left];  
  
You don't have to set all four values every time, as with the border property, you can specify one, two, three, or gour values:  
> padding: 10px 20px 15px;  // padding-top 10px, padding-right and padding-left 20px, padding-bottom 15px  
> padding: 10px 20px;       // padding-top and padding-bottom 10px, padding-left and padding-right 20px  
> padding: 10px;            // all the sides are set to 10px of padding  
  
  
---  
## Margin Property  
### What is margin?  
> **The margin property sets the space between the border of an element and other elements around it.**  
> If no elements are around, it will set the space between the element and the < body > tag.  
  
### Spacing behavior  
**When you apply margin, the < div > size remains the same:** 192px. But the space used in the HTML is bigger, now it is 212px.  
* 170px < div > width  
* + 10px padding-left
* + 10px padding-right  
* + 1px border-left  
* + 1px border-right  
* + 10px margin.right  
* + 10px margin-left  
* 202 pixels   
  
### Margin values  
The *margin* property also works like the *padding* property. You can specify the margin values by declaring them as follow:  
> margin: [margin-top] [margin-right] [margin-bottom] [margin-left];  
  
Again, you don't have to specify each value.  
> margin: 10px 20px 15px;   // margin-top 10px, margin-right and margin-left 20px, margin-bottom 15px  
> margin: 10px 20px;        // margin-top and margin-bottom 10px, margin-right and margin-left 20px  
> margin: 10px;             // All margins are set to 10px  
  

