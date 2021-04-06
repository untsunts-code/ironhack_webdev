# HTML | Form Tag   
*Goals*  
* How to create an HTML form  
* What are and what do form attributes (*action* and *method*)  
* What is a label used for  
* What are different types of inputs that can be used in forms  
* How to *submit* forms (add the button and define its type)  
  
---  
## The *form* tag  
> The < form > tag is a block level element  
> It represents a form  
> It has nested inputs, labels, and buttons that will be used to retrieve data from the user and then process the data  
> Has the following structure:  
> > < form action="" method=""> < !-- labels and inputs to be added here -- > < / form >  
  
The < form > tag has two **mandatory [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#Attributes)**:  
* *action* - the form's task, when we get to backend development later, is to take input from a user and send it to a server. 
The *action* points to what URL the form will send its data to. **The default action of a form is to submit the data to the same page it is currently on.** 
We will focus in on this topic more when we get to backend development.  
* *method* - refers to dofferent ways form can be submitted. Later, when we get to the backend, you will know much more about HTTP methods, but for now, keep in mind that method can be *get* or *post*. 
When to use one or the other will be explained later.  
  
---  
## The *label* tag  
> The < label > tag is an inline element  
> It represents a caption for input fields  
> It has semantic and functional relation with the associated *input* field  
  
### The relation between *label* and *input*  
**The _id_ attribute is associated with the label _for_ attribute.**  
This is not just a semantic relation, but it has a simple functionality: *you can put the focus on input by clicking on the input or the associated label*.  
The **< label >** tag is not mandatory; you can use *input* tag without it.  
  
---  
## Input tags  
> The < input > tag is an inline element  
> It has the following structure (the order of attributes is flexible)  
> > < input type="" name="" id="" / >    
> It allows the user to enter different types of data  
> It has different types: - text, - textarea, - number, - email, - radio, - checkbox, - select  
  
### Type : *text*  
The **text** input (< input type="text" / >) allows users to fill any type of text, type=text is the default type of input.  
  
### Type : *textarea*  
The **textarea** type of input also allows the user to submit the text.  
The difference between < input type="text" > and < textarea > < / textarea > is that *textarea* allows free form typing on multiple lines. 
It is usually used when there is a need for entering descriptions of products or comments on a blog.  
The **text** input accepts a single line with a max length of 255 characters.  
The size of a textarea is modified using the attributes **rows** and **cols**.  
> *You should not use CSS to resize a textarea, because the text inside will be off-center.*  
  
### Type: *number*  
The **number** type of input (< input type="number" / >) allows to a user to enter numbers. 
Additionally, when you click on this type of input, two arrows will be added to the input so that the user can increase or decrease the number.  
If you try typing letters or special characters into the input field, which type is *number*, you won't be able to do it. This type of input accepts only numbers.   
  
### Type: *email*  
The **email** type of input (< input type="email" / >) allows a user to input text, specifically text in the format of an email.  
When the form is sent, it validates if the input contains a valid email.  
This is also known as the **frontend form validation**.  
  
### Type: *password*  
The **password** type is a very used one when working with the confidential data.v 
Anything you type in the field with type password won't be visible to outsiders, while you are typing.  
  
### Type: *radio*  
The **radio** input field (< input type="radio" / >) allows the user to choose only one of the multiple choices by clicking on one of the circles. 
As soon as you click on some other given option, that option gets picked, and the other one is not anymore.  
  
#### Attributes  
* type - "radio"  
* value - represents the value that will be sent to the server  
* name - as you can see, all three buttons have the same name, which means that this attribute is used to gather the elements to the same group; 
if you have multiple radio input groups, they will have different names  
  
### Type: *checkbox*  
The **checkbox** input field (< input type="checkbox" / >) allows to a user to select one or more option. It is used with two different purposes:  
* Select multiple options  
* Mark an option as selected (like agreeing to terms and conditions)  
  
#### Attributes  
* type - "checkbox"  
* value - represents the value that will be sent to the server  
* name - represents the group of inputs that belong to the same field  
  
### Type: *select*  
The **select** input field (< select > ... < / select> ) allows the user to select one option from a dropdown list.  
Each of the options are represented by an *option* tag (< option > ... < / option >).  
Each option is wrapped by the *select* input, so it is not necessary to add the *name* attribute to the options. The value is required, though, as this will eventually be the value sent to the server.  
  
### The *placeholder* property  
Inputs can have one more property - *placeholder*. Anything you want to be displayed in the input can be added to this property.   
  
---  
## Buttons  
> The **button** tag is an inline element.  
  
There are different ways to represent a button in HTML5:  
* You can use an *input* tag  :  < input type="button" value="Click me!" / > < input type="submit" value="Click me!" / >  
* You can use the *button* tag  : < button type="submit" > Click me! < / button> < button type="button"> Click me! < / button>  
  
Whichever way you choose, the main difference is the **type** of the buttons:  
* *submit* - This button type is normally used inside forms to send the data tha the form contains.  
* *button* - This button type is used as a general button for any other purpose when it is clicked, such as playing a video, or displaying a popup.  
  
### The input button  
The *input* tag which type is "button" (< input type="button" >) is an element that represents just a simple button and, by default, does nothing when you click on it.  
  
#### Attributes  
* type - "button"  
* value - indicates the text that will be shown in the button  
  
### Type: submit button  
The **submit** input (< input type="submit" >) is an element that represents a simple button. By default, it does nothing when you click on it unless it is located in a form. 
If it is part of the form, it will redirect (change the page) to the one that is stated in the form's *action* attribute.  
  
#### Attributes  
* type - "submit"  
* value - represents the text that will be shown in the button, by default, the value is "submit"  
  
### The button tag  
The *button* tag (< button >) is an element that represents a simple button. It can have the *type* attribute set to *button* or *submit*. The default type is *submit* in most of the browsers. 
By default, it does nothing when you click on it.  
  
#### Button behavior inside a form  
By default, when you place a *submit* button, *input* or *button* inside a form, it will try to send the form data to a URL through the *action* attribute. If there is no action specified, it will be sent to the current page.  
  
---  
## Summary table  
| Name  | HTML  | Description |  
| ----- | ----- | ----------- |  
| Form  | < form action="" method="" > < / form > | Sends user data to the server |  
| Text Input | < input type="text> | Allows a user to enter data |  
| Textarea | < textarea >< / textarea > | Allows a user to enter multi-line text |  
| Number Input | < input type="number" > | Allows a user to enter a number |  
| Email Input | < input type="email" > | Allows a user to enter an email |  
| Radio button | < input type="radio" > | Allows the user to mark one of multiple choices |  
| Checkbox | < input type="checkbox" > | Allows the user to select one or more options |  
| Select | < select >< / select > | Allows the user to select one option from a dropdown list |  
| Label | < label >< / label > | Represents a caption for an HTML input |  
| Button | < button >< / button > | Represents a button that will perform an action on the page, or submit a form |  

