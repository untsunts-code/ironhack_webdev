# CSS | Font and Text Properties  
*Goals*  
* How to set CSS **font properties**  
  * *font family, boldness, size, font style*  
* How to **style text** via CSS  
  * to set its *alignment*, set it to *uppercase/lowercase*, *indent* it on a certain way, set its *color*  
  
---  
## Introduction  
By default, the text in your HTML is ugly and plain. There are some *default properties* - text size, color, etc., which are interpreted by browsers but, if you want, you can change them.  
*Default properties will depend on browser settings.*  
  
---  
## Font and its properties  
Overall, it is essential to know that there are **three groups of fonts**:  
* *serif*  
* *sans-serif*  
* *monospace*  
  
Each of these groups has multiple **font families** in it, ex:  
* *serif group*: Times New Roman, Georgia  
* *sans-serif group*: Arial, Verdana  
* *monospace group*: Courier, Lucida  
  
*Sans-serif fonts are considered easier to read than serif fonts.*  
  
### The *font-family* property  
The default font will depend on the user's browser and operating system. You can find a list of the default fonts [here](https://www.granneman.com/webdev/coding/css/fonts-and-formatting/web-browser-font-defaults/).  
We can change the default values with the *font-family* property.  
If we would like to change the font on the whole page, we could target it through the *body* tag and do something like this:  
> body {  
>   font-family: Arial;  
> }  
  
*The availability of the fonts you want to use on your web pages can't be guaranteed.*  
Different combinations of browsers and operating systems have different fonts installed. You never know who your user is!  
*This is why we should aleways set more than one font family, so our browser has available **font stack** and multiple choices to pick from.*  
*If one font is missing, the browser will choose the next one.*  
> body {  
>   font-family: Arial, Verdana, sans-serif;  
> }  
  
If an error occurs, i.e., Arial not being found, the browser will try to use Verdana. If Verdana is not found, sans-serif will be the font used by the browser. 
Finally, if none of the fonts are found in the **font stack**, the browser will use the default font.  
  
### The *font-size* property  
The *font-size* is a way to set the sie of the font in a HTML document. The font-size is inherited from the element's (node) parent.  
*The standard **font-size** for the < body > tag is 16px in all browsers.*  
In plain English, all children of the *body* tag will have set the default font size to 16px, however, some elements have different sizes by default. 
This is why < h1 > appears bigger (it's standard sie is 32px).  
You can set *font-size* property to all text related HTML elements:  
> body {  
>   font-size: 14px;  
> }  
  
> h1 {  
>   font-size: 20px;  
> }  
  
> h2 {  
>   font-size: px;  
> }  
  
*It is normal to express measurement units through **px (pixels)**, but that is just one way to do it.*  
There are three used ways to manipulate the font size through CSS:  
1. **px** - stands for *pixel* which is the standard and easiest measurement to use.  
2. **em** - is equal to the computed *font-sized* of that element's parent; for example, if there is a *div* element with font-size: 16px, then for that div and its children, 1em = 16px   
3. **rem** - relative to the root HTML element, not the parent element; that is, if font-size of the root element is 20px, then 1rem=20px for all elements  
  
*Keep in mind one thing - you shouldn't ever misuse the font-size property, you shouldn't make paragraphs look like headings or opposite.*  
There are default tags for each HTML element, and we can adjust its size if needed.  
  
### The *font-style* property  


