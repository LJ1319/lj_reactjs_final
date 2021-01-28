import React from "react";
import PropTypes from "prop-types";

function Form({ children, className, onSubmit }) {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
Form.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};
export default Form;
