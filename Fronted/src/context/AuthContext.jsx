import React from 'react';

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = React.useState(false);
    const [token, setToken] = React.useState("");
    const [username, setUsername] = React.useState("");

    const handleLogin = (isAuth, token, username) => {
        setIsAuth(isAuth);
        setToken(token);
        setUsername(username);
    }

    const value = { isAuth, token, username, handleLogin };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}