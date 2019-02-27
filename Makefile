install:
	npm install

start-brain-games:
	npx babel-node -- src/bin/brain-games.js

start-brain-even:
	npx babel-node -- src/bin/brain-even.js

start-brain-calc:
	npx babel-node -- src/bin/brain-calc.js

publish:
	npm publish

lint:
	npx eslint .
