#!/usr/bin/env bash
killall node

cd $HOME/github/chores/server
screen -S server -d -m npm start

cd $HOME/github/chores/client
screen -S client -d -m npm start