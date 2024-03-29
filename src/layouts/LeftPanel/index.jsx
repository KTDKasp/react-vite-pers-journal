import { JournalAddButton } from '../../components/JournalAddButton';
import { SelectUser } from '../../components/SelectUser';

import './LeftPanel.css';

export const LeftPanel = ({ children, setSelectedItem }) => {
  return (
    <div className="left-panel">
      <header className="left-panel__header">
        <img src="./personal-journal.svg" alt="Personal Journal" />
      </header>
      <SelectUser />
      <JournalAddButton clearForm={() => setSelectedItem(null)}/>
      {children}
    </div>
  );
};
