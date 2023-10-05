import './App.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState('light');

  const togglemode = () =>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white'

      
    }else{
      setMode('light')
      document.body.style.backgroundColor = '#f8f9fa'
      document.body.style.color = 'black'
    }
  }
  return (
    <>
    <NavBar title="TextUtils" about="About TextUtils" mode={mode} togglemode={togglemode} />

    <div className="container my-3">
    {<TextForm heading="Enter the text to analyze below" /> }
    {/* <About/> */}
    

    </div>

    </>
  );
}

export default App;
