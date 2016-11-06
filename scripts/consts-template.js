// consts.ts を生成するためのテンプレートファイル
// $ GAROON_BASE_URL="http://example.com/" node scripts/consts-template.js > scripts/consts.ts
// のように実行する 
const CODE = `"use strict";
export const CONTEXT_MENU_SHOW_MASKED_SCHEDULE = "showMaskedSchedule";
export const GAROON_BASE_URL = "${process.env.GAROON_BASE_URL}";`;
console.log(CODE);