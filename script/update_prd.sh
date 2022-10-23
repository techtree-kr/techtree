cd ~/dev/techtree
git checkout .
git pull
npm i
npm run build
pm2 delete techtree
pm2 start npm --name "techtree" -- start --time 