import React from "react";
import { Link, useLocation } from "react-router-dom";

import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";

const Error = () => {
  const location = useLocation();
  return (
    <Hero>
      <Banner
        title="404"
        subtitle={`requested page ${location.pathname} not found`}
      >
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
