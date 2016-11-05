/// <reference path="../node_modules/@types/chrome/index.d.ts" />
var textarea: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById('textarea_id');
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
            if (textarea.value != newValue) {
                textarea.value = newValue;
            }
        }, 10); // pasteイベント発生時はペーストされた文字列が取得されないのでちょっと待ってから取得する
    });
}
