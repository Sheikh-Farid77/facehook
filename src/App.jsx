import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import RegistrationPage from "./pages/RegistrationPage"
import NotFoundPage from "./pages/NotFoundPage"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/me" element={<ProfilePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
