// type Message = import('../src/utils/msgDefine').Message

import { Message } from '../src/utils/msgDefine'

type VSCode = {
    postMessage<T extends Message = Message>(message: T): void
    getState(): any
    setState(state: any): void
}

declare const vscode: VSCode

declare const apiBaseUrl: string
