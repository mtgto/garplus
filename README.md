# ガルプラス

# 説明

ガルーンをちょっと使いやすくする Chrome 拡張.

TypeScript 2.9 で書いてます。

# ビルド方法

ガルーンの URL が `http://example.com/` だとすると、

```sh
$ npm install # 初回のみ
$ GAROON_BASE_URL="http://example.com/" npm run build # URLは末尾がスラッシュで止まっていること.
```

インストールは dist ディレクトリを Chrome に読み込ませてください。

# TODO

-   [x] テキストエリアへのペースト内容に日本語 URL（ホスト部以外）が混ざってたら URL エンコードしてくれる
-   [x] スケジュールページで非公開予定のタイトルを隠す
-   [ ] スケジュール URL ペーストしたら勝手に不要な referer_key とか消してくれる
-   [ ] URL の最後がカッコで終わってたらスペース入れてくれる（自動リンク防止）
-   [ ] Markdown をペーストするとそれっぽく整形

# ライセンス

Apache License 2.0.

# 作者

mtgto <mailto:hogerappa@gmail.com>
