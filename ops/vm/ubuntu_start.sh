# Setup github ssh 
ssh-keygen

sudo apt update

# Install node
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt-get install -y nodejs
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
echo "export PATH=~/.npm-global/bin:\$PATH" >> ~/.bashrc

npm install --global yarn
npm install pm2 -g

git clone git@github.com:wangwalton/webber.git


# Frontend
# MANUAL: copy over .env.local to .env.local
# Open up port 80
sudo apt-get install authbind
sudo touch /etc/authbind/byport/80
sudo chown %user% /etc/authbind/byport/80
sudo chmod 755 /etc/authbind/byport/80
echo "alias pm2='authbind --deep pm2'" >> ~/.bashrc
source ~/.bashrc

pm2 start yarn --name "nextjs" --time -- start -p 80


# Backend
# MANUAL: copy over .env.prod to .env
pm2 start --name "node_backend" --time index.js


# Go backend
wget https://golang.org/dl/go1.16.3.linux-amd64.tar.gz
tar -xzf go1.16.3.linux-amd64.tar.gz
rm go1.16.3.linux-amd64.tar.gz
echo "export PATH=\$PATH:~/go/bin" >> ~/.bashrc
cd ~/webber/go_backend/scraper
go build
pm2 start scraper -- --configFile prodConfig.yaml
