import React from 'react';
import { Button } from '../Button';
import './JournalForm.css';
import { INITIAL_STATE, formReducer } from './JournalForm.state';

export const JournalForm = ({ addJournalData }) => {
  const [formState, dispatchForm] = React.useReducer(
    formReducer,
    INITIAL_STATE
  );
  const { isValid, isFormReadyToSubmit, values } = formState;

  React.useEffect(() => {
    let timerId;
    if (!isValid.date || !isValid.post || !isValid.title) {
      timerId = setTimeout(() => {
        console.log('side effect');
        dispatchForm({ type: 'RESET_VALIDITY' });
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  React.useEffect(() => {
    if (isFormReadyToSubmit) {
      addJournalData(values);
      dispatchForm({ type: 'CLEAR' });
    }
  }, [isFormReadyToSubmit]);

  const onChangeInput = (event) => {
    dispatchForm({
      type: 'SET_VALUE',
      payload: { [event.target.name]: event.target.value }
    });
  };

  const addJournalItem = (event) => {
    event.preventDefault();
    dispatchForm({ type: 'SUBMIT' });
  };

  return (
    <>
      <form className="journal-form" action="" onSubmit={addJournalItem}>
        <div className="journal-form__title">
          <input
            value={values.title}
            onChange={(event) => onChangeInput(event)}
            type="text"
            placeholder="Введите название..."
            name="title"
            className={`input-title ${isValid.title ? '' : 'invalid'}`}
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
              value={values.date}
              onChange={(event) => onChangeInput(event)}
              type="date"
              name="date"
              id="date"
              className={`input ${isValid.date ? '' : 'invalid'}`}
            />
          </div>
          <hr className="hr" />
        </div>

        <div className="form-input">
          <div className="form-row">
            <label htmlFor="tag" className="form-label">
              <img src="./folder.svg" alt="Папка" />
              <span>Метки</span>
            </label>
            <input
              value={values.tag}
              onChange={(event) => onChangeInput(event)}
              type="text"
              name="tag"
              id="tag"
              className="input"
              placeholder="Введите теги..."
            />
          </div>
          <hr className="hr" />
        </div>

        <textarea
          value={values.post}
          onChange={(event) => onChangeInput(event)}
          name="post"
          id=""
          cols="30"
          rows="10"
          placeholder="Введите текст..."
          className={`textarea ${isValid.post ? '' : 'invalid'}`}
        ></textarea>
        <Button>Сохранить</Button>
      </form>
    </>
  );
};
