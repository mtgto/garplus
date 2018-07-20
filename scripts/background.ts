import * as consts from "./consts";

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        documentUrlPatterns: [consts.GaroonBaseUrl + "*"],
        id: consts.ContextMenuShowMaskedSchedule,
        title: chrome.i18n.getMessage("contextMenuTitleShow"),
    });
});
chrome.contextMenus.onClicked.addListener((
    info: chrome.contextMenus.OnClickData,
    tab?: chrome.tabs.Tab,
) => {
    if (info.menuItemId === consts.ContextMenuShowMaskedSchedule && tab && tab.id) {
        chrome.tabs.sendMessage(tab.id, {
            menu: consts.ContextMenuShowMaskedSchedule,
        });
    }
});
