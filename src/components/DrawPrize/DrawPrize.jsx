import DrawItem from '../DrawItem/DrawItem';
import certificateAIcon from '../../images/certificateA.png';
import certificateDIcon from '../../images/certificateD.png';
import './DrawPrize.style.scss';

function DrawPrize() {
  const prizeItems = [
    { prizeAward: 'A', prizeItem: 'dehumidifier', prizeAmount: 'ONE' },
    { prizeAward: 'B', prizeItem: 'range hood', prizeAmount: 'ONE' },
    { prizeAward: 'C', prizeItem: 'vacuum cleaner', prizeAmount: 'ONE' },
    { prizeAward: 'D', prizeItem: 'toaster', prizeAmount: 'ONE' },
    { prizeAward: 'E', prizeItem: 'scale', prizeAmount: 'ONE' },
    { prizeAward: 'F', prizeItem: 'straightening iron', prizeAmount: 'ONE' },
    { prizeAward: 'G', prizeItem: 'vacuum cleaner', prizeAmount: 'FIVE' },
    { prizeAward: 'H', prizeItem: 'rice cooker', prizeAmount: 'TEN' },
  ];
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
