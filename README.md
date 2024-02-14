Fork the  Original repo from github to your repository.<br>
clone the repo in your system using :<br>
git clone https://github.com/sejal3008/Visitmate2023.git (fork repo url)<br>
make changes and implementation in code .<br>
then add and commit your changes using <br>
git add . <br>
git commit -m "msg of commit"<br>
and push on your forked repository <br>
before that add origin to your repository using :<br>
git remote add origin https://github.com/sejal3008/Visitmate2023.git <br>
then push your code to your repository <br>
git push origin main(name of your origin) <br>
after that create pull request to merge the code to original repository main authentication person merge the code. <br>

if someone makes changes in original repository and you have to pull it then <br>
add original repository in your system : <br>
git remote add upstream https://github.com/992344/Visitmate2023.git <br>
fetch the updated data: <br>
git fetch upstream <br> 
checkout to the master branch and merge : <br>
git checkout master <br>
git merge upstream/master <br>
resolve all merge conflicts <br>

