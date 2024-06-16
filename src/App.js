import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="ReactApp" menu1="Home" menu2="About"  />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App;
