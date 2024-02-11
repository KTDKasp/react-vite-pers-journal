import { CardButton } from '../CardButton';

import './JournalAddButton.css';

export const JournalAddButton = () => {
  return (
    <CardButton>
      <div className="journal-add__button">
        <img src="./plus.svg" alt="Plus" />
        Новое воспоминание
      </div>
    </CardButton>
  );
};
