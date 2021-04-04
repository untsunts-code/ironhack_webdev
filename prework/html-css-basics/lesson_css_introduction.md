# CSS | Introduction  
*Goals*  
* What is CSS  
* How to implement some of the CSS basics  
* Different ways to add styles to your projects  
  
---  
## CSS : Cascading Style Sheets  
> **Cascading Style Sheets (CSS)**  are a stylesheet language used to describe the **presentation of a document written in HTML**.  
  
*Adding to the analogy in the previous lessons, if HTML is the skeleton of your web page, CSS would be the hair, skin color, and other externally displayed belongings that define your appearance.*  
Without CSS, our websites would be something ugly, without any color nor animation, and all of them would be very similar.  
  
### Why CSS is important  
We use CSS to make our wabpages prettier, that is the simplest explanation possible, however, 
CSS does not just make them more beautiful, it makes them usable by visitors.  
  
---  
## Adding Styles  
We can add styles to our HTML pages in two different ways:  
* **inline** - directly in the HTML files (but remember that *this is not aligned to best practices*)  
* **in a separate file** - linked to our HTML file  
  
### Inline styles  
Most of the inline styles are added inside the tags of our html code. Remember that inline styles make your code less readable and unmaintainable, **always try to avoid it**.  
  
### In a separate (CSS) file  
To be able to style your html through css, you will need a separate css file that gives instructions of how special tags will be styled.  
Some things to take into consideration:  
* The css file has to have the extension **.css**  
* A usual convention is to name the file *style.css*  
  
When trying to read an html in the browser, just type the following in your terminal once you are already in the folder containing both files:  
> open index.html  # this would only open the html file without formatting  
  
To be able to let your html file to be styled by your css file, you **need to connect them somehow**.  
  
#### The link tag  
You are going to add a **< link >** tag **inside** the < head > tag of your index.html document:  
> < ! -- index.html -- >  
> < head >  
>   ...  
>   < link rel="stylesheet" href="./style.css"  >  
> < / head >  
  
##### Attributes:  
The attributes inside the link tag are:  
* *rel*: Defines the relationship between the linked resource and the HTML document. In our case, it is a stylesheet, in others it may be a file of another format.  
* *href*: Contains the URL to the .css file.  
  * Remember that you usually will be using **relative paths** to the CSS file (or any other file). The rule here is to **always pay attention to the folder/file structure**.  
  
---  
## Browsers default styles  
Every browser has its default styles. These styles are included directly in every web page, and they are different depending on the browser you are using (Chrome, Safari, Explorer, etc.).  
For example, if you inspect an < h2 > tag on *Chrome*, it will different than one in *Firefox*. In most cases, they will be pretty similar, but keep in mind every browser will apply its default styles for each tag.  

