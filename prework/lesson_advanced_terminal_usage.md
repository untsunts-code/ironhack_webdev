## Advanced terminal usage
  
*Goals*
  
* Understand advantages of ZSH and Oh-my-zsh over bash
* Be able to use some of the most used shortcuts
* Know how to manage tabs and panes
* Understand why passwords are not visible in terminal
  
---
  
#### Introduction
 
__*ZSH Advantages (over bash)*__  

ZSH offers more features than bash, such as:
* autocompletion
* spelling correction
* right prompt
* aliases
* syntax highlighting
* path expansion
* clever history
* easy customization
Here you can find a [list](https://en.wikipedia.org/wiki/Z_shell#Features) of ZSH features.
Or, you could always go into [this amazing pptx](https://www.slideshare.net/jaguardesignstudio/why-zsh-is-cooler-than-your-shell-16194692).  
  
---
  

#### Most important Features
  
__*Autocompletition*__
  
Typically, bash allows you autocompletition with the *Tab* key, but it's case sensitive.  
ZSH allows autocompletition without worrying about case sensitivity, you really don't have to know the exact name of folders and files.  

__*Spelling correction*__
  
ZSH shows a message if the command is misspelled when trying to execute a command and it fails.  

__*Path expansion*__  

When you want to navigate deep into a particular folder, it can be tedious to do go folder by folder. Bash allows you to do the following:  
> cd Documents/Docs/Learning/IRONHACK/ironhack_webdev  
However, you still have to write the full name in every directory or file. ZSH has a simpler way:  
> cd doc/doc/learn/iro/iro  
Then you hit the *Tab* key, ... and it will automatically transform the path! (*which is pretty awesome if you are not a robot*)  


---
  
#### Creating tabs & splitting panes
  
__*Managing Tabs*__
  
Tabs in the terminal are just about as useful as tabs in your web browser. Before you reach to open a new terminal window, open a tab.  
  
> Create a new Tab --> Command + T  
> Close Current Tab --> Command + W  
  
__*Managing Panes*__

iTerm2 and Terminator allow you to divide a tab into many rectangular panes, each of which is a different terminal session *(don't worry now about what a session is)*. 
The advantage of doing this is that you can see them all at the same time.  

> Split Pane Vertically --> Command + Up + D
> Split Pane Horizontally --> Command + D
> Navigate Among Panes --> Command + option + arrow
> Maximize One Pane --> Command + Up + Enter
> Close Current Pane --> Command + W  
  
---
  
#### Passwords in the terminal  
  
1. You will be asked to fill the password in when:
  * You are trying to install some applications or modify something that requires **admin/superuser privileges**. This usually goes hand in hand with using *sudo* command, which hopefully you won't have to use that often.
  However, it is good to be aware of it because sometimes we have to do so - when enabling a feature, modifying a system file, or for troubleshooting purposes. 
  * You are setting a *global user for Git* (this will come up in one of the following lessons).
2. *Passwords in the terminal are invisible for security reasons*
  * When you type a password in the terminal, the cursor on the screen will not movee, and there is no indicator the password is being entered at all. This is intentional and serves as a security mechanism.
  In some other protected environments, your password will become asterisks as you type, but not in the terminal. Seeing asterisks gives observation on how long the password is, and that is already not secure and might lead to revealing passwords easier.
  






