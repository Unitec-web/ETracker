
![Untitled design](https://github.com/user-attachments/assets/6d28e882-ee82-4e30-830c-d536c2cc8a6f)

# Introduction to ETracker
This will be our first project as a team to test our team work capabilities. this project tracks the expenditure and financial transactions and provide reports and statistics
# Getting started
1. Clone the staging branch of this repository.
2. For front-end developers clone the frontend branch and back-end developers should clone the backend branch.
3. Open the project in your favourite code editor preferrably Visual Studio Code.
4. Create a branch
   `git checkout -b my_feature_branch`
6.  Name your branch according to your task name and with '_' if it is composed_of_many_words.
# Rules or Folders and Files Naming Conventions
- Directories with longer names should be named using hyphens-to-seperate-each-word.
- Each directory has an example of how each folder and file belonging to that directory is to be named. PLEASE FOLLOW THE SAME CONVENTION.
- For naming classes, use names that are self explanatory and most of the styling should be done inside the styles.css
- If there is need for a separate style sheet it should be created in the folder containing the component.
# Folder Structuring Explained
- ├── ...
- ├── public                 # Public folder
- ├── src                    # Source folder
- │   ├── app                # Redux store configs folder
- │   ├── components         # App components folder
- │    │    ├── ui               #Ui components like nav bar
- │   ├── icons              # Project icons folder
- │    │    ├── hooks          # Custom hooks creation folder
- │   ├── pages              # Pages folder
- │   ├── repository         # Reusable exports
- │    │    ├── icons          # Icons exports folder
- │   ├── services           # Services folder
- │    │    ├── api            # Api services folder
- │   └── ...
- └── ...
# How to contribute
- Make sure to pull the latest changes from the branch you are working with (frontend or backend).
- Add and stage your work using the command 
  - ```
    git add .
    ```
  # OR
  - ```
    git add <filename>
    ```
- Commit your changes
  - ```
    git commit -m "Description of changes"
    ```
- push your Changes. Ensure you're pushing from your branch 
  - ```
      git branch //to check the branch where you are
      git push -u origin your_branch-name //to push your code
    ```
# How Conflicts Occur
Conflicts happen when:

- Concurrent Changes: You and someone else modify the same line in the same file or make changes that affect the same part of the code.
- Merge Failures: If your local branch has diverged from the remote branch (e.g., if new commits were added to the remote branch after your last pull), Git may not be able to automatically merge the changes.
# Resolving Conflicts
If conflicts occur during a pull or a merge, Git will:

1. Mark Conflicted Files: Git will mark the files that have conflicts.
2. Manual Resolution: You need to open the conflicted files, resolve the conflicts manually, and then stage the resolved files.
3. Commit the Resolution: After resolving conflicts, commit the changes.
  - ```
      git add <resolved-file>
      git commit -m "Resolved merge conflicts"
    ```
