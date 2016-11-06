/// <reference path="../node_modules/@types/chrome/index.d.ts" />
"use strict";
import consts = require("./consts");
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "id": consts.CONTEXT_MENU_SHOW_MASKED_SCHEDULE,
        "title": chrome.i18n.getMessage("contextMenuTitleShow"),
        "documentUrlPatterns": [consts.GAROON_BASE_URL + "*"]
    });
    chrome.contextMenus.onClicked.addListener(function (info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab) {
        if (info.menuItemId === consts.CONTEXT_MENU_SHOW_MASKED_SCHEDULE) {
            chrome.tabs.sendMessage(tab.id, { menu: consts.CONTEXT_MENU_SHOW_MASKED_SCHEDULE });
        }
    });
});
