import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import SelectNumber from './components/SelectNumber';
import UserInfo from './components/UserInfo';
import Footer from './common/Footer';
import Information from './components/Information';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/selectNumber/:id" element={<SelectNumber />} />
          <Route path="/userInfo" element={<UserInfo />} />
          <Route path="/Information" element={<Information />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
