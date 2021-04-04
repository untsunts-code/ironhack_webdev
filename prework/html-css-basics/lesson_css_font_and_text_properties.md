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
>   font-size: 16px;  
> }  
  
*It is normal to express measurement units through **px (pixels)**, but that is just one way to do it.*  
There are three used ways to manipulate the font size through CSS:  
1. **px** - stands for *pixel* which is the standard and easiest measurement to use.  
2. **em** - is equal to the computed *font-sized* of that element's parent; for example, if there is a *div* element with font-size: 16px, then for that div and its children, 1em = 16px   
3. **rem** - relative to the root HTML element, not the parent element; that is, if font-size of the root element is 20px, then 1rem=20px for all elements  
  
*Keep in mind one thing - you shouldn't ever misuse the font-size property, you shouldn't make paragraphs look like headings or opposite.*  
There are default tags for each HTML element, and we can adjust its size if needed.  
  
### The *font-style* property  
*font-style* is used to turn text italic or oblique.  
  
### The *font-weight* property  
The [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) property is used to turn text *bold*, *bolder* or *lighter*. It can be expressed as a numeric value.   
  
---  
## CSS Text properties  
You have already seen basic font properties. Now, let's have a look at some of the properties you can use to change the text layout.  
  
### text-transform  
The [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform) is used to transform text into *lowercase*, *uppercase* or to *capitalize* letters.   
> Why?  
> These properties are particularly useful for branding and situations where you always need a particular word capitalized.  
  
### The *text-decoration* property  
The [text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) sets the appearance of decorative lines on text.  
The most used values for this property are:  
* *none*: unsets any text decorations already present, it is the default value for most of the HTML tags   
* *underline*: underlines the text  
* *overline*: gives the text an overline  
* *line-through*: puts a strikethrough over the text  
These can be combined with color properties.  
  
### The *text-align* property  
According to W3Schools, the [text-align property](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align) is used to set the horizontal alignment of a text.  
*text-align* is used to control text alignment within its containing content box.  
The different possible values are:  
* *left*: justifies the text to the left  
* *right*: justifies the text to the right  
* *center*: centers the text  
* *justify*: makes the text spread out, varying the gaps in between the words so that all lines of text are the same width  
  
### The *text-indent* property  
The [text-indent property](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent) is used to specify the indentaion of the first line of a text.  
  
### The *line-height* property  
The [line-height property](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) is used to set the height of each line of text, both above and below the line.  
If you don't specify any unit type to the *line-height* value, it will multiply by X the height of the font you would use.  
  
### The *letter-spacing* and *word-spacing* property  
The [letter-spacing property](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing) is used to specify the space between the characters in a text.  
The [word-spacing property](https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing) sets the length of space between words and between tags.  


