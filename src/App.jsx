import './App.css';
import AllDogs from './components/AllDogs';
import SingleDog from './components/SingleDog';
import NewDogForm from './components/NewDogForm';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
      <div className="App">
        <nav>
          <Link style={{}} to="/">Home</Link>
          {/* <br></br> */}
          <Link to="/NewDogForm">ADD DOG</Link>
        </nav>
          <Routes>
            <Route path="/" element={<AllDogs />} />
            <Route path="/:dogId" element={<SingleDog />} />
            <Route path="/NewDogForm" element={<NewDogForm />} />
          </Routes>
      </div>
  );
};

export default App
