import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import './InputStore.style.scss';

function InputStore({ isValid }) {
  const [inputValue, setInputValue] = useState('');
  const [validityMessage, setValidityMessage] = useState('');
  const datalistRef = useRef(null);
  const storeInputRef = useRef(null);

  useEffect(() => {
    if (isValid) {
      setValidityMessage('');
      if (!storeInputRef.current.validity.valid) {
        setValidityMessage('error');
      }
    }
  }, [isValid]);

  const inputChangeHandler = (event) => {
    const value = event.target.value.trim();
    const { options } = datalistRef.current;
    const optionsArray = [...options];
    setInputValue(value);

    const fuzzySearch = (str) =>
      optionsArray.filter((option) => option.value.includes(str));

    if (fuzzySearch(value).length === 0) {
      storeInputRef.current.setCustomValidity('error');
      setValidityMessage('no result');
    } else {
      if (!optionsArray.some((option) => option.value === value)) {
        storeInputRef.current.setCustomValidity('error');
        setValidityMessage('請輸入列表中的選項');
        return;
      }
      storeInputRef.current.setCustomValidity('');
      setValidityMessage('');
    }
  };

  return (
    <label htmlFor="store" className="formLabel inputStoreContainer">
      store
      <span />
      <input
        type="text"
        id="store"
        name="store"
        list="store-list"
        ref={storeInputRef}
        value={inputValue}
        placeholder="placeholder text"
        onChange={inputChangeHandler}
        required
      />
      <datalist id="store-list" ref={datalistRef}>
        <option value="store1" aria-label="store-list" />
        <option value="store2" aria-label="store-list" />
        <option value="store3" aria-label="store-list" />
      </datalist>
      {validityMessage.length === 0 && <p className="hiddenP" />}
      {validityMessage.length > 0 &&
        (storeInputRef.current.value.length === 0 ? (
          <p className="validityMessage">require</p>
        ) : (
          <p className="validityMessage">{validityMessage}</p>
        ))}
    </label>
  );
}

InputStore.propTypes = {
  isValid: PropTypes.number,
};

InputStore.defaultProps = {
  isValid: 0,
};

export default InputStore;
