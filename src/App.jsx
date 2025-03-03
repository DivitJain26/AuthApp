import React from "react"
import {HashRouter, Routes, Route, Navigate} from "react-router-dom"

import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"
import DashBoard from "../components/DashBoard"
import ProtectedRoute from "../services/ProtectedRoute"

function App() {
  return (
    <>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/signup" />} />

                <Route path="/signup" element={<SignUp/>} />
                <Route path="/signin" element={<SignIn/>} />

                <Route path="/dashboard" element={<ProtectedRoute><DashBoard /></ProtectedRoute>} />

                <Route path="*" element={<Navigate to="/signup" />} replace />
            </Routes>
        </HashRouter>
    </>
  )
}

export default App
