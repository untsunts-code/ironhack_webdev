## GitHub basics    
### Goals  
After this lesson, you will know:  
* what GitHub is and what it is used for  
* what a *remote repository* is, and why it is useful  
* how to push and pull code between your *local* and *remote* repos  

---  
### What is GitHub?  
GitHub is a tool to collaborate with others (DVCS) using Git. 
In short, GitHub allos us to host our Git repositories in the cloud so that others can share them.  
GitHub also has features for:  
* **Managing Repos** - Team collaboration can be tricky.
When multiple people are working on the same project, it is hard to find a source of truth or manage who can change the repository.
GitHub has features to facilitate this.  
* **Project Management** - With open source projects, it is often difficult to state the general direction of the product, transparently display which features are being implemented, and the priority of those features.  
* **Social Networking** - GitHub has features to search and find other developers, find repos with a specific language, and follow/unfollow other coders.  
* **Organizations and Team Management** - If you have a company or a project in which multiple people are working, you can create an *organization*, or a group of people with varying permissions and abilities on the repo.  
  
Currently, we have a local Git repository. As it is, we can't share this repository with anyone, so let's change that.  
  
---  
### Create an Account    
First things first, if you haven't done already, go to [GitHub](https://github.com/) and create an account.  
  
---  
### Creating a GitHub Repo  
There are quite a few ways to create a GitHub repo, but let's talk about the simplest first. The easiest way to get up and running is to visit GitHub.  
Click the plus sign in the upper right-hand corner of the page, and then click "New Repository".  
You will be presented with a page where you will need to fill the following data values:  
- Repository name  
- Description (optional)  
- Public/Private status  
- Initialize repo with a README (checkbox)  
  
---  
### Adding a Remote Repository: git remote  
Our remote repository and local repository are two entirely different repos. When we make changes locally, we will have to *push* them to our remote repository- which live on GitHub (the online cloud).
When we want to grab changes that our collaborators made on their computers and pushed into GitHub repo, we will have to *pull* them to our local repository.  
* **push** - take changes made locally to a remote repo that lives on GitHub  
* **pull** - take changes made by others, on the same repo and pushed into GitHub, to your local repo  
  
The first step in this is connecting the two repos, which can be done using the **git remote add** command while supplying a few options:  
* **alias** - you create an alias in your system for the **remote** reposoitory, which will be pointing to the GitHub repo.
It is very common to call this alias [origin](http://stackoverflow.com/questions/9529497/what-is-origin-in-git), which we will advise you to do all the time (except now).
Since this is a learning process and we want you to understand that *origin* is a *remote* repo hosted on GitHub, we will call it *github-repo*.  
* **GitHub repository URL** - a unique URL that GitHub provides for each repository.  
Navigate to your *git-practice* folder on your computer and run the following:  
> git remote add github-repo https://github.com/<your-github-username-here>/git-practice.git  
  
Remember, in this case, we are using *github-repo* as an alias for our first GitHub project.  
*[You can retrieve the link used in the previous code snippet to your GitHub repo in the GitHub page of your repo.]*  
This is telling your local GitHub repo: "Add a remote repository called *github-repo*, and have it point to *https://github.com/untsunts-code/git-practice.git*".  
We can view a list of remote repos attached to our current local repository by running *git remote* with no options:  
> git remote  
  
You can have as many or as few remote links as you would like. GitHub is only one remote Git hosting service, there are others such as Bitbucket, Gitlab, and many more.  
Now that our local repository and remote repository are connected via a remote, let's push some code!  
  
---  
### Adding changes to a remote repository: git push  
Adding a remote repository is pretty simple in most situations. We use the *git push* command, along with a couple of options to push our local repository to our remote repository (the first couple of steps stay the same, you have to do:
1. *git add* 2. *git commit -m 'Some message'* 3. push changes to remote repo  
> git push github-repo master  
  
* **git-push** - command to push code from a local to a remote repo  
* **github-repo** - an alias of a remote repository we want to push to. Eventually, we may have multiple remote repositories; therefore, we have to name them. However you will most likely during the bootcamp use the default name which is *origin*, so this command will look like: *git push origin master*  
* **master** - the branch we are pushing to on GitHub.  
The command line may prompt you for a username and password. This is the username and password to your GitHub account.  
  
---  
### Pulling From a Remote Repository: git pull  
Occasionally GitHub repos will have changes that we don't have on our local computer. This can happen when teammates push code to the repo, or when we update code on GitHub manually.  
In this situation, we have to use *git pull* to pull code to our local repository from GitHub.  
> git pull github-repo master  
Once again, the command *git pull* takes two arguments. The first being the **remote alias** and the second being the branch. As stated previously, don't worry about the branch.  
  
---  
### Quick Reference  
Here you have the most important commands you should have learned in this lesson:  
* Add a remote repository  
> git remote add <alias> <github-url>  
  
* Pushing to Remote Repository  
> git push <alias> <remote-branch-name>  
  
* Pull changes from GitHub  
> git pull <alias> <remote-branch-name>  

