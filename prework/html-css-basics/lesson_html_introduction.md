# HTML | Introduction  
*Goals*  
* what a *Markup language* is  
* what *HTML* is  
* how to use *HTML tags* and *tag attributes*  
* what is the structure of an HTML document based on *DOM [Document Object Model]*  
  
---  
    
## What is a Markup Language  
[Markup languages](https://en.wikipedia.org/wiki/Markup_language) are languages designed for the processsing, definition, and presentation of text.
In simple English, we could say, **markup languages are used to present somee information to the users in a specific format -
 using different layouts and styles**. The elements used to specify the format are called *tags*.  
 In short,  you define elements as tags, and those tags are formatted into a fancy new document.  
  
---  
  

## What is HTML?  
> According to the *MDN - Mozilla Developer Network* (you will know much more about MDN as you progress through the course since it contains all the official docs we will be refering to),
[HTML - HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML) is the most fundamental building block of the Web. 
It defines the meaning and structure of web content. 
It uses *tags* as its main building blocks to create web pages.  
  
  
We mentioned tags several times up to this point, so let's cover this concept next.  
  
### Tags and Attributes  
#### Tags  
A **web page** is a collection of different *types* of content. Some of the basic **types of content** that almost any webpage has are:
**text, images, video** and **audio**. All different types of content are **represented by corresponding HTML tags and rendered in browsers**.  
> We can make the following conclusion: **an HTML document is a collection of tags.**
Tags are used to describe specific types of content such as images, paragraphs, headings, footers and many more.  
> **Tags usually come in pairs: an opening tag defines the start of a block of content, and an ending tag defines the end of that block of content.**  
  
* Writting comments in HTML are placed between < ! --  Comments go here -- >  
* All the tags are placed **between < and /> and the closing tag has the backslash in it as well**  
* Every rule has an exception - **not all the tags have closing part since some of them are self-closing tags**
  
#### Attributes  
> According to the resources on Wikipedia, HTML attributes are **special words used inside the opening tag to control the element's behavior**. 
An attribute either **modifies the default functionality** of an element type **or provides functionality** to certain element types which are unable to function correctly without them.  
  
  
This being said, our *img* tag is missing the *src* (source) attributee to be able to function properly.
The *src* part has to be alongside the *img* placed inside < and > and will point to the specific source where an image is saved.  
Tags can have **multiple attributes**. Images also have an *alt* attribute in case the image can't be displayed. 
Attributes are also used for [screen readers](https://en.wikipedia.org/wiki/Screen_reader) in understanding what content is.  
  
> Certain attributes only work with matching tags. For instance, if you try to use a *src* attribute on an *anchor tag* (which we use to display links) or *p tag* (for displaying paragraphs), it will not work.  
  
### The basic structure of HTML document  
A HTML document always has the same structure, which includes:  
* **<! DOCTYPE html >** - This tag indicates that the markup language for your document content is *HTML5*. As you can see, this tag is a bit different, doesn't follow the standard tag structure since.  
* **< html >** - The spine of HTML document is *< html >* tag. Every *HTML* document has to have this tag, and there has to be ONLY ONE < html > tag per document.  
* **< head >** - The < head > tag contains general information about the document. In this tag, later on, you will place the link to your *stylesheets* (which will enable you to style your document). 
Usually, it contains a *title* and *metadata* tags.  
  * **< title >** - Defines the title of the document. There is only one title element in the head element of an HTML. This title only contains text, and it'ss shown in the browser's title bar or on the page's tab.  
  * **< meta >** - Used to define metadata. It is meant to help browsers to render the page. It can contain information of allowed charsets to be used in the document, for example.  
* **< body >** - The < body > tag contains all the visible elements which will be presented to the users. **There can be only one < body > element in an HTML document.**  
  
---  
  
## HTML structure through DOM tree  
The Document Object Model [DOM] is a cross-platform and language-independent application programming inteerface that treats an HTML, XHTML, or XML document as a tree structure wherein each node is an object representing a part of the document. 
The objects can be manipulated programmatically, and any visible changes are ocurring as a result may then be reflected in the display of the document.  
  
> The **DOM [Document Object Model]** represents how the browser reads the HTML document. After the browser reads th HTML document, it creates a representational tree called thee Document Object Model and defines how that tree can be accessed.  
> In the DOM, everything is a **node**. The document, the body, all other elements, the elements' attributes, the content within the elements, are all *nodes*.  
  
### The DOM tree  
  
We saw that there is only one < html > element in each doc, which implies that all the other elements are *nested* within it. 
This makes the *html* tag, the **parent** of its *direct descendants*, which are *head* and the *body* tags, and **ancestor** of all the other elements. 
At the same time, you might notice, following the family tree structure, that < head > and < body > tags are **children** elements of their parent *html* element, but at the same time, 
they are **siblings** since they have a *mutual parent*.   
  
#### DOM and your code structure  
  
It is essential to write your code correctly. It is not just enought to close every tag that needs to be closed; it is **necessary to respect the right indentation**.  
By indentation, wee mean:  
* When looking in your HTML document, every tag opening and tag closing need to be aligned  
* Tags must respect their order - some are nested inside the others  
* Having no indentation won't break your code, but it is super bad practice  
  * **The indentation should be the perfect picture of your DOM**  


