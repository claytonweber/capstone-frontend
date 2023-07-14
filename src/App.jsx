import { useState, useEffect } from 'react';
import './App.css';
import AllBooks from './components/AllBooks';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <>
      <div>Capstone</div>
      <Routes>
        <Route path='/' element={<AllBooks />} />
      </Routes>
    </>
  )
}

export default App;
