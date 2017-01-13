github:
	rm -rf docs
	cp -r dist/prod/ docs
	git add -A
	git commit -m "update dev version"
	git push
