import React from 'react';
import './App.css';
import { JournalForm } from './components/JournalForm';
import { JournalItemList } from './components/JournalItemList';
import { Body } from './layouts/Body';
import { LeftPanel } from './layouts/LeftPanel';

function App() {
  const [journalData, setJournalData] = React.useState([]);

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      setJournalData(data.map(item => ({
        ...item,
        date: new Date(item.date)
      })));
    }
  }, []);

  React.useEffect(() => {
    if (journalData.length) {
      localStorage.setItem('data', JSON.stringify(journalData));
    }
  }, [journalData]);

  const addJournalData = (obj) => {
    setJournalData((prev) => [...prev, {
      id: prev.length > 0 ? Math.max(...prev.map(itemId => itemId.id)) + 1 : 1,
      title: obj.title,
      post: obj.post,
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
