import './App.css';
import Finder from "./Finder";
import AllDogs from './components/AllDogs';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
      <div id="container">
        <h1>Get ready for the Puppy Bowl!</h1>
        <div id="navbar">
          <Link to="/finder">Search Puppy</Link>
          <Link to="/alldogs">Puppy Roster</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/finder" element={<Finder />}/>
            <Route path="/alldogs" element={<AllDogs />}/>
            <Route path="/" element={<AllDogs />}/>
          </Routes>
        </div>
      </div>
  );
};

export default App
