import React, { Component } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
// import { Router, Route } from 'react-router';
import logo from './logo.svg';
import './App.css';

const Page = ({ title }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
    </div>
    <p className="App-intro">This is the {title} page.</p>
    <p>
      <NavLink to="/">Home</NavLink>
    </p>
    <p>
      <NavLink to="/about">About</NavLink>
    </p>
    <p>
      <NavLink to="/settings">Settings</NavLink>
    </p>
  </div>
);

const Home = props => <Page title="Home" />;

const About = props => <Page title="About" />;

const Settings = props => <Page title="Settings" />;

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    );
  }
}

export default App;
