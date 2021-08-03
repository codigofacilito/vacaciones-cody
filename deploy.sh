#!/bin/sh
npm run build

cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:MrDavid0614/vacaciones-cody.git HEAD:gh-pages

cd -