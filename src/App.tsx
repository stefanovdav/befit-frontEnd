import './App.css';
import { Footer } from './layouts/Footer';
import { HomePage } from './pages/homePage/HomePage';
import { Navbar } from './layouts/Navbar';
import { SignIn } from './pages/signInPage/SignIn';
import { Route, Routes, Navigate } from "react-router-dom";
import { MainPage } from './pages/mainPage/MainPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/mainPage" element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
