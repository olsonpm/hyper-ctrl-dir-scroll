#! /usr/bin/env sh

npx babel --source-maps inline -- index.js > index.babel.js
echo 'done!'
