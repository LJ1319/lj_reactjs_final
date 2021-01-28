import React from "react";
import { Link } from "react-router-dom";

import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";
import RoomContainer from "../../components/room/RoomContainer";

import useChangeTheme from "../../custom-hooks/useChangeTheme";

const Rooms = () => {
  useChangeTheme();

  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rooms;
