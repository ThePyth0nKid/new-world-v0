import { BrowserRouter, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
