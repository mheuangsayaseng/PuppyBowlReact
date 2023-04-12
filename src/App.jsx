import './App.css';
import Finder from "./Finder";
import Roster from "./Roster";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App
