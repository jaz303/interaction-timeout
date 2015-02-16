build/interaction-timeout.js: index.js build
	browserify -o $@ -s interactionTimeout $<

build:
	mkdir -p build
