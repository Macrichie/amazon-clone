import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./pages/checkout/Checkout";
import Login from "./pages/login/Login";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebase-config/firebase";



function App() {
  //add the data layer
  const [{ user }, dispatch] = useStateValue();

  // useEffect for mounting and update rendering, runs based on given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // handle any cleanup here
    return () => {
      // any cleanup action/logic comes in here...
      unsubscribe();
    }

  }, []);

  console.log("USER IS >>> ", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
