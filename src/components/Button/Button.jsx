import PropTypes from 'prop-types';
import './Button.style.scss';

function Button({ children, buttonType, className, scrollToForm }) {
  return (
    <button
      className={`button ${className}`}
      type={buttonType === 'submit' ? 'submit' : 'button'}
      aria-label=""
      onClick={scrollToForm}
    >
      <img alt="" />
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.string.isRequired,
  className: PropTypes.string,
  scrollToForm: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  scrollToForm: () => {},
};

export default Button;
