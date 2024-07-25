import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#00063e'
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode';
    }
  }
  const toggleModeRed = () => {
    if (mode === 'light' || mode === 'dark') {
      setMode('dark')
      document.body.style.backgroundColor = '#5d0303'
      showAlert("Red Dark mode has been enabled", "success")
      document.title = 'TextUtils - Red Dark Mode';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode';
    }
  }
  const toggleModeYellow = () => {
    if (mode === 'light' || mode === 'dark') {
      setMode('dark')
      document.body.style.backgroundColor = '#554001'
      showAlert("Yellow Dark mode has been enabled", "success")
      document.title = 'TextUtils - Yellow Dark Mode';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode';
    }
  }
  const toggleModeGreen = () => {
    if (mode === 'light' || mode === 'dark') {
      setMode('dark')
      document.body.style.backgroundColor = '#024d2a'
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Green Dark Mode';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModeRed={toggleModeRed} toggleModeYellow={toggleModeYellow} toggleModeGreen={toggleModeGreen} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
