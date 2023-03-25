import PropTypes from 'prop-types';
import './Button.style.scss';

function Button({ children, buttonType }) {
  return (
    <button
      className="button"
      type={buttonType === 'submit' ? 'submit' : 'button'}
      aria-label=""
    >
      <img alt="" />
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.string.isRequired,
};

export default Button;
