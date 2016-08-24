all: 
	curl -Lk https://github.com/russellgoldenberg/starter/archive/master.zip > temp.zip
	unzip -q temp.zip
	mv starter-master/* .
	mv starter-master/.babelrc .
	mv starter-master/.gitignore .
	rm -rf temp.zip starter-master Makefile
	rm src/assets/.gitkeep
	npm i