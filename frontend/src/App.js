import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld.js';
import AppBootstrap from './App.bootstrap-example.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
{/*        <Navbar />*/}
        <AppBootstrap />
  {/*      <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header> */}
  <HelloWorld colour="red" />
</div>
);
}

export default App;
