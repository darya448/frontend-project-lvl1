install: #установка
		npm ci

brain-games: #запуск файла с игрой
		node bin/brain-games.js

publish:		
		npm publish --dry-run.

lint: 
		npx eslint .
brain-even: # запуск игры
		node bin/brain-even.js