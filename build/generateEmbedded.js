// @ts-check

const fs = require('fs');
const path = require('path');
const { languages: defaultLanguages } = require('./languages');

const getEmbedded = (languages = defaultLanguages) => {
    return languages.reduce((out, language) => {
        out[`meta.embedded.block.${language.name}`] = language.language;
        return out;
    }, {});
};

exports.getEmbedded = getEmbedded;

exports.updateEmbedded = (languages = defaultLanguages) => {
    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    const json = JSON.parse(fs.readFileSync(packageJsonPath).toString());
    json.contributes.grammars[0].embeddedLanguages = getEmbedded(languages);
    fs.writeFileSync(packageJsonPath, JSON.stringify(json, null, 4));
};
