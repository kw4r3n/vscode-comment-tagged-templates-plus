# 動作確認ガイド

## 概要

この拡張機能は、JavaScript や TypeScript のテンプレート文字列にコメントタグを使用して構文ハイライトを追加します。

## 対応言語

この拡張機能は以下の言語をサポートしています：

- **Web 言語**: HTML, CSS, SCSS, LESS, XML, XSL
- **プログラミング言語**: JavaScript, TypeScript, Python, Java, C, C++, C#, F#, Go, Rust, Scala, Ruby, PHP, Perl, Lua, Dart
- **データ言語**: JSON, YAML, SQL, GraphQL, SPARQL
- **シェル**: Bash, PowerShell, Batch
- **その他**: Markdown, Dockerfile, Makefile, AppleScript, Clojure, CoffeeScript, Groovy, Pug/Jade, R, GLSL, Liquid, EdgeQL, Cypher

全 72 言語に対応しています。

## 動作確認方法

### 方法 1: VS Code の拡張機能開発モードで確認

1. **VS Code でプロジェクトを開く**

   ```
   code d:\work\vscode-extensions\vscode-comment-tagged-templates-plus
   ```

2. **F5 キーを押して拡張機能開発ウィンドウを起動**

   - または、デバッグパネルから「Launch Extension」を実行

3. **新しいウィンドウで`test-example.js`または`test-example.ts`を開く**

   - テンプレート文字列内のコードが適切にハイライトされていることを確認

4. **確認項目**
   - ✅ HTML タグが正しくハイライトされているか
   - ✅ CSS プロパティが正しくハイライトされているか
   - ✅ SQL キーワードが正しくハイライトされているか
   - ✅ その他の言語も同様に確認

### 方法 2: パッケージ化してインストール

1. **VSCE ツールのインストール（まだの場合）**

   ```powershell
   npm install -g @vscode/vsce
   ```

2. **拡張機能をパッケージ化**

   ```powershell
   vsce package
   ```

3. **生成された.vsix ファイルをインストール**
   - VS Code で: `Ctrl+Shift+P` → "Install from VSIX" を選択
   - または: `code --install-extension comment-tagged-templates-0.3.3.vsix`

### 方法 3: テストファイルで手動確認

1. **`test-example.js`を開く**
2. **以下を確認**:

   ```javascript
   // この部分は通常のJavaScriptとしてハイライト
   const html = /* html */ `
     <!-- ここはHTMLとしてハイライトされるはず -->
     <div class="container">
       <h1>Hello</h1>
     </div>
   `;
   ```

3. **シンタックスハイライトの動作**:
   - コメント `/* html */` の後のテンプレート文字列が HTML 構文でハイライトされる
   - タグ、属性、クラス名などが適切な色で表示される

## 使用例

### HTML

\`\`\`javascript
const template = /_ html _/ \`

  <div class="app">
    <header>
      <h1>My App</h1>
    </header>
  </div>
\`;
\`\`\`

### CSS

\`\`\`javascript
const styles = /_ css _/ \`
.button {
background-color: #007bff;
color: white;
padding: 10px 20px;
}
\`;
\`\`\`

### SQL

\`\`\`javascript
const query = /_ sql _/ \`
SELECT \* FROM users
WHERE active = 1
ORDER BY created_at DESC
\`;
\`\`\`

### GraphQL

\`\`\`javascript
const gql = /_ graphql _/ \`
query GetUser($id: ID!) {
user(id: $id) {
name
email
}
}
\`;
\`\`\`

### TypeScript

\`\`\`typescript
const code = /_ typescript _/ \`
interface User {
id: number;
name: string;
}
\`;
\`\`\`

## トラブルシューティング

### ハイライトが効かない場合

1. **VS Code を再起動**

   - 拡張機能の変更後は再起動が必要な場合があります

2. **言語モードを確認**

   - ファイルが JavaScript/TypeScript として認識されているか確認
   - 右下の言語モード表示をクリックして確認

3. **コメントの書き方を確認**

   - `/* html */` のようにスペースが必要
   - `/*html*/` ではなく `/* html */` が正しい形式

4. **対応する言語識別子を確認**
   - `build/languages.js`に定義されている識別子を使用
   - 例: `html`, `css`, `sql`, `graphql`, `python` など

## ビルドとテスト

### ビルド

\`\`\`powershell
npm run build
\`\`\`

これにより以下が再生成されます：

- `syntaxes/grammar.json`: メインの文法定義
- `syntaxes/reinject-grammar.json`: 再注入用の文法定義

### テスト実行

\`\`\`powershell
npm test
\`\`\`

注: 現在、VS Code Test 環境の問題でテストが失敗する可能性があります。
手動での動作確認を推奨します。

## カスタマイズ

新しい言語を追加するには：

1. **`build/languages.js`を編集**

   ```javascript
   {
     name: 'mylang',
     language: 'mylang',
     identifiers: ['mylang', 'ml'],
     source: 'source.mylang'
   }
   ```

2. **ビルドを実行**

   ```powershell
   npm run build
   ```

3. **`package.json`の`embeddedLanguages`セクションを更新**

   ```json
   "meta.embedded.block.mylang": "mylang"
   ```

4. **拡張機能を再起動して確認**

## リファレンス

- 元のリポジトリ: https://github.com/mjbvz/vscode-comment-tagged-templates
- VS Code 拡張機能ドキュメント: https://code.visualstudio.com/api
- TextMate 文法: https://macromates.com/manual/en/language_grammars

## 動作確認チェックリスト

- [ ] ビルドが成功する (`npm run build`)
- [ ] `test-example.js`で HTML ハイライトが動作
- [ ] `test-example.js`で CSS ハイライトが動作
- [ ] `test-example.js`で SQL ハイライトが動作
- [ ] `test-example.ts`で TypeScript 内でも動作
- [ ] `test-example.ts`で GraphQL ハイライトが動作
- [ ] F5 で拡張機能開発ウィンドウが起動
- [ ] 新しいウィンドウで構文ハイライトが適用される
- [ ] JSX ファイルでも動作する
- [ ] TSX ファイルでも動作する
