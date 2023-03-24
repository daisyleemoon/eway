import lighthouseIcon from '../../images/lighthouse.png';
import slashLeftIcon from '../../images/slash_left.png';
import slashRightIcon from '../../images/slash_right.png';

import './Lighthouse.style.scss';

function Lighthouse() {
  return (
    <div className="lighthouseContainer">
      <div className="lighthouseContent">
        <img className="slashLeft" src={slashLeftIcon} alt="" />
        <div className="lighthouseText">
          <span>13.32</span>
          <span>who seeks after it and</span>
          <span>wants to have it</span>
        </div>
        <img className="slashRight" src={slashRightIcon} alt="" />
        <img className="lighthouse" src={lighthouseIcon} alt="" />
      </div>
    </div>
  );
}

export default Lighthouse;
