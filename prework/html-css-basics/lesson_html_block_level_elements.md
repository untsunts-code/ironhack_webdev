# HTML | Block level elements   
*Goals*  
* Understand what does it mean *block level* element  
* know which ones are block level elements [ < div >, < section >, < p >, < header >, < footer >, < table >, lists, etc. ]  
* know how to use block level elements  
* understand what *semantics* and *semantics HTML* is  
  
---  

## Block vs. Inline elements  
We already know that **within the < body > element, we writ all the elements we want to display on our website**, 
but before we move forward, it is important to mention that there are overall two different groups of tags / HTML elements:  
1. **block** level elements  
2. **inline** level elements  
*[This article](https://codeburst.io/block-level-and-inline-elements-the-difference-between-div-and-span-2f8502c1f95b) is a good reference to understand their difference*.  
  
> A [block level element](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) **begins a new line on the webpage** and, if no width is set, **extends the full width of the available horizontal space of its parent element**.  
> [Inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) flow like text. They **don't start a new line** and only **take up as much width as neecessary**.  
  
---  
  
## Block level elements  
Th most used block level elements are:  
* header block: < header > < / header >  
* division block: < div > < / div >  
* section block: < section > < / section >  
* article block: < article > < / article >  
* aside block: < aside > < / aside >  
* footer block: < footer > < / footer >  
* navigation block: < nav > < / nav >  
* headings: < h1 > < / h1 >, < h2 > < / h2 >, ... < h6 > < / h6 >  
* paragraph: < p > < / p >  
* lists  
  * ordered : < ol > < / ol >  
  * unordered : < ul > < / ul >  
* table : < table > < / table >  
  
---  
  
## How to use block level elements  
### The < header > tag  
> According to the official MDN docs, < header > elements represent an introductory content, typically a group of introductory or navigational aids. 
It may contain some heading elements but also a logo, a search form, an author name, and other elements.  
  
The < header > element is used to identify content that  precedes the primary content of the web page and often contains website branding, 
navigation elements, search forms, and similar content that is duplicated across all or more pages of a website.  
  
### The < div > tag  
> < div > : [The Content Division element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) is one of the most generic and most used elements when you start planning and building your page. 
Think of them as **boxes that will group parts of your webpage that are supposed to go together**. It is commonly used to separate parts of a web page or wrap content for styling.  
  
*If a div has no content inside, its height will be zero by default.*   
**It is pretty clear that anything can be wrapped inside the < div > tag, but that is not always the best solution. 
You might ask why, and the reason is that it is always better to be more specific.** For example, if what you are creating is a section of your webpage, you should avoid using *div* and use a **< section >** tag instad. 
It gives moree meaning to your cod, making it easier to understand as well as making it aesier to be found for the search engines. This is a matter of semantics, but can really make a difference.  
  
Here are some of the semantic tags you could (and should) use instead of div:  
* [nav](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)  
* [main](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)  
* [section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)  
* [article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)  
* [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)  
* [figure and figcaption](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)  
* [aside](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)  
* [footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)  
  

### The < section > tag  
> According to the [definition of < section > tag on W3.org](https://www.w3.org/TR/html/sections.html#the-section-element), the section element represents a generic section of a document or application. 
A section, in this context, is a thematic grouping of content.  
  
*According to best practices, < div > element should be used as an element of last resort, for when no other element is suitable.*  
  
> Use of more appropriate elements instead of the < div > element leads to better accessibility for readers and easier maintainability for authors.  
> However, nowadays, *div* is the most used tag overall. We encourage you to use its meaningful substitutes since that is what the standards and best practices are recommending.  
  
So far, we spoke only about *content manipulation tags - div* and its substitutes and *section* as the most common substitute. Now it is time to start learning about **text tags**.  
  
### The < article > tag  
> The **< article >** tag can be seen as a *stand-alone* part of the website, being able to be distributed independently throughout the website or reused on some other websites.  
> The < article > element is a good choice to contain entire blog posts, news articles, and similar content.  
  
### The < aside > tag  
> The **< aside >** tag represents part of a webpage but its content is not directly related to the main content displayed on the page - ex. sidebars.  
  
### Headings tags - < h1 > ... < h6 >  
> **Headings tags** are used to describe headings of varying levels of importance.  
  
Headings tags are declared as < h(number) > < / h(number) >, for example, < h1 > This is the main heading < / h1 >. Heading numbers range from 1-6. 
**The lower the heading number, the more important heading it is**.   
  
### The < p > (paragraph) tag  
> The paragraph tag, as seen above, is a block element that represents a paragraph or a block of text.  
  
Typically, these paragraph tags are proceeded by some heading to declare what the paragraph is about, or possibly other paragraph tags.  
    
### Lists  
Lists are one of the more common block elements. We use them when we need to express certain data that needs to follow the specific order (such as recipes or list of instructions), 
and in this case, we are talking about **ordered lists** and represented with < ol >... < / ol > tag. 
More common ones are, however, the lists in which order doesn't matter, and these are called **unordered lists**, and are represented with < ul > ... < / ul > tag.  
Both, unordered and ordered lists have the **< li >** tag nested in them. The *li* element stands for **list item**.  
  
> Each item in the list will be on a new line, separated with bullet points. **li elements should only be used inside of lists**  
  
### The < table > tag  
> The [< table >](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) tag is used to organize tabular data in different rows and columns.  
  
* **< table >:**  
  * is a block level element  
  * formats content as a table  
  * has *rows* and *columns*  
* **< thead >:**  
  * is a block level element  
  * defines a set of *rows as the head* of the columns in the table  
* **< tbody >:**  
  * is a block level element  
  * defines a set of *rows as the body* of the columns in the table  
* **< tr >:**  
  * is a block level element  
  * represents a new row in the table  
* **< th >:**  
  * is an *inline* level element  
  * represents a column inside a row in a table that is a *heading of that column*  
* **< td >:**  
  * is an *inline* level element  
  * represents a column inside a row in a table, this way you can have rows with a different number of columns inside  
    
  
> **Difference between td and th**  
> The main difference between *td* and *th* is that **th** is used for *titles and headers* of the table, while **td** is used for the *content*.  
  

*Tables **are nos meant to be used for layouts**.*  
  
### The < footer > tag  
> According to the [definition of the footer tag on html.com](https://html.com/tags/footer/), < footer > tag is a structural element used to identify the footer of a page, document, article, or section. 
This tag typically contains copyright and authorship information or additional navigational elements.  
    
  
---   
#### Additional thoughts   
* Semantic HTML is HTML with a meaning  
* Semantics do **give your page meaning**  
* Semantic HTML is **vital** to a website's [SEO](http://searchengineland.com/guide/what-is-seo)  
* Every sectioning element (body, article, section, nav, aside) can have its own header and footer  

