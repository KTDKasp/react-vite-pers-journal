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
        <div className="journal-form__title">
          <input
            type="text"
            placeholder="Введите название..."
            name="title"
            className={`input-title ${isFormValid.title ? '' : 'invalid'}`}
          />
          <img src="./bin.svg" alt="Recycle bin" />
        </div>

        <div className="form-input">
          <div className="form-row">
            <label htmlFor="date" className="form-label">
              <img src="./calendar.svg" alt="Календрарь" />
              <span>Дата</span>
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className={`input ${isFormValid.date ? '' : 'invalid'}`}
            />
          </div>
          <hr className='hr'/>
        </div>

        <div className="form-input">
          <div className="form-row">
            <label htmlFor="tag" className="form-label">
              <img src="./folder.svg" alt="Папка" />
              <span>Метки</span>
            </label>
            <input
              type="text"
              name="tag"
              id="tag"
              className="input"
              placeholder="Введите теги..."
            />
          </div>
          <hr className='hr'/>
        </div>

        <textarea
          name="post"
          id=""
          cols="30"
          rows="10"
          placeholder='Введите текст...'
          className={`textarea ${isFormValid.post ? '' : 'invalid'}`}
        ></textarea>
        <Button>Сохранить</Button>
      </form>
    </>
  );
};
