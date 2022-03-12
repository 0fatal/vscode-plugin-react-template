import Home from '../pages/Home'
import { RouteObject } from 'react-router-dom'
import React from 'react'
import About from '../pages/About'

export const routes: RouteObject[] = [
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
]
