import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { getStorageSync } from "./Services";
import NavbarComponent from "./Components/Navbar";
import Login from "./Views/Login";
import Home from "./Views/Home";
function App() {
  //login auth
  const [logged, setLogged] = useState<boolean>(false);
  useEffect(() => {
    const userToken = getStorageSync("user-token");
    console.log(userToken);
    if (userToken) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  return (
    <div className="App">
      {logged ? (
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
