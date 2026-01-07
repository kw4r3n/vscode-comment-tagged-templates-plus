// TypeScript版の動作確認用サンプル

// Example 1: HTML highlighting in TypeScript
const htmlTemplate: string = /* html */ `
  <div class="container">
    <h1>TypeScript Example</h1>
    <p>This should have HTML syntax highlighting in TypeScript files</p>
  </div>
`;

// Example 2: CSS with styled-components style
const buttonStyles: string = /* css */ `
  .btn {
    padding: 10px 20px;
    border-radius: 4px;
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-weight: bold;
  }
  
  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

// Example 3: GraphQL query
const gqlQuery: string = /* graphql */ `
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      posts {
        id
        title
        content
      }
    }
  }
`;

// Example 4: SQL with complex query
const complexQuery: string = /* sql */ `
  SELECT 
    u.id,
    u.name,
    COUNT(p.id) as post_count,
    MAX(p.created_at) as last_post_date
  FROM users u
  LEFT JOIN posts p ON u.id = p.user_id
  WHERE u.active = true
  GROUP BY u.id, u.name
  HAVING COUNT(p.id) > 5
  ORDER BY post_count DESC
  LIMIT 10
`;

// Example 5: Markdown documentation
const documentation: string = /* markdown */ `
# API Documentation

## Authentication

Use Bearer token in the \`Authorization\` header:

\`\`\`
Authorization: Bearer your-token-here
\`\`\`

## Endpoints

### GET /api/users
Returns a list of all users.

**Response:**
- \`200 OK\`: Success
- \`401 Unauthorized\`: Invalid token
- \`500 Internal Server Error\`: Server error
`;

// Example 6: JSON configuration
interface Config {
  raw: string;
}

const appConfig: Config = {
  raw: /* json */ `{
  "app": {
    "name": "MyApp",
    "version": "2.0.0",
    "features": {
      "darkMode": true,
      "notifications": true,
      "analytics": false
    }
  },
  "api": {
    "baseUrl": "https://api.example.com",
    "timeout": 5000
  }
}`,
};

// Example 7: Shell script
const deployScript: string = /* shell */ `
#!/bin/bash
set -e

echo "Starting deployment..."

npm install
npm run build
npm test

if [ $? -eq 0 ]; then
  echo "Tests passed! Deploying..."
  rsync -avz ./dist/ user@server:/var/www/app/
  echo "Deployment complete!"
else
  echo "Tests failed. Aborting deployment."
  exit 1
fi
`;

// Example 8: Docker configuration
const dockerfile: string = /* dockerfile */ `
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
`;

// Example 9: YAML for CI/CD
const githubActions: string = /* yaml */ `
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
`;

console.log("TypeScript examples loaded!");

export {
  htmlTemplate,
  buttonStyles,
  gqlQuery,
  complexQuery,
  documentation,
  appConfig,
  deployScript,
  dockerfile,
  githubActions,
};
