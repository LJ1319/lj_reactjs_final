import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

import AuthContext from "./context/AuthContext";

import { getUserSessionToken } from "./services/auth";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Registration from "./pages/sign-up/Registration";
import Rooms from "./pages/rooms/Rooms";
import SingleRoom from "./pages/single-room/SingleRoom";
import Profile from "./pages/profile/Profile";
import CartContainer from "./pages/cart/CartContainer";
import Error from "./pages/not-found/Error";

import PrivateRoute from "./components/private-route/PrivateRoute";

import "./App.css";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (getUserSessionToken()) {
      setAuthed(true);
    }
  }, []);

  const initialAuthContext = {
    authed,
    logOut() {
      setTimeout(() => {
        setAuthed(false);
      }, 1000);
    },
    logIn() {
      setTimeout(() => {
        setAuthed(true);
      }, 1000);
    },
  };
  return (
    <Provider store={store}>
      <AuthContext.Provider value={initialAuthContext}>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/rooms/" component={Rooms} />
            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route exact path="/cart" component={CartContainer} />
            <Route exact path="/sign-up" component={Registration} />
            <PrivateRoute exact path="/profile" Component={Profile} />

            <Route component={Error} />
          </Switch>
        </>
      </AuthContext.Provider>
    </Provider>
  );
}

export default App;
