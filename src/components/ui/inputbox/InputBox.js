import './InputBox.css'
import React from "react";
import PropTypes from "prop-types";

function InputBox(props) {

  function changeInput(e) {
    if (!!props.callbackChange) {
      props.callbackChange(e);
    }
  }

  function handleFocus(e) {
    if (!!props.callbackFocus)
      props.callbackFocus(e);
  }

  return (
    <input
      className={`input ${props.className}`}
      type={props.type}
      placeholder={props.placeholder}
      onChange={changeInput}
      onFocus={handleFocus}
    />
  );
}

InputBox.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  callbackChange: PropTypes.func.isRequired,
};

InputBox.defaultProps = {
  type: "text",
  placeholder: "Inserisci",
};

export default InputBox;
