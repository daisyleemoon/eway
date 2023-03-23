import PropTypes from 'prop-types';
import './Button.style.scss';

function Button({ children }) {
  return (
    <button className="button" type="button" aria-label="">
      <img alt="" />
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
