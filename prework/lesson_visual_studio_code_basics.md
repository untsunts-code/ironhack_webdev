## Visual Studio Code Basics
  
__*Goals*__  

* know how to manipulate with files/folders using VSCode (create, open, save, rename and delete)
* know some of the most common VSCode keyboard shortcuts
* have installed some cool extensions to make your developer life more organized, colorful, and at the end of the road, easier

---
  
#### Introduction
  
A *source code editor* is an application that *facilitates writing code*. It is a text editor but is specially made for the editing source code of computer programs.
That will be your fundamental programming tool when writing and editing code.  
VSCode is *only* for writing code. You will write the code, save it too your file system, and then *run* the code with a different application (such as Node).  

---  

#### Files  

##### Create a new File  
There are different ways to create a new file in VSCode. You can do it by:  
* Choosing **File > New file** on the menu bar.  
* *MacOS*: Pressing **Cmd + N** to create a blank new file on the editor.  
* *Liinus*: Pressing **Control + N** to create a blank new file on the editor.  
* Alternatively, simply using the VS Code interface shortcut (icon).  

##### Open a File  
There are several ways to open a file in VSCode. You can do it by:  
* Choosing **File > Open...** on the menu bar.  
* *MacOS*: **Cmd + O** to choose a file from the standard dialog.
* *Linux*: **Control + O** to choose a file from the standard dialog.  
  
##### Edit and Save a File  
Editing a file is pretty straightforward. You can click around and scroll with your mouse and type to change the content. There is no special editing mode or key commands.  
You can save a file in different ways:  
* Choosing **File > Save** from the menu bar.  
* *MacOS*: **Cmd + S** to save the file.  
* *Linux*: **Control + S** to save the file.  
* If you choose **File > Save As** or press **Shift + Cmd + S (for MacOS)** or **Shift + Control + S (for Linux)** then you can save the current content in your editor under a different file name.  
* You can choose **File > Save All** or press **Alt + Cmd + S (for MacOS)** to save all the open files in VSCode.  
  
> To save yourself a lot of stressful moments, our warmest recommendation is to activate *Auto Save* option from **File > Auto Save**.  
  
##### The Unsaved icon (.)  
Sometimes, you will not remember if a file iss saved with your latest modifications.  
It is pretty easy just to press the ssave  shortcut in casse you are dealing with one file, but if you have been editing several files, it can be pretty tedious to save them all.  
Even if you do , there is a chance you don't remember a file you were modifying 10 minutes ago.
VSCode comes with a handy tool t odistinguissh what has been saved and what hasn't, the "Unsaved Icon" (.).  
  
#### Working on a project  
It is not very usual to work just with one file. Usually, the projects you will work with will have several files and folders.
You could open thee full projeect you are working on  with VSCode.  
  
##### Open  directories   
There are different ways to do that:  
* Choose the menu item  **File > Open (for macOS)** or **File > Open Folder (for Linux)**, and select a directory from the dialog.  
* Drag the project folder over the VSCode icon on the Dock.  
* You can open a project folder from the iTerm, Terminator, or any other terminal emulator. Locate the project path and type code . to open VSCode with the full project.  
  
Keep in mind that code has to be added to the PATH before using it in the terminal.  
  
#### The Folder Tree  
The folder tree is a view of the opened folder on VSCode. This *tree view* will allow you access to any file and folder under the root path of your project (or opened folder).  
It is *very important* to get used to working with this view beecause, most of the time, you will be working with projects that will contain a bunch of files since the very beginning.  
  
##### Open a file in the folder tree  
If you have the folder tree opened, you will be working with many files at the same time. Sometimes, you will need to modify them, but other times you will open a file just to check something out.
That could cause a mess. There are ways to avoid this:  
  
*Open file temporarily:* If you click a file in the folder tree *once*, it will open it on VSCode automatically. You can see its content and scroll as much as you want.
Then, if you click on any other file, the actual window will change to the last file selected.  
  
*Open file permanently:* If you *double click* on a file or you edit a file, it will open a new tab for that file.  The following files will be opened in different tabs.  
  
##### Search a file on the folder tree  
Once you have a project opened in VSCode, you can easily find and open any file within the project.  
If you press **Cmd+P**, the Fuzzy Findere will pop up. It will let you quickly search for any file in any directory inside your project by typing parts of the path.  
  
##### Basic opreations on the Folder tree  
There are many basic operations you can do directly from the folder tree by clicking the right button of the mouse. Mainly Folder and File operations.  
You should still go into this link [VS Code Tips and Tricks](https://github.com/microsoft/vscode-tips-and-tricks) to learn more.  

#### VSCode Packages  
Packages that are bundled with VSCode are referred to as *core packages*. Ones that are not bundled with VSCode are referred to as *community packages*.
You can download and install packages to add functionalities to your text editor or even develop your own packages.  
You can instal and manage packages in the **Settings** view. There you will find your installed packages in the **Packages** tab.  
  
##### Must-have VSCode Extensions  
* Code Snippets: [VS Code JavaScript (ES6) snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)  
* Syntax Highlighting: [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)  
* Linter Extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) , [JSHint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint)  
  * Linting is the process of running a program that analyses the code for potential errorz. Linter programss automatically find basic mistakes and tell you where they are and how to fix them.  
* Nodee Extensions:  
  * [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)  
  * [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)  
  * [Path IntelliSense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)  
* Formatting:  
  * [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)  
  * [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  
* [Some additional extensions](https://www.sitepoint.com/vs-code-extensions-javascript-developers/)
