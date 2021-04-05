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

# MANUAL: copy over .env.prod to .env

# Frontend
# Open up port 80
sudo apt-get install authbind
sudo touch /etc/authbind/byport/80
sudo chown %user% /etc/authbind/byport/80
sudo chmod 755 /etc/authbind/byport/80
echo "alias pm2='authbind --deep pm2'" >> ~/.bashrc
source ~/.bashrc

# ubuntu  ALL=(ALL:ALL) ALL
