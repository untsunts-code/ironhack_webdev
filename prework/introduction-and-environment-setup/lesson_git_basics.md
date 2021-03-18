## Git Basics  
### Goals  
We should be able to:    
* know how to create a .git repository  
* check the status to see what has changed  
* add your changed files to the staging area with **git add** command  
* take a snapshot of changes you have made using **git commit**  
* view previous commits you have made using **git log**  
  
---  
### Introduction  
We have learned in a previous lesson that *Git is a VCS for keeping track of changes you make to files and folders in your projects*.  
  
---  
### Creating a Repository  
Let's start by creating a directory to play with Git. Navigate to desktop and create a folder called **git-practice**:  
> pwd  
> mkdir git-practice  
> cd git-practice  
> touch data.txt  
> code .    

  
And we can add some text to data.txt:  
> Name: Ironhacker  
> Age: 25  
> Favourite Color: Yellow  
  
#### **git init** and the hidden **.git** folder  
We discussed in the previous lesson how we use Git to keep track of changes in files and folders on your local machine, but how is this done?  

*Don't assume this happens all the time since that is not the case.* 
To be able to track the changes you made in your file, the first thing you have to do is to *initialize this folder as a git repository*.  
Inside **git-practice** folder, run the following command:  
> git init  
**[To do this, you should have *git* installed on your computer. You can check that out by running the following command in the terminal:**  
> git --version  
**[The output should be your git version, something like *git version 2.19.0*]**  
* **git init** is the command to signal to Git that the folder you are currently in will now be a 
[Git repository](https://en.wikipedia.org/wiki/Software_repository). 
From that point forward, Git will track all changes to the files and folders inside of that folder.  
However, remains the same question - **how does it keep track of these changes?**  
Let's run an **ls** command to show the hidden folders and files inside of the folder:  
> ls -a  
> la  # this only works on my environment thanks to the bashrc  
  
In addition to **data.txt**, we have a new folder called **.git**. 
We did not create this directory ourselves - Git did when we ran the **git init** command.  
  
* The **.git** repository is where Git keeps track of all of the changes you make, and much more.  
  * If for some reason you run **git init** in a folder you didn't intend to make a git repository, you can simply remove the **.git** folder using **rm -rf**  

#### Where to create a **.git** repository / where to run **git init**?  
**[We will use naming git repo, but it is the same as git folder / directory.]**  
  
It may be easier to begin this by telling you where *not to create it*, and why.  
Most of the time, you will want to create the Git repo in a specific project folder. 
*You do not want to create a Git repository in a high-level folder, such as **Documents**, or your home**(~)** directory.*
Why? Git keeps track of the folder and **all subfolders of that folder.** 
This means that if you create a Git repository in you home(~) directory, you will be tracking all of the changes to files and folders on your local user's computer.  
* This is unnecessary  
* When you go to create a Git repo later inside of a project, you may run into issues  
* When you eventually want to store yout Git repos on GitHub later, you may accidentally push sensitive information.  
*The general rule is to create a git repo for each project you'll have.*  
  
---  
### Viewing Changes: git status  
Let's return to our **git-practice** folder. 
We have already run **git init**, and Git is keeping track of our changes. 
We currently have one file in that folder - **data.txt**.  
How can we tell what Git is keeping track of? The answer is a command that you will use very often while working on projects: *git status*  
* *git status* tells us what files and folders are being tracked, and what their current status is, according to Git.  
  * Git tells us a few things with the output from git status, but the one that we should pay attention to right now is the one that says *Untracked files*.  
  
---  
### Staging Changes: git add  
#### Staging a Single File  
Currently, **data.txt** is on our file system, but not being tracked by Git. Files and Folders in this state are referred to as our *working directory*.
To track this files with Git, we must **add** them to our **staging area**.  
* The staging area is a place where we have notified Git that something will start being tracked.  
  * To add a file to the staging area, we will use the **git add** command:  
> git add data.txt  
> git status  
  
#### Staging Multiple Files  
Often, in projects, we will want to stage multiple files at the same time. This can be done in a few different ways:  
* git add file1.txt file2.txt file3.txt  
* git add .  
* git add *  
Everything would be staged :)!  
  
#### Un-staging Files  
It looks like we actually don't want to add **file3.txt** to our staging area. We have made a mistake, so let's fix it.
We can use **git reset** command to remove a file from the staging area:  
> git reset file3.txt  
> git status  
Now file3.txt is back in our working directory and is no longer staged.  
  
---  
### Saving changes: git commit  
#### What is a **Commit**?  
The question you may have been asking before this point is **staging for what?**  
A **commit** in Git *is a snapshot of the state of the files and folders in your project, as well as the content in them*.  
Your projects are going to be evolving and changing all the time. As you add content and modify them, their **state** changes. 
As their state changes, commits will capture that point in time.  
* In computer science and web development, *State* is a term used to describe the status of an object, folder, files, etc. and its attributes or contents.  
  
Using commits in Git will:  
* help you revert mistakes to a previous working version (kind of an **undo** button thing)  
* enable you to collaborate with other developers on your projects without colliding  
* keep track of **who** made changes, and **when** they did them  
  
#### How to Make Commits  
We can make commits using the **git commit** command. This will take any files in our staging area, and create a new commit to our repository.  
We have already added files to our staging area from our working directory, and now we need to move them permanently to our repo.
The state of our project will be forever frozen in that snapshot:  
> git commit -m 'Initial commit - Create files, add data'  
> git status  
  
* **git commit -m** means we will provide a message with out commit. This will become more useful if we *leave a detailed and descriptive message* about what we have done in that commit.  
  * *Make a commit message in the present tense - as someone gave you a ticket on which they told you what to do*  
  * This is useful when you need to figure out what changes you have made in the past, and when they were done  

**What happened to our files?** When we create commits, it removes the files from the staging area, because they have been committed.
The only remaining file is **file3.txt**, which we did not add to the staging area.  
Great, now our files are committed and stored in Git, but how can we see committs that we have made previously and what have we done?  
  
---  
### Revisiting and Viewing Commits: git log  
At some point in the future, it is likely we will want to view all of the changes to our project. Besides, we may want to revert our project to a previous snapshot.  
The *git log* command is used to view commits and data about those commits.  
> git log  
**[Press 'q' to exit the log dialog screen in your terminal]**  
Contained in this dialog is our commits and some data about those commits. Each commit has:  
* *Commit SHA* - You can think of this as a unique ID for each commit. This can be used in the future to revert to this commit, remove this commit, or combine multiple commits  
* *Author* - The author attribute is useful when working with teams to see who did what  
* *Date* - The date when the commit was created  
* *Message* - The message we left when making the commit. This gives us some context as to what was done at that point. *This is why it is crucial to leave detailed and descriptive commit messages*   
**[Like most Git commands, git log is extremely customizable in how the output can be formatted. Check out the [Advanced Git Log](https://www.atlassian.com/git/tutorials/git-log) article for more details.]**  
  
---  
### Quick Reference  
*Initialize a repository*  
> git init  
  

*View changes in the repository*  
> git status  
  

*Adding files to staging area*  
> git add <file-name>    
  

*Saving files*  
> git commit -m '<commit-message>'    
  

*View changes history*  
> git log  
  
  
* [Git - Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet/)
