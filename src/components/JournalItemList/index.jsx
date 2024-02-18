import React from 'react';
import { UserContext } from '../../App';
import { CardButton } from '../CardButton';
import { JournalItem } from '../JournalItem';

import './JournalItemList.css';

export const JournalItemList = ({ data, setItem }) => {
  const { userId } = React.useContext(UserContext);

  const textP = <p>Нет никаких записей. Добавьте хотя бы одну запись.</p>;

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div className="journal-item__list">
      {data.length === 0
        ? textP
        : data
            .filter((item) => item.userId === userId)
            .sort(sortItems)
            .map((item) => (
              <CardButton key={item.id} onClick={() => setItem(item)}>
                <JournalItem
                  title={item.title}
                  date={item.date}
                  post={item.post}
                />
              </CardButton>
            ))}
    </div>
  );
};
