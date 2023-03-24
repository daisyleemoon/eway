import PropTypes from 'prop-types';
import './DrawItem.style.scss';

function DrawItem({ icon, letter, amount, prize, prizeClassName }) {
  return (
    <div className={`${prizeClassName}`}>
      <img src={icon} alt="" />
      <div className="letter">{letter}</div>
      <div className="prizeAmount">{amount}</div>
      <p>{prize}</p>
    </div>
  );
}

DrawItem.propTypes = {
  icon: PropTypes.node.isRequired,
  letter: PropTypes.string,
  amount: PropTypes.string,
  prize: PropTypes.string,
  prizeClassName: PropTypes.string,
};
DrawItem.defaultProps = {
  letter: '',
  amount: '',
  prize: '',
  prizeClassName: '',
};

export default DrawItem;
