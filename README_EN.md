# Comment Tagged Templates Plus

A VSCode extension that provides syntax highlighting for tagged template strings using comments to specify language.

> **⚠️ Warning**: Parts of this project's code may be AI-generated. Please be aware that issues may occur during use.

**This is a customized fork** - Please use the original fork if you prefer.  
**This customization is NOT affiliated with the original project.**  
If you encounter any issues, please contact me directly. Do not report them to the original project.

## Features

- **54+ Built-in Languages**: Supports popular languages like SQL, HTML, CSS, Python, GraphQL, and many more out of the box
- **Custom Language Support**: Easily add your own custom languages through VSCode settings
- **Comment-based Language Tags**: Use simple comment syntax to specify the embedded language
- **Zero Configuration**: Works immediately with built-in languages

## Usage

Simply add a comment before your template literal to enable syntax highlighting:

```javascript
// Built-in language examples
const sqlQuery = /* sql */ `
    SELECT * FROM users WHERE id = 1;
`;

const htmlCode = /* html */ `
    <div class="container">
        <h1>Hello World</h1>
    </div>
`;

const pythonCode = /* python */ `
    def hello():
        return 'Hello, World!'
`;
```

## Adding Custom Languages

The extension comes with 56 built-in languages (including HCL and TOML), but you can add more using the `comment-tagged-templates.additionalLanguages` setting.

Example: Adding support for `tfvars` files

```jsonc
// settings.json
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

### Configuration Options

- **`name`** (required): Unique internal name for the language
- **`language`**: VSCode language ID for syntax highlighting
- **`identifiers`** (required): Array of strings used in comments to identify the language
- **`source`**: TextMate scope name (e.g., `source.hcl`)

**Note**: To use custom languages, make sure the corresponding language extension is installed in VSCode.

After adding the configuration, reload VSCode to apply the changes.

## Built-in Supported Languages

The extension includes 54 built-in languages:

- **Web**: HTML, CSS, SCSS, LESS, MJML
- **Data**: JSON, YAML, TOML, XML, SQL, GraphQL, SPARQL
- **Programming**: JavaScript, TypeScript, Python, Go, Rust, Java, C/C++, C#, F#, Dart, Scala
- **Shell**: Bash, PowerShell, Batch
- **Markup**: Markdown, Pug
- **And many more**: Dockerfile, Ruby, Perl, Lua, R, Clojure, etc.

See [build/languages.js](build/languages.js) for the complete list.

## Installation

See [INSTALL.md](INSTALL.md) for detailed installation instructions.

## Testing

See [TESTING.md](TESTING.md) for testing instructions and troubleshooting.

## Requirements

- VSCode 1.20.0 or higher
- For custom languages: Install the corresponding language extension

## License

MIT License
