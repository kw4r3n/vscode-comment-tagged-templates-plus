# Comment Tagged Templates Plus

[English](README_EN.md) | 日本語

> **⚠️ 注意**: このプロジェクトのコードの一部は AI によって生成されています。何らかの問題が生じる可能性がありますので、使用には十分ご注意ください。

自分用にカスタマイズ中  
**このカスタマイズ版は fork 元のプロジェクトとは無関係です。**  
問題が発生した場合は私個人に連絡してください。fork 元には報告しないでください。

## 追加言語の設定

`comment-tagged-templates.additionalLanguages` でユーザー自身が識別子と言語を追加できます。

```jsonc
// settings.json
{
  "comment-tagged-templates.additionalLanguages": [
    {
      "name": "hcl",
      "language": "hcl",
      "identifiers": ["hcl", "terraform"],
      "source": "source.hcl"
    }
  ]
}
```

設定を変更した後はリロードすると反映されます。
