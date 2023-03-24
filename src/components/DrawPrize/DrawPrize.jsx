import DrawItem from '../DrawItem/DrawItem';
import certificateAIcon from '../../images/certificateA.png';
import certificateDIcon from '../../images/certificateD.png';
import './DrawPrize.style.scss';
import { prizeItems } from '../../data/data';

function DrawPrize() {
  const newPrizeItems = prizeItems.map((item) => ({
    ...item,
    id: Math.random(),
  }));

  return (
    <div className="drawPrizeContainer">
      <div className="drawPrizeItemsWrap">
        {newPrizeItems.map((item) => {
          if (
            item.prizeAward === 'A' ||
            item.prizeAward === 'B' ||
            item.prizeAward === 'C'
          ) {
            return (
              <DrawItem
                icon={certificateAIcon}
                key={item.id}
                prizeClassName="jackpot"
                letter={item.prizeAward}
                amount={item.prizeAmount}
                prize={item.prizeItem}
              />
            );
          }
          return (
            <DrawItem
              icon={certificateDIcon}
              key={item.id}
              prizeClassName="prizeAward"
              letter={item.prizeAward}
              amount={item.prizeAmount}
              prize={item.prizeItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DrawPrize;
