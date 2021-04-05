## Setup

```
export WEBBER_HOME=$(pwd)
```

## DO NOT MAKE THIS REPO PUBLIC UNLESS

- `go_backend/scraper/prodConfig.yaml`
- `web_backend/selfsigned.*`

## Certicates

`sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt`

## Deployments

```
pm2 start yarn --name "nextjs" --time -- start -p 80
```
