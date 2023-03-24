import marketIcon from '../../images/market.png';
import './Market.style.scss';

function Market() {
  return (
    <div className="marketContainer">
      <div className="marketContent">
        <div className="marketTitle">
          <span>Neque porro quisquam</span>
          <span>est qui dolorem!</span>
        </div>
        <img src={marketIcon} alt="" />
      </div>
    </div>
  );
}
export default Market;
