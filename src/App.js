import './App.css';
import Home from './components/Home';
import NavbarComp from './components/NavbarComp';
import { Routes, Route } from 'react-router-dom';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import MiniTv from './components/MiniTv';
import Notfound from './components/Notfound';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/minitv" element={<MiniTv />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
