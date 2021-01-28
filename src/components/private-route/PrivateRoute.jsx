import React, { useState, useContext } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function PrivateRoute({ Component, ...rest }) {
  const authContext = useContext(AuthContext);
  const [isAuth, setIsAuth] = useState(() => {
    return authContext.authed;
  });

  const location = useLocation();

  if (!isAuth) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          fromUrl: location.pathname,
        }}
      />
    );
  }
  return (
    <Route>
      <Component {...rest} />
    </Route>
  );
}

export default PrivateRoute;
