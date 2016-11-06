/// <reference path="../node_modules/@types/chrome/index.d.ts" />
"use strict";
import consts = require("./consts");
chrome.contextMenus.create({
    "title": "非公開予定のタイトルを表示する",
    "onclick": function(info, tab: chrome.tabs.Tab) {
        chrome.tabs.sendRequest(tab.id, { menu: consts.CONTEXT_MENU_SHOW_MASKED_SCHEDULE });
    }
});
