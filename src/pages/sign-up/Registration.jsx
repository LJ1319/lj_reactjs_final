import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AuthContext from "../../context/AuthContext";
import { SignUpInputs } from "../../utils/Inputs";

import Form from "../../components/form/Form";
import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";
import Input from "../../components/input/Input";

function Registration({ showLogin }) {
  const authContext = useContext(AuthContext);

  const onSubmit = (event) => {
    event.preventDefault();

    const registrationData = {
      email: event.target[SignUpInputs.email.id].value,
      password: event.target[SignUpInputs.password.id].value,
    };
  };

  if (authContext.authed) {
    return (
      <Hero>
        <Banner title="already logged in">
          <Link to="/" className="btn-primary">
            home page
          </Link>
        </Banner>
      </Hero>
    );
  }

  return (
    <Hero>
      <Banner title="sign up">
        <Form className="form-signin">
          <Input {...SignUpInputs.user} />
          <Input {...SignUpInputs.email} />
          <Input {...SignUpInputs.password} />

          <button
            className="btn-primary"
            type="submit"
            onClick={() => alert("You Are Now Registered")}
          >
            Register
          </button>
          <hr />
          <br />
          <h4>already have an account?</h4>
          <Link to={{ pathname: "/login" }} className="btn-primary">
            Sign In
          </Link>
        </Form>
      </Banner>
    </Hero>
  );
}

Registration.propTypes = {
  showLogin: PropTypes.func,
};

export default Registration;
