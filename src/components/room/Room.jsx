import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import AuthContext from "../../context/AuthContext";
import { RoomConsumer } from "../../context/context";

import defaultImg from "../../images/details-4.jpeg";

const Room = ({ room }) => {
  const { id, name, slug, images, price, inCart } = room;

  const authContext = useContext(AuthContext);

  if (authContext.authed) {
    return (
      <article className="room">
        <RoomConsumer>
          {(value) => (
            <>
              <div className="img-container">
                <img src={images[0] || defaultImg} alt="single room" />
                <div className="price-top">
                  <h6>${price}</h6>
                  <p>per night</p>
                </div>

                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                  Features
                </Link>
              </div>
              <p className="room-info">{name}</p>
              <hr />
              <button
                style={{ cursor: "pointer", width: "100%" }}
                onClick={() => value.addToCart(id)}
                disabled={inCart ? true : false}
              >
                {inCart ? (
                  <p disabled className="add-to-cart">
                    in Cart
                  </p>
                ) : (
                  <p className="add-to-cart"> add to cart</p>
                )}
              </button>
            </>
          )}
        </RoomConsumer>
      </article>
    );
  }

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>

        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name} </p>
    </article>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Room;
