/* import { useState, useEffect } from 'react'; */
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  // This is a quick reference on how to use the back-end
  /* const [currentTime, setCurrentTime] = useState(0);
  const [currentDate, setCurrentDate] = useState(0);
  useEffect(() => {
  fetch('http://127.0.0.1:8000/').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
      setCurrentDate(data.date)
    });
  }, []); */
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
