# CSS | Color Properties  
*Goals*  
* How to use colors in CSS in more than one way  
* Get familiar with *hex* and *rgb* color representation  
  
---  
## Colors & HTML  
HTML has three ways to create colors:  
* by *name* (white, red, ...)  
* using hexadecimal code (#f2f2f2)  
* using the *rgb()* method  
*There is also RGBA, but this alternative is less commonly used.*  
  
### Color by name  
The first and easiest way to represent color is by specifying its name. For example, if you want to use the color red, you can write:   
> p {  
>   color: red;  
> }  
  
This will set the **font** color of the < p > tag to *red*. You can find a full list of all the available pre-set colors [here](http://htmlcolorcodes.com/color-names/).  
  
### Hexadecimal  
You can also set a [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) value to specify the color you want to see.  
> Each hexadecimal value consists of a **hash (#)** followed by **six numbers between 0 and 9** or **letters between A and F**.  
> Each **pair of values represents one of the components (red, green, blue)** of the color. This allows you to specify any color.  
  
In this case, to represent the color red, you should do the following:  
> p {  
>   color: #ff0000;  
> }  
  
*Each pair of values has the same value, as in the example, you can simplify it by using just one digit.*  
In your example, you can get the red color as follows:  
> p {  
>   color: #ff00;  
> }  
  
*If you use another color (for example #123456), you can't reduce it by using this technique.*    
  
### The RGB (rgb()) method  
An RGB value is a method *rgb()* which receives three parameters: **red**, **green**, and **blue**. 
They represent the channel values of the colors, *just as hexadecimal values do*.  
The difference between RGB notation is that each component is represented by a **decimal number between 0 and 255**.  
  
Let's create the color red with the rgb method:  
> p {  
>   color: rgb(255,0,0);  
> }  
  
[Here](http://htmlcolorcodes.com/color-picker/) is a little helper you can use when you want to represent colors in the *rgb()* format.  
  
#### Playing with transparency: RGBA  
Last, but not least, the *rgba()* method allows you to use *rgb()* with another component value as the fourth paramether: the **alpha** channel. 
This allows you to set the transparency of the color, with a number between 0 and 1. **0** indicates that the color will be 0% solid (so... transparent), 
while **1** will be 100% solid.  
  
Let's try to add a 50% transparency to our red color in the past example:  
> p {  
>   color: rgba(255,0,0,0.5);  
> }  
  
##### Change the background color  
Let's now see how you can change the background color of your website. You can change the *background-color* property in your CSS file to do this. 
[Here](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Backgrounds) you can read more about background and similar properties.  
  
