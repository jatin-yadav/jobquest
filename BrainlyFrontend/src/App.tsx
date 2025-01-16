import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import SharedBrain from "./pages/SharedBrain";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./utils/ProtectedRoutes";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>} />
            <Route path="/share/:id" element={<SharedBrain />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
