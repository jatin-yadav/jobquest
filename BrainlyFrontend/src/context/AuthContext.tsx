import { createContext, useContext, useState, ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface AuthContextType {
    user: unknown;
    setUser: React.Dispatch<React.SetStateAction<null>>
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const RequireAuth = () => {
    const auth = useAuth();
    const user = auth?.user;
    const location = useLocation();
    if (!user) {
        return (
            <Navigate
                to="/unauthorized"
                state={{ from: location }}
                replace
            />
        );
    }
    return <Outlet />;
};