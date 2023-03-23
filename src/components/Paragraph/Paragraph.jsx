import PropTypes from 'prop-types';
import cactusIcon from '../../images/cactus.png';
import './Paragraph.style.scss';

function Paragraph({ children }) {
  return (
    <div className="paragraphContainer">
      <div className="cactusParagraph">
        <img src={cactusIcon} alt="" />
        <span>{children}</span>
        <img src={cactusIcon} alt="" />
      </div>
    </div>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
