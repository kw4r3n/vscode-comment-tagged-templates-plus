# 拡張機能のインストール方法

この拡張機能を自分の VSCode にインストールするには、以下の方法があります。

## 方法 1: VSIX ファイルからインストール（推奨）

### ステップ 1: VSIX パッケージの作成

すでに作成されています：

- ファイル: `comment-tagged-templates-0.3.3.vsix`
- サイズ: 約 110KB

まだ作成していない場合は以下を実行：

```powershell
# vsceツールのインストール（初回のみ）
npm install -g @vscode/vsce

# VSIXパッケージの作成
npx vsce package
```

### ステップ 2: VSCode にインストール

以下の 3 つの方法から選択できます：

#### 方法 A: VSCode UI から（最も簡単）

1. VSCode を開く
2. 拡張機能ビューを開く（Ctrl+Shift+X）
3. 右上の「...」メニューをクリック
4. 「Install from VSIX...」を選択
5. `comment-tagged-templates-0.3.3.vsix` ファイルを選択
6. インストール完了後、VSCode を再起動

#### 方法 B: コマンドパレットから

1. VSCode を開く
2. Ctrl+Shift+P でコマンドパレットを開く
3. 「Extensions: Install from VSIX...」と入力
4. `comment-tagged-templates-0.3.3.vsix` ファイルを選択
5. インストール完了後、VSCode を再起動

#### 方法 C: コマンドラインから

```powershell
# VSCodeがインストールされている場合
code --install-extension comment-tagged-templates-0.3.3.vsix
```

### ステップ 3: 設定の追加（オプション）

HCL や TOML は標準でサポートされているため、**設定は不要**です。
その他の言語を追加したい場合のみ、VSCode のユーザー設定（`settings.json`）に以下を追加してください：

```json
{
  "comment-tagged-templates.additionalLanguages": [
    {
      "name": "tfvars",
      "language": "hcl",
      "identifiers": ["tfvars"],
      "source": "source.hcl"
    }
  ]
}
```

> **注意**: HCL/TOML を使用する場合、それぞれの言語拡張のインストールは必要です（シンタックスハイライトのため）：
>
> - HCL: `hashicorp.terraform`
> - TOML: `tamasfe.even-better-toml`

### ステップ 4: VSCode の再起動

設定を反映させるために VSCode を再起動します。

---

## 方法 2: 開発モードでインストール（開発用）

継続的に変更を加える場合は、シンボリックリンクを使用します：

### Windows（管理者権限が必要）

```powershell
# 拡張機能フォルダに移動
cd $env:USERPROFILE\.vscode\extensions

# シンボリックリンクを作成
New-Item -ItemType SymbolicLink -Path "comment-tagged-templates-dev" -Target "D:\work\vscode-extensions\vscode-comment-tagged-templates-plus"
```

### その後

1. VSCode を再起動
2. 拡張機能ビューで「Comment tagged templates」が表示されることを確認

---

## インストールの確認

インストールが成功したか確認する方法：

### 1. 拡張機能ビューで確認

1. Ctrl+Shift+X で拡張機能ビューを開く
2. 検索バーに「Comment tagged templates」と入力
3. インストール済みとして表示されることを確認

### 2. 動作テスト

以下のコードを `.js` ファイルに貼り付けて、シンタックスハイライトが動作するか確認：

```javascript
// 組み込み言語のテスト
const sqlQuery = /* sql */ `
    SELECT * FROM users WHERE id = 1;
`;

const htmlCode = /* html */ `
    <div class="container">
        <h1>Hello World</h1>
    </div>
`;

// カスタム言語のテスト（設定追加後）
const hclCode = /* hcl */ `
    resource "aws_instance" "example" {
        ami = "ami-0c55b159cbfafe1f0"
        instance_type = "t2.micro"
    }
`;
```

SQL、HTML、HCL のコードがそれぞれ正しくハイライトされていれば成功です！

---

## アンインストール方法

### VSIX からインストールした場合

1. 拡張機能ビューを開く（Ctrl+Shift+X）
2. 「Comment tagged templates」を検索
3. 歯車アイコンをクリック
4. 「Uninstall」を選択

### シンボリックリンクの場合

```powershell
# シンボリックリンクを削除
Remove-Item $env:USERPROFILE\.vscode\extensions\comment-tagged-templates-dev
```

その後、VSCode を再起動します。

---

## トラブルシューティング

### インストールできない

- VSCode のバージョンを確認（1.20.0 以上が必要）
- VSIX ファイルが壊れていないか確認
- VSCode を管理者権限で起動してみる

### シンタックスハイライトが動作しない

1. 設定が正しく追加されているか確認
2. 必要な言語拡張がインストールされているか確認
3. VSCode を完全に再起動
4. 開発者ツール（Help > Toggle Developer Tools）でエラーがないか確認

### カスタム言語が動作しない

1. `settings.json` の設定を確認
2. 対応する言語拡張をインストール
3. VSCode を再起動
4. `TESTING.md` のトラブルシューティングセクションを参照

---

## 更新方法

新しいバージョンに更新する場合：

1. 最新の VSIX ファイルを作成（`npx vsce package`）
2. 古いバージョンをアンインストール
3. 新しい VSIX ファイルをインストール
4. VSCode を再起動

または、同じ VSIX ファイルを上書きインストールすることもできます。

---

## 参考リンク

- VSCode 拡張機能の公式ドキュメント: https://code.visualstudio.com/api
- vsce（VSCode Extension Manager）: https://github.com/microsoft/vscode-vsce
