// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Week01Layout from './pages/Week01/Week01Layout'
import ButtonPage from './pages/Week01/ButtonPage'
import FormPage from './pages/Week01/FormPage'
import TextFieldPage from './pages/Week01/TextFieldPage'

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* 홈페이지 */}
                <Route path="/" element={<HomePage />} />
                {/* Week01 관련 라우트 */}
                <Route path="/week01" element={<Week01Layout />}>
                    <Route path="button" element={<ButtonPage />} />
                    <Route path="form" element={<FormPage />} />
                    <Route path="textfield" element={<TextFieldPage />} />
                </Route>
                {/* Week02 관련 라우트 */}
                {/* <Route path="/week02" element={<Week02Layout />}>
                    <Route path="card" element={<CardPage />} />
                    <Route path="modal" element={<ModalPage />} />
                </Route> */}
            </Routes>
        </Router>
    )
}

export default App
