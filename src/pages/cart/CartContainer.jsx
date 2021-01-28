import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { CLEAR_CART, GET_TOTALS } from "../../actions";
import AuthContext from "../../context/AuthContext";

import CartItem from "../../components/cart-item/CartItem";
import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";

const CartContainer = ({ cart = [], total, dispatch }) => {
  const authContext = useContext(AuthContext);
  console.log(cart);
  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  if (!authContext.authed) {
    return (
      <Hero>
        <Banner title="Beach Resort" subtitle=" Please Sign In">
          <Link to="/login" className="btn-primary">
            Log In
          </Link>
        </Banner>
      </Hero>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className="btn-primary"
          onClick={() =>
            alert(
              `You've Successfully Booked The Rooms. Your Total Bill Is ${total}$`
            )
          }
        >
          book
        </button>
        <br />
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch({ type: CLEAR_CART });
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

function mapStateToProps(store) {
  const { cart, total } = store;
  return { cart, total };
}

export default connect(mapStateToProps)(CartContainer);
