## Remote repositories - forking & cloning  
### Goals  
After this lesson, you will know how to:  
* *fork* someone's remote repository  
* *clone* a remote repository to your local machine  
* create a *pull request* on a remote that do not belong to you  
  
---  
### Introduction  
GitHub is a platform that encourages *social coding*, and because of this, GitHub has features that promote collaboration.  
  
---  
### Forking  
#### What is Forking?  
**Forking a repository is taking someone else's code, and creating your copy of it**. 
Eventually, the changes you make in the fork may be included in the original repository.
On GitHub, this means taking someone's remote repo and copying it to your own remote repo.  
Don't forget:  
* remote repos live on GitHub so with forking you are making a copy of someone's repository hosted on GitHub and the copy you are making will be hosted on you GitHub profile  
* everything related to forking happens online, on GitHub  
  
Sounds like plagarism, huh? Not really. There are a few different scenarios where this is fine:  
* **Open Source Contributions** - Most public GitHub repos are there for you to contribute to. Whether it is [express.js](https://github.com/expressjs/express) or [jQuery](https://github.com/jquery/jquery), they openly welcome contributions.
The only method to do this efficiently is by forking their repos.  
* **Creating a new project** - Sometimes, you or a group of people may not like how an open-source project is being run. If the project is open-sourced and properly licensed, then you can fork the project and run your own version.
Check out this list of [forked software projects](https://en.wikipedia.org/wiki/List_of_software_forks).  
* **Submitting work here at IronHack** - We have a central repo of all the exercises you will be working on during the course. To submit your work during the course, you will be making forks of these repos.  
  
#### How to Fork  
Luckily, forking on its own is super simple. Navigate to [Ironhack's GitHub practice](https://github.com/ironhack-labs/lab-github-practice) repo and click the fork button in the upper-right corner of the page.  
The question now is, **how do we get this repo onto our local machine?** So this is where cloning comes in to save the day.  
  
---  
### Cloning  
#### What is Cloning?  
Cloning a repository is simply taking a remote repository and copying it to your local machine.  
This can be useful in a couple of different scenarios:  
* You have created a fork of a project and now need to copy it to your computer so you can make some changes and be able to make these changes available to others  
* You are collaborating on a project where someone has invited you to their repo as a *contributor*, such as a private repo at a company, so you need to copy it to your computer and start making some changes.  
  
#### How to Clone  
Now that we have forked our own version of the excercise repo, we need to copy it to our computer so we can work on it.  
1. *[On your own copy of the repository, click the Copy or Download button, and copy the link to your clipboard]*  
2. Then, in your terminal, navigate to your code folder and run the *git clone* command with the repo's link  
3. If everything worked out, you should have a new folder called *lab-github-practice* on your local machine  
4. Now you can edit the folder and files in it as a remote repo  
  

---  
### Pull Requests  
#### What is a Pull Request?  
**A pull request is a way of notifying the owner of the original repository that you have made some changes and would like to *merge* those changes into their repository, at the owner's discretion**.  
To understand why you would make a pull request, you first need a slightly different perspective. Right now you are *one* person, working on *one* file, in *one* project.  
In your professional ventures, open-source projects, and even later in the course, when you collaborate on some group exercises, it can be *very tricky* to manage which changes are made, how they are made, and avoid conflicts.  
Why is it useful to create pull requests?  
* **It gives the owner of the repository a chance to review the code before including it in the codebase** - Open source projects are *open* after all, but they do have standards.
Often project owners will want to review code to make sure there aren't breaking changes or even dangerous hacks in the PR (pull request). In other cases, it may be your boss checking your code to make sure you are doing a good job.  
* **It leaves room for discussion between interested parties** - In open source projects, there are ofter many stakeholders who want to approve or deny features before they are included in the project.
For instance, check our this [pull request](https://github.com/expressjs/express/pull/2874).  
  
#### How to Pull Request  
Your local changes to our practice project should be staged and committed by now. The next step is to push your repo.  
If you remember, in a previous lesson, we had to add a *remote* to our repo to be able to push to GitHub. *A bonus of cloning a repo from GitHub is that the remote is already connected*.  

