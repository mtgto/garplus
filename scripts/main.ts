/// <reference path="../node_modules/@types/chrome/index.d.ts" />
"use strict";
import consts = require("./consts");
var textarea: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById('textarea_id');
var privateSchedules: Text[] = [];
if (textarea) {
    textarea.addEventListener('paste', function(e) {
        setTimeout(function() {
            // u3040-u309F: Hiragana
            // u30A0-u30FF: Katakana
            // u4E00-u9FCF: CJK Unified Ideographs
            // uFF00-uFFEF: Halfwidth and Fullwidth Forms
            var urlPattern: RegExp = /(https?:\/\/[\w!#$%&'\(\)*+,-./:;=?@\[\]_|~\u3040-\u30ff\u4e00-\u9fa0\uff00-\uffef]+)([\s"<>\\^`{}]?)/g;
            var newValue = textarea.value.replace(urlPattern, function(match: string, url: string, last: string) {
                return new URL(url).toString() + last;
            });
            if (textarea.value !== newValue) {
                textarea.value = newValue;
            }
        }, 10); // pasteイベント発生時はペーストされた文字列が取得されないのでちょっと待ってから取得する
    });
}
Array.prototype.forEach.call(document.querySelectorAll("div.normalEventElement>div>a>img"), function(img: HTMLImageElement) {
    if (img.src.indexOf("privateMark") !== -1) {
        var privateSchedule: Text = <Text>img.previousSibling;
        privateSchedule["_maskedText"] = privateSchedule.textContent;
        privateSchedule.textContent = "非公開";
        privateSchedules.push(privateSchedule);
    }
});
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request["menu"] === consts.CONTEXT_MENU_SHOW_MASKED_SCHEDULE) {
        for (let privateSchedule of privateSchedules) {
            privateSchedule.textContent = privateSchedule["_maskedText"];
        }
    }
});
