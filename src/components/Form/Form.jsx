import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import InputDefault from '../InputDefault/InputDefault';
import InputStore from '../InputStore/InputStore';
import Button from '../Button/Button';
import InputSelect from '../InputSelect/InputSelect';
import turtleIcon from '../../images/turtle.png';
import successIcon from '../../images/success.png';
import failureIcon from '../../images/failure.png';
import './Form.style.scss';
import InputNumber from '../InputNumber/InputNumber';

function Form({ scrollTargetFormRef }) {
  const formRef = useRef(null);
  const inputNameRef = useRef(null);
  const inputPhoneRef = useRef(null);
  const inputAmountRef = useRef(null);
  const inputPaymentRef = useRef(null);
  const [isFormValid, setIsFormValid] = useState(null);
  const [buttonClassName, setButtonClassName] = useState('');
  const [trigger, setTrigger] = useState(0);

  const nameChangeHandler = () => inputNameRef.current.validity.valid;
  const phoneChangeHandler = () => inputPhoneRef.current.validity.valid;
  const amountChangeHandler = () => inputAmountRef.current.validity.valid;

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
          valid: x.validity.valid,
        };
      });
    const formValidation = formValues.some((obj) => !obj.valid);
    setTrigger(trigger + 1);

    if (!formValidation) {
      setIsFormValid(true);
      setButtonClassName('success');
      return;
    }
    setIsFormValid(false);
    setButtonClassName('failure');
  };

  return (
    <div className="formContainer">
      <form onSubmit={onSubmit} ref={formRef} noValidate>
        <div className="inputContainer" ref={scrollTargetFormRef}>
          <InputStore isValid={trigger} errorMessage="請輸入列表中的選項" />
          <InputDefault
            inputType="text"
            inputId="name"
            inputName="name"
            inputRef={inputNameRef}
            inputPattern="^[\u4E00-\u9FA5A-Za-z]+$"
            onChangeHandler={nameChangeHandler}
            errorMessage="請輸入中英文字母不包含數字及特殊符號"
            isValid={trigger}
          >
            name
          </InputDefault>
          <InputDefault
            inputType="tel"
            inputId="phone"
            inputName="phone"
            inputPattern="^09[0-9]{8}$"
            errorMessage="請輸入09開頭十位數數字"
            onChangeHandler={phoneChangeHandler}
            inputRef={inputPhoneRef}
            isValid={trigger}
          >
            phone
          </InputDefault>
          <InputNumber
            isValid={trigger}
            onChangeHandler={amountChangeHandler}
            errorMessage="請輸入數量為大於等於0的整數（開頭不為0）"
          >
            Amount of consumption
          </InputNumber>
          <InputSelect inputRef={inputPaymentRef} />
        </div>
        <Button buttonType="submit" className={buttonClassName}>
          {isFormValid === null && 'submit'}
          {isFormValid === true && (
            <div>
              <img className="s" src={successIcon} alt="" />
              success
            </div>
          )}
          {isFormValid === false && (
            <div>
              <img className="f" src={failureIcon} alt="" />
              failure
            </div>
          )}
        </Button>
        {isFormValid === false && (
          <p className="formValidityMessage">error message</p>
        )}
      </form>
      <div className="formTitle">
        FORM
        <img src={turtleIcon} alt="" />
      </div>
    </div>
  );
}
Form.propTypes = {
  scrollTargetFormRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};

export default Form;
