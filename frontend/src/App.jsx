import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import SelectNumber from './components/SelectNumber';
import UserInfo from './components/UserInfo';
import Footer from './common/Footer';
import Information from './components/Information';
import  { Toaster } from "react-hot-toast";
import './App.css'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/selectNumber/:id" element={<SelectNumber />} />
          <Route path="/details/:id" element={<Information />} />
          <Route path="/userInfo" element={<UserInfo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={true} />
    </>
  )
}

export default App
