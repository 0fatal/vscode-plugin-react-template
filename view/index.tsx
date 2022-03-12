import React, { useCallback, useEffect, useState } from 'react'
import { render } from 'react-dom'
import { MemoryRouter, useNavigate, useRoutes } from 'react-router-dom'
import { CommonMessage, Message, RouteMessage } from '../src/utils/msgDefine'
import { MessagesContext } from './context/MessageContext'

import './index.css'
import { routes } from './routes'

function App() {
    const [messagesFromExtension, setMessagesFromExtension] = useState<
        string[]
    >([])
    const navigate = useNavigate()

    const handleMessagesFromExtension = useCallback(
        (event: MessageEvent<Message>) => {
            console.log(event)
            if (event.data.type === 'ROUTE') {
                const routeMsg = event.data as RouteMessage
                navigate(routeMsg.path, { replace: true })
                return
            }
            if (event.type === 'COMMON') {
                const commonMsg = event.data as CommonMessage
                setMessagesFromExtension([
                    ...messagesFromExtension,
                    commonMsg.payload,
                ])
                return
            }
        },
        [messagesFromExtension]
    )

    useEffect(() => {
        window.addEventListener('message', handleMessagesFromExtension)
        return () => {
            window.removeEventListener('message', handleMessagesFromExtension)
        }
    }, [handleMessagesFromExtension])

    const routeTree = useRoutes(routes)

    return (
        <MessagesContext.Provider value={messagesFromExtension}>
            {routeTree}
        </MessagesContext.Provider>
    )
}

render(
    <MemoryRouter initialEntries={['/home', '/about']} initialIndex={0}>
        <App />
    </MemoryRouter>,
    document.getElementById('root')
)
