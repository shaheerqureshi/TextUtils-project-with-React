import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1000);
  }

  const togglemode = () =>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white'
      showAlert('Dark Mode has been enabled', 'success')

      
    }else{
      setMode('light')
      document.body.style.backgroundColor = '#f8f9fa'
      document.body.style.color = 'black'
      showAlert('Light Mode has been enabled', 'success')
    }
  }
  return (
    <>
    
    
    <Alert alert={alert}/>
    <Router>
      <NavBar title="TextUtils" about="About TextUtils" mode={mode} togglemode={togglemode} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert}/>}/>
        </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
