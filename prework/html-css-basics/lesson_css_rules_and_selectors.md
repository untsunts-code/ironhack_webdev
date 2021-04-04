# CSS | Rules and Selectors  
*Goals*  
* What is a *CSS rule* and its parts  
  * selector  
  * declaration block  
* How to apply styles using different selectors: **elements/tags**, **class** and **id**  
  
---  
## CSS rules  
A CSS rule-set is composed of a selector and a declaration block:  
> selector(s) {  
>   property1: value1;  
>   property2: value2;  
> }  
  
*It is like a dictionary with key value pairing or the JSON structure.*   
> * **selector**: points to the element(s) that you will apply the style rule to.  
> * **declaration block**: contains **one or more declarations separated by semicolons**. These declarations specify the element's properties and the values you want to set.  
  
*One important thing to think about is that if we have a selector for any given tag (for example, h1), all the tags in our page would get the same style... which is something kind of annoying. To avoid this, we need to learn how to manipulate WHICH elements should get styles and which ones shouldn't.*  
  
---  
## CSS selectors  
### Type selectors  
[Type selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors) match elements by their (node) name. In HTML, elements are tags we add, 
for example < p >, < header > or < div >. The structure for type selectors is:  
> tag-name {  
>   rule: value;  
> }  
  
The element selector **will affect every element of its kind, no matter how many of them there are**.  
  
### Class selectors  
In HTML and CSS, you can identify a group of HTML elements with the same characteristics or styles using a [class attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-class).  
*The class is an attribute of the element(s) that you're trying to change, and **requires a name**. The structure is the following:*  
> / \* in the CSS file \* /  
>  
> .class-name {  
>   rule: value;  
> }  
  
Example  
> /\* notice the . (dot) in front of red \* /  
> .red {  
>   background-color: red;  
> }  
  
Class naming conventions:  
* You should name classes using **only lower case letters**.  
* If you want to have a class name composed of *several words*, please **separate them using dashes -**, e.g. multi-name-class .  
* **You can not use spaces for a class name**.  
  
[Class selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) match all the elements based on an element's *class* attribute value.  
  
#### Analogy  
Imagine you are in a summer camp, and suddenly the monitors split the campers into two teams, red and blue. Splitting the campers into two groups does not necessarily change how they look, but then let's pretend the monitor says:  
*"Everybody in the red group - paint your faces red!"*  
*"Everybody in the blue group - paint your faces blue!"*  
That is a different behaviour! The instructions from the monitors changed how you looked and only applied to your group.  
  
#### Multiple classes  
> One HTML can have **multiple** classes attached to it.  
> When you want to add several classes to an element, you include each class separated by a single space.  
  
### ID selectors  
> An [ID selector](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors) identifies a **unique**, **unrepeatble element** in the HTML.  
  
ID selectors are identified by the **hash (#)** symbol. The naming convention is the same as classes, if you have multiple words, combine them with a dash (-). **Elements can and only should have ONE ID**.  
  
### Universal selectors  
The [Universal selector](https://developer.mozilla.org/en/docs/Web/CSS/Universal_selectors) matches a single element of any type. It is identified by an asterisk (\*).  
Omitting the asterisk with simple selectors has the same effect, for instance:  
* \* .warning  
* .warning  
These two selectors are considered equal, since both will target all the elements that have the class *warning*, regardless of the element type (*div* or *p* or *whatever*).  
> Be very careful when using the universal selector, as it will slow down your page considerably. After all, it will apply that style to ALL elements in your page!  
> Typically, this is the *first* rule in your CSS document to apply global styles such as font-face.   
  
---  
## One Rule of Thumb:  
> **Each document (html, css, js, etc.) is ready from top to bottom** (line 1, line 2, line 3, etc.), 
which means that the last rule you apply will be the one that you'll see on your page.  
> *(There might also be a rule that gives preference to specific over general rules... will have to check).*  

