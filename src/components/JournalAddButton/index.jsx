import { CardButton } from '../CardButton';

import './JournalAddButton.css';

export const JournalAddButton = ({ clearForm }) => {
  return (
    <CardButton onClick={() => clearForm()}>
      <div className="journal-add__button">
        <img src="./plus.svg" alt="Plus" />
        Новое воспоминание
      </div>
    </CardButton>
  );
};
