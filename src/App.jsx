import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Finder from "./Finder";
import Roster from "./Roster";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    {/* <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div id="container">
        <h1>Get ready for the Puppy Bowl!</h1>
        <div id="navbar">
          <Link to="/finder">Search Puppy</Link>
          <Link to="/roster">Puppy Roster</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/finder" element={<Finder />}/>
            <Route path="/roster" element={<Roster />}/>
            <Route path="/" element={<Finder />}/>
          </Routes>
        </div>
      </div>
    {/* </div> */}
    </BrowserRouter>
  );
};

export default App
