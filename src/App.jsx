import React from "react"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"
import DashBoard from "../components/DashBoard"
import ProtectedRoute from "../services/ProtectedRoute"

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/signup" />} />

                <Route path="/signup" element={<SignUp/>} />
                <Route path="/signin" element={<SignIn/>} />

                <Route path="/" element={<ProtectedRoute/>}>
                    <Route path="/dashboard" element={<DashBoard/>} />
                </Route>

                <Route path="*" element={<Navigate to="/signup" />} replace />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
