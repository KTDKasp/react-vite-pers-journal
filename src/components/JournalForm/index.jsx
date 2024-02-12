import React from 'react';
import { Button } from '../Button';
import './JournalForm.css';

// import React from 'react';

export const JournalForm = ({ addJournalData }) => {
  const [isFormValid, setIsFormValid] = React.useState({
    title: true,
    date: true,
    post: true
  });

  const addJournalItem = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    let validForm = true;
    if (!formProps.title?.trim().length) {
      setIsFormValid((state) => ({ ...state, title: false }));
      validForm = false;
    } else {
      setIsFormValid((state) => ({ ...state, title: true }));
    }
    if (!formProps.date) {
      setIsFormValid((state) => ({ ...state, date: false }));
      validForm = false;
    } else {
      setIsFormValid((state) => ({ ...state, date: true }));
    }
    if (!formProps.post?.trim().length) {
      setIsFormValid((state) => ({ ...state, post: false }));
      validForm = false;
    } else {
      setIsFormValid((state) => ({ ...state, post: true }));
    }

    if (!validForm) {
      return;
    }
    addJournalData(formProps);
  };

  return (
    <>
      <form className="journal-form" action="" onSubmit={addJournalItem}>
        <input
          type="text"
          name="title"
          className={`input ${isFormValid.title ? '' : 'invalid'}`}
        />
        <input
          type="date"
          name="date"
          className={`input ${isFormValid.date ? '' : 'invalid'}`}
        />
        <input type="text" name="tag" />
        <textarea
          name="post"
          id=""
          cols="30"
          rows="10"
          className={`input ${isFormValid.post ? '' : 'invalid'}`}
        ></textarea>
        <Button>Сохранить</Button>
      </form>
    </>
  );
};
