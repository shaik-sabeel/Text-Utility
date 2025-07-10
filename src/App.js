import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // 'light' or 'dark'
  const [alerts, setAlerts] = useState(null);

  const showAlert = (message,type) =>{
    setAlerts({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlerts(null);
    }, 3000);
  }

  const toggleMode =() =>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743'
    showAlert("Dark mode has been enabled", "success");
  }
  else{
    setMode('light');
   document.body.style.backgroundColor ='white';
   showAlert("Light mode has been enabled", "success");
  }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode= {mode} toggle ={toggleMode} />
      <Alert alerts = {alerts}/>
      <div className="container">

          <Routes>
            <Route path="/about" element={<About mode={mode} />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      
    </Router>
    </>
  );
}

export default App;