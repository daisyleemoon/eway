import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import './InputDefault.style.scss';

function InputDefault({
  inputId,
  inputName,
  inputType,
  inputRef,
  inputPattern,
  children,
  errorMessage,
  onChangeHandler,
  isValid,
}) {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');

  useEffect(() => {
    if (isValid) {
      setError('');
      if (!inputRef.current.validity.valid) {
        setError('error');
      }
    }
  }, [isValid]);
  // const inputValue = inputRef.current.value;
  // const onChangeHandler = (ref) => {
  //   if (!ref.current.validity.valid) {
  //     return setValidityMessage('error');
  //   }
  //   return setValidityMessage('');
  // };
  return (
    <label htmlFor={inputId} className="formLabel">
      {children}
      <span />
      <input
        id={inputId}
        name={inputName}
        type={inputType}
        pattern={inputPattern}
        onChange={() => (onChangeHandler() ? setError('') : setError('patten'))}
        ref={inputRef}
        placeholder="placeholder text"
        required
      />
      {!error && <p className="hiddenP" />}
      {error &&
        (inputRef.current.value.length === 0 ? (
          <p className="validityMessage">require</p>
        ) : (
          <p className="validityMessage">{errorMessage}</p>
        ))}
    </label>
  );
}

InputDefault.propTypes = {
  inputId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputPattern: PropTypes.string,
  children: PropTypes.node.isRequired,
  errorMessage: PropTypes.string,
  onChangeHandler: PropTypes.func,
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  isValid: PropTypes.number,
};

InputDefault.defaultProps = {
  inputPattern: '',
  errorMessage: '',
  isValid: 0,
  onChangeHandler: () => {},
};

export default InputDefault;
