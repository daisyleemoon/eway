// import { useRef, useReducer } from 'react';
import { useRef, useState } from 'react';
import InputDefault from '../InputDefault/InputDefault';
import InputStore from '../InputStore/InputStore';
import Button from '../Button/Button';
import './Form.style.scss';

// const initialState = {
//   storeIsValid: null,
//   nameIsValid: null,
//   phoneIsValid: null,
//   amountIsValid: null,
//   paymentIsValid: null,
// };

// const formReducer = (state = initialState, { type, payload } = {}) => {
//   switch (type) {
//     case 'store':
//       return { ...state, storeIsValid: payload };
//     case 'name':
//       return { ...state, nameIsValid: payload };
//     case 'phone':
//       return { ...state, phoneIsValid: payload };
//     case 'amount':
//       return { ...state, amountIsValid: payload };
//     case 'payment':
//       return { ...state, paymentIsValid: payload };
//     default:
//       return state;
//   }
// };

function Form() {
  const formRef = useRef(null);
  const [isFormValid, setIsFormValid] = useState('');
  // const onChangeHandlerName = (event, setError) => {
  //   const { value } = event.target;
  //   const regex = /^[-'a-z\u4e00-\u9eff]{1,20}$/i;
  //   // const reg = /^([^\x00-\x40\x5B-\x60\x7B-\x7F])+$;
  //   console.log(regex.test(value));
  //   // console.log(reg.test(value));
  //   if (!regex.test(value)) {
  //     return setError('請輸入中文或英文字母');
  //   }
  //   return setError('');
  // };

  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formElements = [...form.elements];
    const formValues = formElements
      .filter((ele) => ele.name.length > 0)
      .map((x) => {
        const { typeMismatch } = x.validity;
        const { name, type, value } = x;
        return {
          name,
          type,
          typeMismatch,
          value,
          valid: x.checkValidity(),
        };
      });

    const formValidation = formValues.some((obj) => !obj.valid);
    if (formValidation) {
      return setIsFormValid('submit error');
    }
    return setIsFormValid('');
  };

  return (
    <form
      className="formContainer"
      onSubmit={onSubmit}
      ref={formRef}
      noValidate
    >
      <InputStore />
      <InputDefault
        inputType="text"
        inputId="name"
        inputName="name"
        inputPattern="^[\u4e00-\u9fa5]+$|^[a-zA-Z\s]+$"
      >
        name
      </InputDefault>
      <InputDefault
        inputType="tel"
        inputId="phone"
        inputName="phone"
        inputPattern="^09[0-9]{8}$"
      >
        phone
      </InputDefault>
      <InputDefault
        inputType="number"
        inputId="amount"
        inputName="amount"
        inputPattern="^(0|[1-9][0-9]*)$"
      >
        Amount of consumption
      </InputDefault>
      <Button buttonType="submit">submit</Button>
      {isFormValid && <p>error message</p>}
    </form>
  );
}

export default Form;
