import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { LoginInputs } from "../../utils/Inputs";

import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";

import Form from "../../components/form/Form";
import Input from "../../components/input/Input";

import AuthContext from "../../context/AuthContext";

import {
  login,
  setUserSessionToken,
  removeUserSessionToken,
  loginAxios,
} from "../../services/auth";

import styles from "./Login.module.css";

function Login() {
  const authContext = useContext(AuthContext);

  const onSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      email: event.target[LoginInputs.email.id].value,
      password: event.target[LoginInputs.password.id].value,
    };

    const { response, error } = await login(loginData);
    if (!error) {
      setUserSessionToken(response["token"]);
      console.log(authContext.authed);
      authContext.logIn();
      console.log(authContext.authed);
    } else {
      alert("error");
    }

    loginAxios(loginData);
  };

  const onLogOut = () => {
    removeUserSessionToken();

    authContext.logOut();
  };

  if (authContext.authed) {
    return (
      <Hero>
        <Banner title="Beach Resort">
          <Link to="/" className="btn-primary">
            home page
          </Link>
          <hr className={styles.split} />
          <button className="btn-primary" type="button" onClick={onLogOut}>
            Log Out
          </button>
        </Banner>
      </Hero>
    );
  }

  return (
    <>
      <Hero>
        <Banner title="please sign in">
          <Form onSubmit={onSubmit} className="form-signin">
            <Input {...LoginInputs.email} />
            <Input {...LoginInputs.password} />

            <button className="btn-primary" type="submit">
              Sign In
            </button>

            <hr />
            <br />

            <h4>don't have an account? </h4>
            <Link to={{ pathname: "/sign-up" }} className="btn-primary">
              Sign Up
            </Link>

            <br />
            <br />
            <p>&copy; 2020-2021</p>
          </Form>
        </Banner>
      </Hero>
    </>
  );
}

export default Login;
