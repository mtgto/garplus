ガルプラス
====

# 説明
ガルーンをちょっと使いやすくするChrome拡張.

TypeScript 2.0で書いてます。

# ビルド方法
ガルーンのURLが `http://example.com/` だとすると、

```sh
$ npm install # 初回のみ
$ GAROON_BASE_URL="http://example.com/" npm run build:manifest # 末尾がスラッシュで止まっていること.
$ npm run build:script
```

インストールはdistディレクトリをChromeに読み込ませてください。

# TODO
- [x] テキストエリアへのペースト内容に日本語URL（ホスト部以外）が混ざってたらURLエンコードしてくれる
- [ ] スケジュールURLペーストしたら勝手に不要なreferer_keyとか消してくれる
- [ ] URLの最後がカッコで終わってたらスペース入れてくれる（自動リンク防止）
- [ ] Markdownをペーストするとそれっぽく整形
- [ ] スケジュールページで非公開予定のタイトルを隠す

# ライセンス
Apache License 2.0.

# 作者
mtgto <hogerappa@gmail.com>
