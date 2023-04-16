import './App.css';
import AllDogs from './components/AllDogs';
import SingleDog from './components/SingleDog';
import NewDogForm from './components/NewDogForm';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
      <div id="App">
          <div id='navBar'>
            <h1>Welcome to the Puppy Bowl!</h1>
            <nav>
              <Link to="/AllDogs">ALL Players</Link>
              <Link to="/">Join Team</Link>
            </nav>
          </div>
          <div id='mainContent'>
            <Routes>
              <Route path="/AllDogs" element={<AllDogs />} />
              <Route path="/:dogId" element={<SingleDog />} />
              <Route path="/" element={<NewDogForm />} />
            </Routes>
          </div>
      </div>
  );
};

export default App
