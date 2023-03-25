import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

import './InputDefault.style.scss';

function InputDefault({
  inputId,
  inputName,
  inputType,
  inputPattern,
  children,
}) {
  const [validityMessage, setValidityMessage] = useState('');
  const inputRef = useRef(null);

  const onChangeHandler = () => {
    if (!inputRef.current.checkValidity()) {
      return setValidityMessage('error');
    }
    return setValidityMessage('');
  };
  return (
    <label htmlFor={inputId} className="formLabel">
      {children}
      <span />
      <input
        id={inputId}
        name={inputName}
        type={inputType}
        pattern={inputPattern}
        onChange={onChangeHandler}
        ref={inputRef}
        required
      />
      {validityMessage && <p>{validityMessage}</p>}
    </label>
  );
}

InputDefault.propTypes = {
  inputId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputPattern: PropTypes.string,
  children: PropTypes.node.isRequired,
};

InputDefault.defaultProps = {
  inputPattern: '',
};

export default InputDefault;
