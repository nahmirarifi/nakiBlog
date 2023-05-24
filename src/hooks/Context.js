import { createContext, useState, useContext } from "react";

// Context creation funct
const ContextApp = createContext()

const AppContextProvider = ({ children }) => {
    // theme mode state
    const [dark, setDark] = useState(false)
    // User profile state
    const [user, setUser] = useState(null)
    // User token state
    const [token, setToken] = useState('')
    // User logged in or not state
    const [isLogged, setIsLogged] = useState(null)
    // User app language state
    const [language, setLanguage] = useState('en')

    // context values
    const contextValue = {
        dark, setDark,
        user, setUser,
        token, setToken,
        isLogged, setIsLogged,
        language, setLanguage
    }


    return (
        <ContextApp.Provider value={contextValue}>
            {children}
        </ContextApp.Provider>
    )
}

export const AppContext = () => useContext(ContextApp)
export default AppContextProvider;