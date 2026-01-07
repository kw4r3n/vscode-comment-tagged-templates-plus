# カスタム言語テスト手順

## 概要

HCL や TOML などのカスタム言語がシンタックスハイライトされない場合の確認手順です。

## 前提条件の確認

### 1. HCL/TOML 言語拡張のインストール確認

カスタム言語（HCL, TOML）のシンタックスハイライトを使用するには、**それぞれの言語の拡張機能がインストールされている必要があります**。

#### 必要な拡張機能：

- **HCL/Terraform**: `hashicorp.terraform` または `HashiCorp.HCL`
- **TOML**: `tamasfe.even-better-toml` または `be5invis.toml`

### 2. 設定ファイルの確認

`.vscode/settings.json` に以下の設定が追加されていることを確認：

```json
{
  "comment-tagged-templates.additionalLanguages": [
    {
      "name": "hcl",
      "language": "hcl",
      "identifiers": ["hcl", "terraform"],
      "source": "source.hcl"
    },
    {
      "name": "toml",
      "language": "toml",
      "identifiers": ["toml"],
      "source": "source.toml"
    }
  ]
}
```

## テスト手順

### ステップ 1: 拡張機能のインストール確認

1. VSCode の拡張機能ビューを開く（Ctrl+Shift+X）
2. 以下を検索してインストール：
   - `hashicorp.terraform` (HCL 用)
   - `tamasfe.even-better-toml` (TOML 用)

### ステップ 2: 設定の確認

1. `.vscode/settings.json` が作成されていることを確認
2. 上記の `comment-tagged-templates.additionalLanguages` 設定があることを確認

### ステップ 3: 拡張機能デバッグの再起動

1. F5 キーを押して拡張機能デバッグを起動（すでに起動している場合は再起動）
2. 設定変更後は「Reload」を促すメッセージが表示されるので、「Reload」をクリック
3. Extension Development Host ウィンドウがリロードされるのを待つ

### ステップ 4: テストファイルで確認

1. `test-fixture-demo.js` を開く
2. 以下のコードブロックでシンタックスハイライトが有効になっているか確認：
   - 行 23-28: HCL コード（`/* hcl */`）
   - 行 32-36: TOML コード（`/* toml */`）

## 期待される動作

### 正常な場合

- Python, SQL などの組み込み言語: ✅ ハイライトされる
- HCL (カスタム言語): ✅ ハイライトされる（HCL 拡張がインストールされている場合）
- TOML (カスタム言語): ✅ ハイライトされる（TOML 拡張がインストールされている場合）

### 異常な場合

- カスタム言語がハイライトされない → 言語拡張が未インストール
- 設定変更が反映されない → リロードが必要
- すべてハイライトされない → 拡張機能自体の問題

## トラブルシューティング

### 問題 1: HCL/TOML がハイライトされない

**原因**: 対応する言語拡張がインストールされていない

**解決策**:

1. VSCode 拡張ビューで `hashicorp.terraform` と `tamasfe.even-better-toml` をインストール
2. Extension Development Host を再起動

### 問題 2: 設定を追加したが反映されない

**原因**: Extension Development Host がリロードされていない

**解決策**:

1. 開発者ツールのコンソールを確認（Help > Toggle Developer Tools）
2. "Comment tagged template languages were updated. Reload to apply changes?" メッセージが表示されたら「Reload」をクリック
3. 手動リロード: Ctrl+R (Extension Development Host ウィンドウ内で)

### 問題 3: エラーメッセージが表示される

**確認事項**:

1. `.vscode/settings.json` の JSON 形式が正しいか確認
2. 各カスタム言語に必須項目（`name`, `identifiers`）があるか確認
3. VSCode の出力パネル（View > Output）で "Comment Tagged Templates" を選択してエラーログを確認

## デバッグ情報の確認

Extension Development Host の開発者ツールコンソールで、拡張機能が正しく設定を読み込んでいるか確認できます：

1. Help > Toggle Developer Tools を開く（Extension Development Host 内で）
2. Console タブを確認
3. 拡張機能アクティベーション時のログを確認

## 参考

- 組み込み対応言語一覧: `build/languages.js` (54 言語)
- 設定スキーマ: `package.json` の `contributes.configuration`
- 実装コード: `extension.js` の `mergeLanguages()` 関数
