install:
	yarn

run: install
	yarn dev

deploy: install
	yarn build
	sudo supervisorctl restart spectrum
