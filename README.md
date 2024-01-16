# after changing any frontend file do the following
git commit -a -m "commit message"
git push -f origin main
# it will deploy the change into github pages
npm run deploy
#############################################
To deploy any react frontend to github try the following steps:
1. add homepage key at the top of package.json file
"homepage":"https://username.github.io/repository"
2. install git hub pages in npm
npm install gh-pages --save-dev
3. in package.json script part after "start" key copy the following lines
"predeploy":"npm run build",
"deploy":"gh-pages -d build",
4. commit and push it to github
5. deploy the frontend by
npm run deploy