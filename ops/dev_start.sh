#!/bin/sh
set -euxo pipefail

# This monitors a Ctrl-C signal and kills all mongod instances
trap killgroup SIGINT
killgroup(){
  echo killing...
  kill 0
}
loop(){
  echo $1
  sleep $1
  loop $1
}

echo "Starting database"
$WEBBER_HOME/ops/mongo/start.sh &
echo "Starting frontend"
cd $WEBBER_HOME/web_frontend && yarn dev &
echo "Starting node backend"
cd $WEBBER_HOME/web_backend && nodemon index.js &
wait