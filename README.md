Fork the  Original repo from github to your repository.
clone the repo in your system using :
git clone https://github.com/sejal3008/Visitmate2023.git (fork repo url)
make changes and implementation in code .
then add and commit your changes using 
git add .
git commit -m "msg of commit"
and push on your forked repository 
before that add origin to your repository using :
git remote add origin https://github.com/sejal3008/Visitmate2023.git
then push your code to your repository 
git push origin main(name of your origin)
after that create pull request to merge the code to original repository main authentication person merge the code.

if someone makes changes in original repository and you have to pull it then 
add original repository in your system :
git remote add upstream https://github.com/992344/Visitmate2023.git
fetch the updated data:
git fetch upstream
checkout to the master branch and merge :
git checkout master
git merge upstream/master
resolve all merge conflicts

