.PHONY: enhanced boilerplate

enhanced: 
	curl -Lk https://github.com/russellgoldenberg/starter/archive/master.zip > temp.zip
	unzip -q temp.zip
	mv starter-master/* .
	mv starter-master/.babelrc .
	mv starter-master/.gitignore .
	mv starter-master/.eslintrc.json .
	rm -rf temp.zip starter-master Makefile boilerplate docs
	rm src/css/boilerplate*
	rm src/css/style-guide.styl
	rm src/html/style-guide.hbs
	mv Makefile.story Makefile
	npm i
	rm package-lock.json

boilerplate: 
	curl -Lk https://github.com/russellgoldenberg/starter/archive/master.zip > temp.zip
	unzip -q temp.zip
	mv starter-master/boilerplate/* .
	rm -rf temp.zip starter-master Makefile boilerplate style-guide

