// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { PreviewPanel } from './panel/PreviewPanel'
// import { PreviewPanel } from './panel/PreviewPanel'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage('11')
    vscode.commands.registerCommand(
        'vscode-plugin-react-template.helloWorld',
        () => {
            console.log(111)
        }
    )
    PreviewPanel.createOrShow(context.extensionUri, 'template')
}

// this method is called when your extension is deactivated
export function deactivate() {}
