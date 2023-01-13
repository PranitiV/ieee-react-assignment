import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Contact from './components/Contact'
//import Home from './components/Home';
import Intro from './components/Intro';
//import Message from './components/Message';
import Message from './components/Message2';

function App() {
  console.log('here')
  return (
    <div>
      <div>Hello! Welcome to Praniti's Home Page</div>
      <div>Please select your action:</div>
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/intro">1. Introduction</Link>
            </li>
            <li>
              <Link to="/contact">2. My contact</Link>
            </li>
            <li>
              <Link to="/message">3. Message</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path='/intro' element={< Intro page="my introduction" />}></Route>
            <Route exact path='/contact' element={< Contact page="my contact" />}></Route>
            <Route exact path='/message' element={< Message page="message" />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
