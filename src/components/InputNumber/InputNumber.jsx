import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function InputNumber({ children, errorMessage, isValid }) {
  const [validityMessage, setValidityMessage] = useState('');
  const inputNumberRef = useRef(null);

  useEffect(() => {
    if (isValid) {
      setValidityMessage('');
      if (!inputNumberRef.current.validity.valid) {
        setValidityMessage('error');
      }
    }
  }, [isValid]);
  const isNumberValid = (event) => {
    const inputValue = event.target.value;

    const reg = /^(0|[1-9][0-9]*)$/;
    if (!reg.test(inputValue)) {
      inputNumberRef.current.setCustomValidity('error');
      setValidityMessage('patten');
    } else {
      inputNumberRef.current.setCustomValidity('');
      setValidityMessage('');
    }
  };

  return (
    <label htmlFor="inputNumber" className="formLabel">
      {children}
      <span />
      <input
        id="inputNumber"
        name="amount"
        type="number"
        onChange={isNumberValid}
        placeholder="placeholder text"
        ref={inputNumberRef}
        required
      />
      {validityMessage.length === 0 && <p className="hiddenP" />}
      {/* {validityMessage && <p className="validityMessage">{errorMessage}</p>} */}
      {validityMessage.length > 0 &&
        (inputNumberRef.current.value.length === 0 ? (
          <p className="validityMessage">require</p>
        ) : (
          <p className="validityMessage">{errorMessage}</p>
        ))}
    </label>
  );
}

InputNumber.propTypes = {
  children: PropTypes.node.isRequired,
  errorMessage: PropTypes.string.isRequired,
  isValid: PropTypes.number,
};

InputNumber.defaultProps = {
  isValid: 0,
};

export default InputNumber;
