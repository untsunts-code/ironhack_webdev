# HTML | Inline level elements  
*Goals*  
* know which ones are inline level elements (< img >, < a >, < br >, < input >, < i >, < strong >)  
* how to use them   
* how to inspect the content of other websites directly in your browsers   

---  
## Introduction  
HTML elements are the building blocks of your webpage. You'll have hundreds of them on a single page in most cases.  
These pages are composed of both *inline* and *block* elements.  
  
---  
## Inline Elements  
> **Inline elements** flow like text. They don't start a new line and they are shown right next to the previous element.  
> Also, an **inline element will occupy only the size of its content**.  
> The most used inline level elements are:  
> * image tag: < img >  
> * anchor tag to display links: < a >  
> * inline text wrapper: < span >  
> * input tag: < input >  
> * textarea tag: < textarea >  
> * button tag: < button >  
> * line break tag < br >  
> * italic text: < i >  
> * italic text with emphasis: < em >  
> * bold text: < b >  
> * bold text with emphasis: < strong >  
> * small text: < small >  
>  
> These are **inline text semantics** used to define the meaning or style of a specific word or line or some part of the text.   
  
### The < image > tag  
> The image tag (< img src="some_img.png" alt="text to be displayed in case image lode fails" >) is an element that represents an image in the HTML.  
> < img > is a *self-closing* tag.  
  
#### Attributes:  
* *src*: The path/URL to the image you want to show. This URL can be a link to an external (from the Internet) or a local image.  
* *alt*: *Alternative* text to be displayed in case the image will not appear.  
  
*Even though the alt attribute is optional, you should ALWAYS include it since it assists [screen readers](https://en.wikipedia.org/wiki/Screen_reader) in understanding what the content is.*  
  
> Certain attributes only work with certain tags. For instance, if you try to use the *src* attribute on a < p > tag, it will not work.  
  
  
### The < anchor > tag   
The anchor tag is the bread and butter of the internet. This was one of the first tags in the original HTML specification.  
> The **< anchor >** tag links the user from one document or URL to another, so it is of vital importance for developing a quality web app.  
  
The most important attribute of the < a > element is the **href attribute**, which indicates the link's destination.  
> This is how the page knows where to take you when you click on a button or one of the *titles/links* in the navbar like "shop" or "about".  
  
Another example could be if we would like to direct a user to the CNN oficial website, we would do the following:  
> < a href="https://www.cnn.com" > Go to CNN < / a >  
  
Let's analyze it a bit:  
* < a > < / a > - is the anchor tag itself, the tag doesn't do much on its own  
* href - stands for *hypertext reference*, in human, this means the location (file, URL, etc.) the user will be directed to  
* "Go to CNN" - the text between the < a > tags is what will be displayed to the user, and by default, links are displayed in blue color  
  
**Links can:**  
* Direct to local files on your computer (index.html)  
* Direct to internal or external URLs on a server (https://www.ironhack.com/en/contact)   
* Referencing elements on the same page using the *id* attribute  
  

### The < span > attribute  
*A span tag is an inline, generic wrapper for text.*  
< span > is useful for applying styles to specific parts of the text (something that is used in many CSS files).  
The span has no [semantic](http://html5doctor.com/lets-talk-about-semantics/) other than "Hey, this text is special and I am going to change it somehow".   
*The inline styling (having to apply styles insides th HTML document) is just for quick demonstration, avoid using it since it is not the best practice.*  
  
### Semantic inline elements : < br >, < em >, < small >, < i >, < b >, < strong >, ...  
Different inline HTML tags such as < strong >, < i > and < button > have some *semantic* meaning, they denote that the element is special in how it functions and how it contributes to the web page.  
For instance, < strong > is a span that semantically denotes: "This content is < strong > REALLY important to read < / strong >".  
< em >, or emphasis, is a fancy span that denotes "The content inside should be emphasized differently than the surrounding text".  
< span > on its own has none of this context, it just denotes "This content is going to be styled or used differently than the plain old text around it".  
  
---  
## Open a HTML document on the browser... and inspect it!  
Browsers can read and interpret HTML files. This means that, in some form, each page we open in our browser is an HTML page.   
  
### Inspect HTML  
There is one neat trick we want to show you. You can pick any page, but for demo purposes, we will take you to [www.instagram.com]([www.instagram.com]).  
In your browser **right-click on any part of the website**, and click on **Inspect**.  
A new sub-window should appear on the bottom of the browser. In the **Elements** tab, you will be able to see the page layout and all HTML elements that are used, in and out of the < body > tag.  
> You can do this with any website on the Internet. It is widespread to inspect another website to learn how they do specific things.  

