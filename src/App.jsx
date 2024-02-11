import React from 'react';
import './App.css';
import { JournalForm } from './components/JournalForm';
import { JournalItemList } from './components/JournalItemList';
import { Body } from './layouts/Body';
import { LeftPanel } from './layouts/LeftPanel';

function App() {
  const [journalData, setJournalData] = React.useState([]);

  const addJournalData = (obj) => {
    setJournalData((prev) => [...prev, {
      title: obj.title,
      text: obj.text,
      date: new Date(obj.date)
    }]);
  };

  return (
    <>
      <LeftPanel>
        <JournalItemList data={journalData} />
      </LeftPanel>
      <Body>
        <JournalForm addJournalData={addJournalData}/>
      </Body>
    </>
  );
}

export default App;
