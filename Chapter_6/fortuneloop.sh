#!/bin/bash

mkdir /var/htdocs
while :
do 
    /usr/games/fortune > /var/htdocs/index.html
    sleep 10
done
