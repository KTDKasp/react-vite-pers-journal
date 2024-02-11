import { CardButton } from '../CardButton';
import { JournalItem } from '../JournalItem';

import './JournalItemList.css';

export const JournalItemList = ({ data }) => {
  return (
    <div className='journal-item__list'>
      {data.map((item, index) => (
        <CardButton key={index}>
          <JournalItem title={item.title} date={item.date} text={item.text} />
        </CardButton>
      ))}
    </div>
  );
};
