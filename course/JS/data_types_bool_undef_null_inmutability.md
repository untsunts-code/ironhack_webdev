# JS | Data Types in JS - boolean, undefined & null and Immutability  
*Goals*  
* Use boolean as data type  
* Use undefined and null as data types  
* Understand primitives and immutability  
* Understand *value* vs. *reference* in JS   
  
---  
## A boolean as data type  
> A **bollean** or **bool** expression can result in the value of either **TRUE** or **FALSE**  
  
### Boolean logic operators  
We use logical operators to combine two (or more) conditions and depending on the conditions on the logical operator(s), we will get as a result a **TRUE** or a **FALSE**.  
We have three different logical operators:  
* or  - ||  - returns *true* if **one of the evaluated expressions is _true_**  
* and  - && - returns *true* if **all the evaluated expressions are _true_**
* not  - ! - if the expression is **true**, the result will be **false**, and vice versa  
  
---  
## An undefined as data type  
> **undefined** is the primitive value automatically assigned to variables when they are declared   
  
---  
## A null as data type  
In computer science, a **null** value represents a reference that points, generally intentionally, to a nonexistent address, meaning the variable that hasn't been even declared yet.  
However, in JS, *null* is often used to represent *value unknown* variables.  
You will often use this value when checking if a variable has even been declared or when you intentionally want to reassign the value of some variable to *ull* because of some changes in its status in your application.  
*symbol is another primitive value, however we will not dig into symbols since we won't use them during this course.*  
  
---  
## Immutability  
All primitive data types are **immutable**.  
> Immutability means that once one of the primitive value is created, it can't be modified.  
  
**Values are immutable** but variables are mutable.  


