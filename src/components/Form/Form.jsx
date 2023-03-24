import './Form.style.scss';

function Form() {
  return (
    <form className="formContainer">
      <div>
        <label htmlFor="store">
          store
          <input type="text" id="store" list="store-list" />
          <datalist id="store-list">
            <option value="store1" aria-label="store-list" />
            <option value="store2" aria-label="store-list" />
            <option value="store3" aria-label="store-list" />
          </datalist>
        </label>
      </div>
    </form>
  );
}

export default Form;
