# mycmux

複数のエージェントCLIを並べて使う、Windows・macOS向けのターミナルワークスペースです。作業場所の切り替え、画面分割、会話の再開、成果物のプレビューを一つの画面にまとめます。

English: A GPL-3.0 terminal workspace for local agent CLIs, built with Tauri, Rust and React. It combines split terminals, session restoration, savepoints and artifact previews. This is an independent fork of [cmux-for-linux / ptrcode](https://github.com/cai0baa/cmux-for-linux), not an official product of an agent provider.

## このリポジトリについて

v0.88.6のソースから、私用の履歴・文書・設定・実会話を含めずに作った公開用スナップショットです。新しいバイナリリリースではありません。開発元のGit履歴、個人用スキル、配布用の秘密鍵、CIの認証情報は同梱していません。

公開版では、デモとテストの一部を人工データに置き換え、ペットに独自の図形キャラクター「Orbit」を採用しています。エージェントの表示には中立的な文字バッジを使います。第三者のCLI本体やアカウントは別途必要です。

## できること

- ワークスペースを分け、複数の端末を並べて表示する。
- インストール済みのCLIを起動し、対応する会話を再開する。
- 作業の区切りをセーブポイントとして保存し、引き継ぎに使う。
- 端末に出たファイルパスを開き、Markdown・HTMLなどをプレビューする。
- ダッシュボードで端末の状態を確認し、必要な相手へ入力する。
- ローカルの制御CLIと認証付きソケットから操作する。

画面上の整理は、ワークスペース、分割した画面区画、その中で切り替える端末セッションから成ります。コードでは画面区画を `Pane`、端末セッションを `PaneTab` と呼びます。

## ソースから試す

Node.js 24、npm、Rust stable、各OSのTauri 2ビルド前提を用意してください。WindowsではMSVC C++ビルドツールとWebView2、macOSではXcodeの開発ツールが必要です。Linux向けのコードも残していますが、この公開スナップショットではLinuxビルドを検証していません。

```sh
git clone https://github.com/miyafcos/mycmux-oss.git
cd mycmux-oss
npm ci
npm run build
npm run tauri dev -- -- --profile oss-preview
```

`npm ci` は依存を取得し、同梱のxterm・allotment互換パッチを適用します。実行前に `package.json` と `scripts/patch-*.mjs` を確認してください。CLIの認証と課金は各サービスの条件に従います。

**最初は `--profile oss-preview` を指定してください。** アプリの設定・ソケット・索引を通常利用と分け、更新確認と使用量ポーリングを止めます。ただし、この機能はOSのサンドボックスではありません。起動したシェルやCLIは同じユーザー権限と、利用者が渡した環境変数を使います。私用データから完全に分ける必要があれば、別のOSユーザーか仮想環境で試してください。

初回は作業フォルダを選び、空の端末を一つ開いてから、必要なCLIを起動します。存在しないCLIをmycmuxが自動で用意することはありません。公開版の同梱スキル一覧は空で、作者の個人設定を自動導入しません。

## 関連プロジェクト

- [claude-codex](https://github.com/miyafcos/claude-codex-oss)：別途導入する非公式CLI連携。
- [Pocketサーバー](https://github.com/miyafcos/pocket-mycmux-oss)：スマートフォンから接続するための別サービス。
- [Pocket iPhone](https://github.com/miyafcos/pocket-ios-oss)：利用者が設定したPocketサーバーに接続するiOSソース。

これらは任意です。mycmuxを使うためにすべて導入する必要はありません。

## 更新と配布の境界

アプリ識別子と既存の署名検証用公開鍵・更新URLは互換性のため維持しています。通常プロファイルの「更新を確認」は、既存の [mycmux-team配布先](https://github.com/miyafcos/mycmux-team/releases/tag/mycmux-personal-updater) を参照します。そこにあるバイナリは、この公開用ソースの人工素材への置換を含むものではありません。

このリポジトリからインストーラーや署名済みアプリは配布しません。自作版を検証するときは分離プロファイルを使い、既存アプリへ上書きしないでください。独自に配布する場合は、識別子・署名鍵・更新先を配布者自身で管理してください。

## 検証

```sh
npx --no-install tsc --noEmit
npm run test:unit
npm run build
cargo check --locked --offline --manifest-path src-tauri/Cargo.toml --tests
```

最後のコマンドは依存がローカルにある場合の例です。WindowsでRustテストを実行するには、Windows SDKのmanifest toolingを含む `scripts/run_windows_tests.py` の前提も確認してください。公開用テストは人工素材に限定しており、元プロジェクトの全テストを同梱するものではありません。

検証結果と未実施項目は [VALIDATION.md](VALIDATION.md) に記録します。全OSでの実機動作、すべての外部CLIとの互換性、すべての依存の安全性を保証するものではありません。

## ライセンスと報告

アプリのコードは [GPL-3.0](LICENSE) です。フォント、壁紙写真、同梱された第三者コードには個別の条件があります。[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) と各素材の表示を参照してください。製品名は互換性を示すもので、各提供元との提携や商標利用許諾を意味しません。

通常の不具合には人工データでの再現手順を添えてください。秘密情報や実会話を公開Issueへ貼らないでください。脆弱性は [SECURITY.md](SECURITY.md)、変更提案は [CONTRIBUTING.md](CONTRIBUTING.md) の手順に従ってください。
