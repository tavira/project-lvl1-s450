# Makefile

install:
	npm install

start:
	./node_modules/@babel/node/bin/babel-node.js src/bin/brain-games.js

publish:
	npm publish




