## Managing files using CLI
  
Goals:  
* Understand the organization of the filesystem on your computer
* Learn how to navigate around your filesystem using terminal commands
* Learn how to create, remove, and move files using terminal commands
* Know how to create and delete forlders using terminal commands

---
  
##### Introduction
  
In this lesson you will learn what the file system is and how to manage files and folders through the terminal. 

##### File System
__*Organization*__
 The files on a Linux or OSX system are arranged in what is called a __hierarchical directory structure__. It means that they are organized in a __tree-like pattern__ of folders (directories), which may contain files and other folders.
     
 __*Root and Home Directories*__
  The top-level directory in the file system is called the *root directory (/)*.  
 Any directory can contain files and/ or subdirectories, which contain more files and more subdirectories...  
 Every user has its home directory, where he keeps all the information for his account, including his desktop, movies, pictures and applications.   
 When you open your terminal, you most likely have it waiting for commands in your home directory __(/home/<your_username>)__.
   
 __*First Commands*__
 * hostname
 * whoami
 * pwd
 * cd     // change directory
 * cd ..  // go back to the upper-level dir
 * cd /   // navigate directly to the __root__ path
 * cd ~   // navigate directly to our user's __home__ path
 * cd -   // navigate directly to the previous working dir
 * ls     // list files in dir
 * ls -l  // get detailed listing
 * ls -t  // sort by time
 * ls -S  // sort by size
 * ls -r  // reverse sorting
 * ls -a  // include hidden files
  
##### Create and Remove Folders and Files
  
Create a new folder using the __mkdir <foldername>__ command.  
Remove an empty folder using the __rmdir <foldername>__ command.  
Create a new, blank file, using __touch <filename>__.
Remove a file using __rm <filename>__.
You can also combine two or more commands in one line:
  mkdir & cd my-files  // create dir my-files and enter it
  touch file-1.txt file-2.txt file-3.txt     // create 3 files
  
To delete a list of files and folders, including all files from subdirectories, without prompting you every single entry, you can use the __-r__ option for __recursive__, and the __-f__ option to __force it__ (just be careful not to delete all your files).  

##### Display a file
  
You can display the file content in the terminal with the __cat__ command.  
If the specified file is too large, you won't be able to see all the content on the screen. To be able to see all the content page by page, you have to use the __more__ or __less__ commands.  

##### Copy a file
  
Use the __cp__ command to copy a file:
  cp file1.txt copy_of_file1.txt
  
You can also copy the file into another directory:
  cp file1.txt foldertocopy/

Finally, we can copy directories that are not empty by running the cp command with the __-r__ option (__recursive__).
  
##### Move a file
  
You can move a file by using the __mv__ command.  
You can actually change the name of the file while moving it by adding a second argument to the mv function and moving it to the same folder:
  mv weirdnamed.txt normalname.txt

  

