# 壁紙の出所台帳 (WALLPAPER_SOURCES)

このソースには Warp themes 由来の **11枚**のWebPとサムネイルを含みます。アプリ実行時の原寸画像の取得・キャッシュとは別に、ソースへの同梱も再配布として扱います。
出所は https://github.com/warpdotdev/themes 。2026-10-25に原本11枚とcredit行を固定revision `4154072de03bea5dd070afa947ba6a6f2310ed5d` で照合しました。

テーマとPride生成グラデーションにはApache-2.0が適用され、全文は同じフォルダの `warp-themes/LICENSE` に保持します。残る10枚の写真には [Unsplash License](https://unsplash.com/license) を適用します。写真をApache-2.0やGPLへ再許諾するものではありません。JPEGからWebPへ再エンコードしています。

Unsplash Licenseは複製・改変・配布・商用利用を認めていますが、大幅な改変を伴わない写真自体の販売と、競合する画像サービスを作るための集約を認めていません。アプリの背景として使います。写真家名は今回確認できていないため創作せず、上流の写真credit URLを全件保持します。一部の古いcreditページが閲覧できなくても、その写真の権利がテーマのApacheライセンスへ変わるわけではありません。

## マスタ表 (11枚)

列構造とマーカーは維持しています。私用の壁紙更新スクリプトは同梱していません。
配布ファイルの寸法・バイト数・sha256 の正本は `wallpaper-manifest.json`。

<!-- LEDGER-TABLE-BEGIN -->

| # | ファイル | id | label | 現寸法 | 現バイト | KB/MP | 原本URL | 原本寸法 | ライセンス・再配布可否 | 判定 |
|---:|---|---|---|---|---:|---:|---|---|---|---|
| 1 | src/assets/warp-themes/dark_city_bg.webp | dark_city | Dark City | 2278x1556 | 361836 | 99.7 | https://raw.githubusercontent.com/warpdotdev/themes/main/warp_bundled/dark_city_bg.jpg | 2278x1556 | Unsplash License (写真)。クレジット先は下表 | 再取得可 |
| 2 | src/assets/warp-themes/jellyfish_bg.webp | jellyfish | Jellyfish | 2048x1536 | 409998 | 127.3 | https://raw.githubusercontent.com/warpdotdev/themes/main/warp_bundled/jellyfish_bg.jpg | 2048x1536 | Unsplash License (写真)。クレジット先は下表 | 再取得可 |
| 3 | src/assets/warp-themes/koi_bg.webp | koi | Koi | 2048x1536 | 248140 | 77.0 | https://raw.githubusercontent.com/warpdotdev/themes/main/warp_bundled/koi_bg.jpg | 2048x1536 | Unsplash License (写真)。クレジット先は下表 | 再取得可 |
| 4 | src/assets/warp-themes/leafy_bg.webp | leafy | Leafy | 2048x1536 | 349572 | 108.5 | https://raw.githubusercontent.com/warpdotdev/themes/main/warp_bundled/leafy_bg.jpg | 2048x1536 | Unsplash License (写真)。クレジット先は下表 | 再取得可 |
| 5 | src/assets/warp-themes/marble_bg.webp | marble | Marble | 2356x1538 | 167844 | 45.2 | https://raw.githubusercontent.com/warpdotdev/themes/main/warp_bundled/marble_bg.jpg | 2356x1538 | Unsplash License (写真)。クレジット先は下表 | 再取得可 |
| 6 | src/assets/warp-themes/pink_city_bg.webp | pink_city | Pink City | 2356x1538 | 102572 | 27.6 | https://raw.githubusercontent.com/warpdotdev/themes/main/warp_bundled/pink_city_bg.jpg | 2356x1538 | Unsplash License (写真)。クレジット先は下表 | 再取得可 |
| 7 | src/assets/warp-themes/red_rock_bg.webp | red_rock | Red Rock | 2048x1536 | 504430 | 156.6 | https://raw.githubusercontent.com/warpdotdev/themes/main/warp_bundled/red_rock_bg.jpg | 2048x1536 | Unsplash License (写真)。クレジット先は下表 | 再取得可 |
| 8 | src/assets/warp-themes/snowy_bg.webp | snowy | Snowy | 2356x1538 | 413870 | 111.5 | https://raw.githubusercontent.com/warpdotdev/themes/main/warp_bundled/snowy_bg.jpg | 2356x1538 | Unsplash License (写真)。クレジット先は下表 | 再取得可 |
| 9 | src/assets/warp-themes/thanksgiving_bg.webp | thanksgiving | Thanksgiving | 2048x1536 | 791714 | 245.8 | https://raw.githubusercontent.com/warpdotdev/themes/main/special_edition/thanksgiving_bg.jpg | 2048x1536 | Unsplash License (写真)。クレジット先は下表 | 再取得可 |
| 10 | src/assets/warp-themes/winter_bg.webp | winter | Winter | 4549x3252 | 2505820 | 165.4 | https://raw.githubusercontent.com/warpdotdev/themes/main/special_edition/winter_bg.jpg | 4549x3252 | Unsplash License (写真)。クレジット先は下表 | 再取得可 |
| 11 | src/assets/warp-themes/pride_bg.webp | pride | Pride | 3072x2304 | 73406 | 10.1 | https://raw.githubusercontent.com/warpdotdev/themes/main/special_edition/pride_bg.jpg | 3072x2304 | Apache-2.0 (warpdotdev/themes)。生成グラデーションで第三者IPの写り込みなし | 再取得可 |

<!-- LEDGER-TABLE-END -->

## 写真のクレジット (Warp YAML の credit 行)

| ファイル | クレジット先 |
|---|---|
| `dark_city_bg.webp` | https://unsplash.com/photos/0eKCOZ11gfk |
| `jellyfish_bg.webp` | https://unsplash.com/photos/gGX1fJkmw3k |
| `koi_bg.webp` | https://unsplash.com/photos/tQk3y00flv4 |
| `leafy_bg.webp` | https://unsplash.com/photos/W5XTTLpk1-I |
| `marble_bg.webp` | https://unsplash.com/photos/tqu0IOMaiU8 |
| `pink_city_bg.webp` | https://unsplash.com/photos/OrwkD-iWgqg |
| `red_rock_bg.webp` | https://unsplash.com/photos/2i-JP4tVAp8 |
| `snowy_bg.webp` | https://unsplash.com/photos/d3pTF3r_hwY |
| `thanksgiving_bg.webp` | https://unsplash.com/photos/ZwPuquZBnyM |
| `winter_bg.webp` | https://unsplash.com/photos/TD8CbG9-sMk |

pride は Warp の生成グラデーションで、credit 行はない。
