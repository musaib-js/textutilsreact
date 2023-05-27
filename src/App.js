import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Generate from "./components/Generate";
import WordSearch from "./components/WordSearch";

function App() {
  const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API

  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("Enable Light Mode");
      document.body.style.backgroundColor = "#41464b";
      document.body.style.color = "white";
      showAlert("Success", "Dark Mode Has Been Enabled");
    } else {
      setMode("light");
      setBtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Success", "Light Mode Has Been Enabled");
    }
  };
  return (
    <Router>
      <div className="App">
        <Navbar mode={mode} toggleMode={toggleMode} button={btnText} />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Form heading="Enter Your Text Here" showAlert={showAlert} />
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/translate"element={<Generate apiKey = {apiKey} />}></Route>
          <Route exact path="/searchword"element={<WordSearch apiKey = {apiKey} />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
