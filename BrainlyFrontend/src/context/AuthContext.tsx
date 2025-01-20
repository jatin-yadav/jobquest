import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
interface AuthContextType {
    isAuthenticated: boolean;
    token?: string | null
    currentDashboard?: string | null
    login: () => void;
    logout: () => void;
    addToken: (tokenValue: string) => void;
    addcurrentDashboard: (tokenValue: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// PROVIDER
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null)
    const [currentDashboard, setCurrentDashboard] = useState<string | null>('braindashboard')
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
    }
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.setItem('isAuthenticated', 'false');
    }

    const addToken = (tokenValue: string) => {
        setToken(tokenValue);
        localStorage.setItem('JWT', `${tokenValue}`);
    }

    const addcurrentDashboard = (dashboard: string) => {
        setCurrentDashboard(dashboard);
        localStorage.setItem('dashboard', `${dashboard}`);
    }

    useEffect(() => {
        const storedAuthState = localStorage.getItem('isAuthenticated');
        const storedToken = localStorage.getItem("JWT")
        if (storedAuthState === 'true') {
            const storedDashboard = localStorage.getItem("dashboard")
            setCurrentDashboard(storedDashboard)
            setIsAuthenticated(true);
            setToken(storedToken)
        }
        setLoading(false);
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Optional: Replace with a loading spinner or skeleton screen
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, token, addToken, currentDashboard, addcurrentDashboard }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
