import React from "react";

export const initialContext = {
  authed: false,
  logOut(cb) {
    setTimeout(() => {
      this.authed = false;
    }, 2000);
  },
  logIn(cb) {
    setTimeout(() => {
      this.authed = true;
    }, 2000);
  },
};

const authContext = React.createContext(false);

export default authContext;
