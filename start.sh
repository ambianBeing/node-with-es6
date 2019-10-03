#!/bin/bash
# Checking if docker files exists in current directory
set -e
if [[ -f ./Dockerfile && -f ./docker-compose.yml ]];
then
	echo "--Starting with docker deployment process--"	
	sudo docker-compose build && sudo docker-compose up -d
else 
  	echo "Either dockerfile or compose file missing from currrent directory!"
	exit 1
fi
exit 0
