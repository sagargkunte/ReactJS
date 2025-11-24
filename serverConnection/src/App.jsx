// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// function App() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     axios.get('/api/message') // If using Vite proxy
//       .then(response => {
//         setMessage(response.data.message);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>React + Axios + Express</h1>
//       <p>Server says: {message}</p>
//     </div>
//   );
// }


function App() {
  return (
    <div>
    <nav>
  
        <h3>Nav Bar</h3>
        {/* <div>
          <a href="/">Home Page</a>
          <a href="/about">About page</a>
          <a href="/contact">Contact Page</a>
        </div> */}

   <Link to={'/'}>Home</Link>     {/* Here you will notice that there is no reloading  */}
    <Link to={'/about'}>About</Link>

    <Link to={'/contact'}>Contact</Link>

    </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App;
