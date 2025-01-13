import React, { createContext, useContext, useState, ReactNode } from 'react';
interface AuthContextType {
    isAuthenticated: boolean;
    token?: string | null
    login: () => void;
    logout: () => void;
    addToken?: (tokenValue: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// PROVIDER
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);
    const addToken = (tokenValue: string) => setToken(tokenValue);


    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, token, addToken }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
