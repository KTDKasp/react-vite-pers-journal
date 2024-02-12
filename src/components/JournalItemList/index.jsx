import { CardButton } from '../CardButton';
import { JournalItem } from '../JournalItem';

import './JournalItemList.css';

export const JournalItemList = ({ data }) => {

  const textP = <p>Нет никаких записей. Добавьте хотя бы одну запись.</p>; 

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div className='journal-item__list'>
      {
        data.length === 0 ? textP : data.sort(sortItems).map((item) => (
          <CardButton key={item.id}>
            <JournalItem title={item.title} date={item.date} text={item.text} />
          </CardButton>
        ))
      }
    </div>
  );
};
