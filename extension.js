
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "flutter-mobx-snippets" is now active!');
	let disposable = vscode.commands.registerCommand('flutter-mobx-snippets.helloWorld', function () {
		
		vscode.window.showInformationMessage('Hello World from Flutter MobX Snippets!');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
