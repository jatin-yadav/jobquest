import { AuthProvider } from "./context/AuthContext";
import BrainDashboard from "./pages/BrainDashboard";
import SharedBrain from "./pages/SharedBrain";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./utils/ProtectedRoutes";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Questions from "./pages/Questions";
import QuestionnaireDashboard from "./pages/QuestionnaireDashboard";

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/braindashboard" element={
              <ProtectedRoute>
                <BrainDashboard />
              </ProtectedRoute>} />
            <Route path="/questionnairedashboard" element={
              <ProtectedRoute>
                <QuestionnaireDashboard />
              </ProtectedRoute>} />
            <Route path="/share/:id" element={<SharedBrain />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
