export type MessageType = 'ROUTE' | 'COMMON'

export interface Message {
    type: MessageType
    payload: any
}

export interface RouteMessage extends Message {
    type: 'ROUTE'
    path: string
}

export interface CommonMessage extends Message {
    type: 'COMMON'
    payload: string
}
