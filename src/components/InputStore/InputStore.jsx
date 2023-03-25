import { useState, useRef } from 'react';

import './InputStore.style.scss';

function InputStore() {
  const [inputValue, setInputValue] = useState('');
  const [validityMessage, setValidityMessage] = useState('');
  const datalistRef = useRef(null);
  const storeInputRef = useRef(null);

  const inputChangeHandler = (event) => {
    const value = event.target.value.trim();
    const { options } = datalistRef.current;
    const optionsArray = [...options];
    setInputValue(value);
    if (!optionsArray.some((option) => option.value === value)) {
      storeInputRef.current.setCustomValidity('error');
      setValidityMessage('請輸入列表中的選項');
    } else {
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
        onChange={inputChangeHandler}
        required
      />
      <datalist id="store-list" ref={datalistRef}>
        <option value="store1" aria-label="store-list" />
        <option value="store2" aria-label="store-list" />
        <option value="store3" aria-label="store-list" />
      </datalist>
      {validityMessage && <p className="errorMessage">{validityMessage}</p>}
    </label>
  );
}

export default InputStore;
