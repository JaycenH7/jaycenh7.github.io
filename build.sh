#!/bin/bash

case $1 in 
  build) docker build -t jaycenh7/github.io:1.0 . ;;
  run) docker run -v $PWD:/srv jaycenh7/github.io:1.0 ;;
esac
