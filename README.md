# Comment Tagged Templates Plus

JavaScript や TypeScript のテンプレート文字列に、コメントで言語を指定することで構文ハイライトを追加する VS Code 拡張機能です。

## 🌟 特徴

- **72 言語に対応**: HTML, CSS, SQL, GraphQL, Python, その他多数
- **簡単な使用法**: `/* 言語名 */` とコメントするだけ
- **TypeScript 完全対応**: 型安全性を保ちながら使用可能
- **軽量**: 追加のランタイム依存なし

## 📖 使い方

テンプレート文字列の前にコメントで言語を指定するだけです：

```javascript
const html = /* html */ `
  <div class="container">
    <h1>Hello World</h1>
  </div>
`;

const styles = /* css */ `
  .button {
    background-color: #007bff;
    color: white;
  }
`;

const query = /* sql */ `
  SELECT * FROM users WHERE active = 1
`;
```

## 🚀 動作確認

詳細な動作確認手順は [`動作確認.md`](./動作確認.md) または [`TESTING.md`](./TESTING.md) を参照してください。

### クイックスタート

1. **F5 キー**を押して拡張機能開発ウィンドウを開く
2. `test-example.js` または `test-example.ts` を開く
3. 構文ハイライトを確認 ✨

## 🔗 リンク

- **元のリポジトリ**: [mjbvz/vscode-comment-tagged-templates](https://github.com/mjbvz/vscode-comment-tagged-templates)
- **カスタマイズ版**: 自分用にカスタマイズ中

## 📝 対応言語

HTML, CSS, SCSS, LESS, JavaScript, TypeScript, Python, Java, C, C++, C#, F#, Go, Rust, Scala, Ruby, PHP, Perl, Lua, Dart, JSON, YAML, SQL, GraphQL, SPARQL, EdgeQL, Cypher, Bash, PowerShell, Markdown, Dockerfile, その他多数...

全リストは [`build/languages.js`](./build/languages.js) を参照。
