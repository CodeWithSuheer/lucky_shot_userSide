import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import SelectNumber from './components/SelectNumber';
import UserInfo from './components/UserInfo';
import './App.css'
import Footer from "./common/Footer";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/selectNumber/:id" element={<SelectNumber />} />
          <Route path="/userInfo" element={<UserInfo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
