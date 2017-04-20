all: 
	curl -Lk https://github.com/russellgoldenberg/starter/archive/master.zip > temp.zip
	unzip -q temp.zip
	mv starter-master/* .
	mv starter-master/.babelrc .
	mv starter-master/.gitignore .
	mv starter-master/.eslintrc.json .
	rm -rf temp.zip starter-master Makefile boilerplate
	rm template-data/.gitkeep src/css/boilerplate*
	mv Makefile.story Makefile
	npm i

boilerplate: 
	curl -Lk https://github.com/russellgoldenberg/starter/archive/master.zip > temp.zip
	unzip -q temp.zip
	mv starter-master/boierplate .
	rm -rf temp.zip starter-master Makefile