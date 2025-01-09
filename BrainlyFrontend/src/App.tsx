import Dashboard from "./pages/Dashboard";
import SharedBrain from "./pages/SharedBrain";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/share/:id" element={<SharedBrain />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          {/* <Dashboard /> */}
          {/* <Signin /> */}
          {/* <Signup /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
