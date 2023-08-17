import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavLinks from './shared/Nevigation/NavLinks';
import Details from './Details/Details';
/* import Home from './pages/Home';
 */
import MainPage from './Home/page/MainPage';
import Projects from './Projects/ProjectList';
import ContactMe from './ContactMe/ContactMe';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavLinks className="navbar-expand" /> {/* Add the className here */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>

        <Details />
      </Router>
    </div>
  );
}

export default App;
