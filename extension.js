// @ts-check

const vscode = require('vscode');
const { languages: builtInLanguages } = require('./build/languages');
const { updateGrammars } = require('./build/generateGrammar');
const { updateEmbedded } = require('./build/generateEmbedded');

/**
 * @param {unknown} raw
 */
function sanitizeLanguage(raw) {
    if (!raw || typeof raw !== 'object') {
        return undefined;
    }
    const entry = /** @type {Record<string, unknown>} */ (raw);
    const name = typeof entry.name === 'string' ? entry.name.trim() : '';
    const language = typeof entry.language === 'string' ? entry.language.trim() : undefined;
    const identifiers = Array.isArray(entry.identifiers)
        ? entry.identifiers
            .map(value => typeof value === 'string' ? value.trim() : '')
            .filter(Boolean)
        : [];

    let source;
    if (typeof entry.source === 'string') {
        source = entry.source.trim();
    } else if (Array.isArray(entry.source)) {
        source = entry.source
            .map(value => typeof value === 'string' ? value.trim() : '')
            .filter(Boolean);
        if (source.length === 0) {
            source = undefined;
        }
    }

    if (!name || identifiers.length === 0) {
        return undefined;
    }

    return {
        name,
        language,
        identifiers,
        source,
    };
}

/**
 * @param {readonly any[]} customLanguages
 */
function mergeLanguages(customLanguages) {
    const merged = new Map(builtInLanguages.map(lang => [lang.name, { ...lang, identifiers: [...lang.identifiers] }]));

    for (const raw of customLanguages) {
        const language = sanitizeLanguage(raw);
        if (!language) {
            continue;
        }
        const existing = merged.get(language.name);
        if (existing) {
            const identifiers = Array.from(new Set([...existing.identifiers, ...language.identifiers]));
            merged.set(language.name, { ...existing, ...language, identifiers });
            continue;
        }

        if (!language.source) {
            continue;
        }

        merged.set(language.name, language);
    }

    return Array.from(merged.values());
}

function applyConfiguration() {
    const configuration = vscode.workspace.getConfiguration('comment-tagged-templates');
    const customLanguages = configuration.get('additionalLanguages');
    const mergedLanguages = Array.isArray(customLanguages)
        ? mergeLanguages(customLanguages)
        : builtInLanguages;

    const signature = JSON.stringify(mergedLanguages);
    const hasCustomLanguages = signature !== JSON.stringify(builtInLanguages);
    updateGrammars(mergedLanguages);
    updateEmbedded(mergedLanguages);
    return { hasCustomLanguages, signature };
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let signature = context.globalState.get('comment-tagged-templates.languagesSignature');

    const updateAndPrompt = () => {
        try {
            const result = applyConfiguration();
            const configurationChanged = result.signature !== signature;
            if (configurationChanged) {
                signature = result.signature;
                context.globalState.update('comment-tagged-templates.languagesSignature', signature);
            }

            if (!result.hasCustomLanguages || !configurationChanged) {
                return;
            }

            vscode.window.showInformationMessage(
                'Comment tagged template languages were updated. Reload to apply changes?',
                'Reload')
                .then(selection => {
                    if (selection === 'Reload') {
                        vscode.commands.executeCommand('workbench.action.reloadWindow');
                    }
                });
        } catch (error) {
            console.error(error);
            vscode.window.showErrorMessage('Failed to update custom languages for comment tagged templates.');
        }
    };

    updateAndPrompt();

    context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration(event => {
            if (event.affectsConfiguration('comment-tagged-templates.additionalLanguages')) {
                updateAndPrompt();
            }
        })
    );
}

function deactivate() {
    // Nothing to clean up.
}

module.exports = {
    activate,
    deactivate
};
