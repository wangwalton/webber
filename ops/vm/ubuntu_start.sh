# Setup github ssh 
ssh-keygen

sudo apt update

# Install node
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt-get install -y nodejs
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo "export PATH=~/.npm-global/bin:\$PATH" >> ~/.bashrc

npm install --global yarn


# MANUAL: copy over .env.prod to .env