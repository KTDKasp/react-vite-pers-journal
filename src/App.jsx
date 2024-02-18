import React from 'react';
import { JournalForm } from './components/JournalForm';
import { JournalItemList } from './components/JournalItemList';
import { Body } from './layouts/Body';
import { LeftPanel } from './layouts/LeftPanel';
import { useLocalStorage } from './hooks/useLocalStorage.hook';

import './App.css';

export const UserContext = React.createContext({
  userId: 1
});

function mapItems(items) {
  if (!items) {
    return [];
	}
	return items.map((item) => ({
    ...item,
		date: new Date(item.date)
	}));
}

function App() {
  const [journalData, setJournalData] = useLocalStorage('data');
	const [userId, setUserId] = React.useState(1);
	const [selectedItem, setSelectedItem] = React.useState({});

	const addJournalData = (obj) => {
		if (!obj.id) {
			setJournalData([
				...mapItems(journalData),
				{
					...obj,
					id:
						journalData.length > 0
							? Math.max(...journalData.map((itemId) => itemId.id)) + 1
							: 1,
					date: new Date(obj.date)
				}
			]);
		} else {
			setJournalData([
				...mapItems(journalData).map((item) =>
					item.id === obj.id ? { ...obj, date: new Date(obj.date) } : item
				)
			]);
		}
	};

	return (
		<>
			<UserContext.Provider value={{ userId, setUserId }}>
				<LeftPanel>
					<JournalItemList data={mapItems(journalData)} setItem={setSelectedItem} />
				</LeftPanel>
				<Body>
					<JournalForm addJournalData={addJournalData} data={selectedItem} />
				</Body>
			</UserContext.Provider>
		</>
	);
}

export default App;
