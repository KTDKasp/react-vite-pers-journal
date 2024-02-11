import './App.css';
import { Button } from './components/Button';
import { JournalItemList } from './components/JournalItemList';
import { Body } from './layouts/Body';
import { LeftPanel } from './layouts/LeftPanel';

function App() {
  const data = [
    {
      title: 'Подготовка к обновлению курсов',
      date: new Date(),
      text: 'Сегодня провёл весь день за уроками'
    },
    {
      title: 'title2',
      date: new Date(),
      text: 'text2'
    }
  ];

  return (
    <>
      <LeftPanel>
        <JournalItemList data={data} />
      </LeftPanel>
      <Body>
        Body
        <Button />
      </Body>
    </>
  );
}

export default App;
