自分用にカスタマイズ中
fork元をつかってね

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
