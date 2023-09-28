// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState("light");
  const [modetext, setmodetext] = useState("dark");
  const [alert, setalert] = useState(null);

  const ShowAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      setmodetext("light");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      ShowAlert("Dark mode has been enabled", "success");
    }
    else {
      setmode("light");
      setmodetext("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      ShowAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} modetext={modetext} /> {/* sending props to my Navbar components  */}
      <Alert alert={alert} />
      <div className="container my-5">
        <Outlet>
          <TextForm/>
          <About />
        </Outlet>
      </div>
    </>
  );
}

export default App;