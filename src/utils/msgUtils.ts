import { WebviewPanel } from 'vscode'
import { CommonMessage, Message, RouteMessage } from './msgDefine'

const postMsg = (panel: WebviewPanel, msg: Message) => {
    panel.webview.postMessage(msg)
}

export const navigateTo = (panel: WebviewPanel, path: string) => {
    postMsg(panel, {
        type: 'ROUTE',
        path,
    } as RouteMessage)
}

export const postCommonMsg = (panel: WebviewPanel, payload: string) => {
    postMsg(panel, {
        type: 'COMMON',
        payload: payload,
    } as CommonMessage)
}
