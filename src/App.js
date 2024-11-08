// import logo from './logo.svg';
import "./App.css";
import Aboutt from './components/Aboutt';
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  // Link,
  // useRouteMatch,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //it tells whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark"); //can't use this.mode = 'dark' as it is not a class.
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element:  <TextForm showAlert={showAlert} heading="Enter the text to analyze below :" mode={mode} />,

    },
    {
      path: "/about",
      element: <Aboutt />
    }
  ]);

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Textutils"
          aboutus="AboutTextutils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alerts alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try Textutils - Word Counter, Character Counter, Clear text"
                  mode={mode}
                />
              }
            />
            <Route 
            path="/about"
            element={<Aboutt mode={mode} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
