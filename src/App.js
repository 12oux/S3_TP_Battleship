
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Landing from './pages/Landing.js';
import APropos from './pages/aPropos.js';
import Login from './pages/login.js';
import Jeu from './Game.js';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div>Mon menu</div>
      <Routes>
        <Route path="/aPropos" element={<APropos />} /> 
        <Route path="/landing" element={<Landing />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} /> 
        <Route path="/jeu" element={<Jeu />} /> 


      </Routes>
    </BrowserRouter>
  )}

export default App;
