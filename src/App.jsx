import './App.css';
import AllDogs from './components/AllDogs';
import SingleDog from './components/SingleDog';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
        </nav>
          <Routes>
            <Route path="/" element={<AllDogs />} />
            <Route path="/:dogId" element={<SingleDog />} />
          </Routes>
      </div>
  );
};

export default App
