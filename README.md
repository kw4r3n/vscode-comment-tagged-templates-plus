# Comment Tagged Templates Plus

[English](README_EN.md) | 日本語

> **⚠️ 注意**: このプロジェクトのコードの一部は AI によって生成されています。何らかの問題が生じる可能性がありますので、使用には十分ご注意ください。

自分用にカスタマイズ中  
**このカスタマイズ版は fork 元のプロジェクトとは無関係です。**  
問題が発生した場合は私個人に連絡してください。fork 元には報告しないでください。

## 追加言語の設定

標準で 56 言語（HCL, TOML 含む）をサポートしていますが、`comment-tagged-templates.additionalLanguages` でユーザー自身がさらに言語を追加することも可能です。

例：Terraform の tfvars ファイルを追加する場合

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

設定を変更した後はリロードすると反映されます。
