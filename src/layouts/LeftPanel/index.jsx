import { JournalAddButton } from '../../components/JournalAddButton';

import './LeftPanel.css';

export const LeftPanel = ({ children }) => {
  return (
    <div className="left-panel">
      <header className="left-panel__header">
        <img src="./personal-journal.svg" alt="Personal Journal" />
      </header>
        <JournalAddButton />
      {children}
    </div>
  );
};
