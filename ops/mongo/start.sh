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

MONGO_HOME=$WEBBER_HOME/ops/mongo

(mongod --config $MONGO_HOME/rs0.conf --dbpath $MONGO_HOME/rs0 &) | (sed -e 's/^/Mongo #1: /;' &)
(mongod --config $MONGO_HOME/rs1.conf --dbpath $MONGO_HOME/rs1 &) | (sed -e 's/^/Mongo #2: /;' &)
(mongod --config $MONGO_HOME/rs2.conf --dbpath $MONGO_HOME/rs2 &) | (sed -e 's/^/Mongo #3: /;' &)
wait