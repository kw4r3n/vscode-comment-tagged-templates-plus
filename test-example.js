// このファイルは拡張機能の動作確認用サンプルです

// Example 1: HTML highlighting
const html1 = /* html */ `
  <div class="container">
    <h1>Hello World</h1>
    <p>This should have HTML syntax highlighting</p>
  </div>
`;

// Example 2: CSS highlighting
const styles = /* css */ `
  .container {
    display: flex;
    justify-content: center;
    background-color: #f0f0f0;
  }
`;

// Example 3: SQL highlighting
const query = /* sql */ `
  SELECT id, name, email
  FROM users
  WHERE active = 1
  ORDER BY created_at DESC
`;

// Example 4: JSON highlighting
const config = /* json */ `
{
  "name": "test",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0"
  }
}
`;

// Example 5: Python highlighting
const pythonCode = /* python */ `
def hello(name):
    print(f"Hello, {name}!")
    return True
`;

// Example 6: TypeScript highlighting
const tsCode = /* typescript */ `
interface User {
  id: number;
  name: string;
  email?: string;
}

function getUser(id: number): User {
  return { id, name: "Test User" };
}
`;

// Example 7: Markdown highlighting
const markdown = /* markdown */ `
# Title

This is a **markdown** document with _formatting_.

- Item 1
- Item 2
- Item 3
`;

// Example 8: YAML highlighting
const yamlConfig = /* yaml */ `
version: '3.8'
services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
`;

console.log('All examples loaded successfully!');
