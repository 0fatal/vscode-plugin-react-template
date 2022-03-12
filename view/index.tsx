import React, { useCallback, useEffect, useState } from 'react'
import { render } from 'react-dom'
import { MemoryRouter, useNavigate, useRoutes } from 'react-router-dom'
import { MessagesContext } from './context/MessageContext'

import './index.css'
import { routes } from './routes'

function App() {
    const [messagesFromExtension, setMessagesFromExtension] = useState<
        string[]
    >([])

    const handleMessagesFromExtension = useCallback(
        (event) => {
            setMessagesFromExtension([...messagesFromExtension, event.data])
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

    const navigate = useNavigate()
    navigate('/about', { replace: true })

    return (
        <MessagesContext.Provider value={messagesFromExtension}>
            {routeTree}
        </MessagesContext.Provider>
    )
}

render(
    <MemoryRouter initialEntries={['/home', '/about']}>
        <App />
    </MemoryRouter>,
    document.getElementById('root')
)
