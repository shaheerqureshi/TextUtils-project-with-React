import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <NavBar title="TextUtils" about="About TextUtils" />

    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" />
    

    </div>

    </>
  );
}

export default App;
