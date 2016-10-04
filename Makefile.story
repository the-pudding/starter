# requires gac
live:
	rm -rf docs
	cp -r dist/prod/ docs
	gac 'update dev version'
	git push
