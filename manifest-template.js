var base_url = process.env.GAROON_BASE_URL;
if (!base_url) {
	console.error("環境変数 GAROON_BASE_URL に \"http://example.com/\" のような文字列を渡して下さい");
	process.exit(1);
}
manifest = {
	"manifest_version": 2,
	"name": "ガルプラス",
	"version": "0.0.1",
	"description": "ガルーンをちょっと使いやすくするツール",
	"author": "mtgto",
	"homepage_url": "https://github.com/mtgto/garplus",
	"icons": {
		"16": "icon16.png",
    	"48": "icon48.png",
        "128": "icon128.png"
	},

	"permissions": [
		"activeTab",
		"contextMenus"
	],
	"content_scripts": [{
		"matches": [process.env.GAROON_BASE_URL + "*"],
		"js": ["scripts/main.js"]
	}],
	"background": {
		"scripts": ["scripts/background.js"],
		"persistent": false
	}
}
console.log(JSON.stringify(manifest))
