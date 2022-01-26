import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const AppContext = createContext()
export default function AppProvider({ children }) {
    const navigation = useNavigate()
    return (
        <AppContext.Provider value={{ navigation }}>
            {children}
        </AppContext.Provider>
    )
}