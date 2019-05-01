PHONY: github aws-assets aws-htmljs aws-cache pudding client

github:
	rm -rf docs
	cp -r dist/ docs
	git add -A
	git commit -m "update dev version"
	git push

archive:
	zip -r archive.zip dev
	git add -A
	git commit -m "archive"
	git push

client: 
	npm run depudding
	
# aws-assets:
# 	aws s3 sync dist s3://pudding.cool/year/month/name --delete --cache-control 'max-age=31536000' --exclude 'index.html' --exclude 'main.js'

# aws-htmljs:
# 	aws s3 cp dist/index.html s3://pudding.cool/year/month/name/index.html
# 	aws s3 cp dist/main.js s3://pudding.cool/year/month/name/main.js

# aws-cache:
# 	aws cloudfront create-invalidation --distribution-id E13X38CRR4E04D --paths '/year/month/name*'	

# pudding: aws-assets aws-htmljs aws-cache archive
