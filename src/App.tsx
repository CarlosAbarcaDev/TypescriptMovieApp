import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";

import { getStorageSync } from "./Services";
import NavbarComponent from "./Components/Navbar";
import Login from "./Views/Login";
import Home from "./Views/Home";
import Details from "./Views/Details";
import Favorites from "./Views/Favorites";
import Search from "./Views/Search";

function App() {
  //login auth
  const [logged, setLogged] = useState<boolean>(false);
  useEffect(() => {
    const userToken = getStorageSync("user-token");
    if (userToken) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  return (
    <div className="App">
      {logged ? (
        <>
        <NavbarComponent />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/favorite-list"} component={Favorites} />
          <Route exact path={"/movies/:id"} component={Details} />
          <Route exact path={"/movies/search/:search"} component={Search} />

          <Redirect to={"/"} />
        </Switch>
        </>
      ) : (
        <Switch>
          <Route exact path={"/login"} component={Login} />
          <Redirect to={"/login"} />
        </Switch>
      )}
    </div>
  );
}

export default App;
