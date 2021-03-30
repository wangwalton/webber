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

mongod --config rs0.conf &
mongod --config rs1.conf &
mongod --config rs2.conf &
wait