import './InputSelect.style.scss';

function InputSelect() {
  return (
    <label htmlFor="payment" className="formLabel">
      payment
      <span />
      <select id="payment" className="paymentSelect" required>
        <option value="digital payment">digital payment</option>
        <option value="ATM">ATM</option>
      </select>
    </label>
  );
}

export default InputSelect;
