import './JournalForm.css';
import { Button } from '../Button';

// import React from 'react';

export const JournalForm = ({ addJournalData }) => {
  // const [inputData, setInputData] = React.useState('');

  // const inputChange = (event) => {
  //   setInputData(event.target.value);
  // };

  const addJournalItem = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    addJournalData(formProps);
  };

  return (
    <>
      <form className='journal-form' action="" onSubmit={addJournalItem}>
        <input type="text" name='title'/>
        <input type="date" name='date'/>
        <input type="text" name='tag' />
        <textarea name="text" id="" cols="30" rows="10"></textarea>
        <Button>
          Сохранить
        </Button>
      </form>  
    </>
  );
};
