import * as consts from "./consts";

type TextWithMaskedText = Text & { _maskedText: string };
const textarea: HTMLTextAreaElement = document.getElementById(
    "textarea_id",
) as HTMLTextAreaElement;
const privateSchedules: TextWithMaskedText[] = [];
if (textarea) {
    textarea.addEventListener("paste", e => {
        setTimeout(() => {
            // u3040-u309F: Hiragana
            // u30A0-u30FF: Katakana
            // u4E00-u9FCF: CJK Unified Ideographs
            // uFF00-uFFEF: Halfwidth and Fullwidth Forms
            const urlPattern: RegExp = /(https?:\/\/[\w!#$%&'\(\)*+,-./:;=?@\[\]_|~\u3040-\u30ff\u4e00-\u9fa0\uff00-\uffef]+)([\s"<>\\^`{}]?)/g;
            const newValue = textarea.value.replace(
                urlPattern,
                (match: string, url: string, last: string) => {
                    return new URL(url).toString() + last;
                },
            );
            if (textarea.value !== newValue) {
                textarea.value = newValue;
            }
        }, 10); // pasteイベント発生時はペーストされた文字列が取得されないのでちょっと待ってから取得する
    });
}
Array.prototype.forEach.call(
    document.querySelectorAll("div.normalEventElement>div>a>img"),
    (img: HTMLImageElement) => {
        if (img.src.indexOf("privateMark") !== -1) {
            const privateSchedule: TextWithMaskedText = img.previousSibling as TextWithMaskedText;
            if (privateSchedule.textContent) {
                privateSchedule._maskedText = privateSchedule.textContent;
                privateSchedule.textContent = chrome.i18n.getMessage(
                    "stringHiddenTitle",
                );
            }
            privateSchedules.push(privateSchedule);
        }
    },
);
chrome.runtime.onMessage.addListener(
    (message: any, sender: chrome.runtime.MessageSender, sendResponse) => {
        if (message.menu === consts.ContextMenuShowMaskedSchedule) {
            for (const privateSchedule of privateSchedules) {
                privateSchedule.textContent = privateSchedule._maskedText;
            }
        }
    },
);
