.PHONY: install dev build preview release clean help

VERSION = 0.1.1

# Install node modules
install:
	npm install

# Run development server with Vite
dev:
	npm run dev

# Build the wesite using Vite
build:
	npm run build
	zip -r static.zip static

# Preview the website using Vite
preview:
	npm run preview

# Release built assets to Github
release: build
	gh release create v$(VERSION) static.zip --title "v$(VERSION)" --notes "Release v$(VERSION)"
	echo 'Avaliable to download at:\nhttps://github.com/futureframeai/website/releases/latest/download/static.zip'

# Clean up the build directory
clean:
	rm -rf static build/

# Display help for each target
help:
	@awk '/^#/{c=substr($$0,3);next}c&&/^[[:alpha:]][[:alnum:]_-]+:/{print substr($$1,1,index($$1,":")),c}1{c=0}' $(MAKEFILE_LIST) | column -s: -t