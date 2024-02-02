import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Home/HomePage';
import './App.css'
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
