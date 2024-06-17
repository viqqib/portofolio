import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Header/Navbar';


function App() {
  return (
    <div className="text-primary bg-bgcolor">
        <Navbar />
        <Home />
        <About />
        {/* <Header />
        <Home />
        <About /> */}
    </div>
  );
}

export default App;
