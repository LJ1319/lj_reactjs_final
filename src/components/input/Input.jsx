import React from "react";
import PropTypes from "prop-types";

function Input({
  htmlFor,
  labelClassName,
  labelText,
  type,
  id,
  className,
  name,
  required,
  autoFocus,
}) {
  return (
    <React.Fragment>
      <label htmlFor={htmlFor} className={labelClassName}>
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        className={className}
        name={name}
        required={required}
        autoFocus={autoFocus}
      />
    </React.Fragment>
  );
}

Input.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

export default Input;
