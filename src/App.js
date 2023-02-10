import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';
import SmoothScrollbar from './components/SmoothScrollbar';
import {HashRouter} from 'react-router-dom';

export default function App() {
  return (
      <HashRouter>     
      <NavMenu />
      <SmoothScrollbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <Footer />
          </SmoothScrollbar>
      </HashRouter>
  );
};