import React from 'react';
import { Button } from '../Button';
import { INITIAL_STATE, formReducer } from './JournalForm.state';
import { Input } from '../Input';
import { UserContext } from '../../App';

import './JournalForm.css';

export const JournalForm = ({ addJournalData, data, onDelete }) => {
	const [formState, dispatchForm] = React.useReducer(
		formReducer,
		INITIAL_STATE
	);
	const { isValid, isFormReadyToSubmit, values } = formState;

	const titleRef = React.useRef();
	const dateRef = React.useRef();
	const postRef = React.useRef();

	const { userId } = React.useContext(UserContext);

	const focusError = (isValid) => {
		switch (true) {
			case !isValid.title:
				titleRef.current.focus();
				break;
			case !isValid.date:
				dateRef.current.focus();
				break;
			case !isValid.post:
				postRef.current.focus();
				break;
		}
	};

	React.useEffect(() => {
		if (!data) {
			dispatchForm({ type: 'CLEAR' });
			dispatchForm({
				type: 'SET_VALUE',
				payload: { userId: userId }
			});
		}
		dispatchForm({
			type: 'SET_VALUE',
			payload: { ...data }
		});
	}, [data, userId]);

	React.useEffect(() => {
		let timerId;
		if (!isValid.date || !isValid.post || !isValid.title) {
			focusError(isValid);
			timerId = setTimeout(() => {
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
			dispatchForm({
				type: 'SET_VALUE',
				payload: { userId: userId }
			});
		}
	}, [isFormReadyToSubmit, addJournalData, values, userId]);

  React.useEffect(() => {
		dispatchForm({ type: 'CLEAR' });
    dispatchForm({
			type: 'SET_VALUE',
			payload: { userId: userId }
		});
  }, [userId]);

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

	const deleteJournalItem = () => {
		onDelete(data.id);
		dispatchForm({ type: 'CLEAR' });
		dispatchForm({
			type: 'SET_VALUE',
			payload: { userId: userId }
		});
	};

	return (
		<>
			<form className="journal-form" action="" onSubmit={addJournalItem}>
				<div className="journal-form__title">
					<Input
						ref={titleRef}
						value={values.title}
						onChange={(event) => onChangeInput(event)}
						type="text"
						placeholder="Введите название..."
						name="title"
						isValid={isValid.title}
						appearance="title"
					/>
					{data?.id && <button onClick={deleteJournalItem} className='journal-form__bin' type='button'>
						<img src="./bin.svg" alt="Recycle bin" />
					</button>}
				</div>

				<div className="form-input">
					<div className="form-row">
						<label htmlFor="date" className="form-label">
							<img src="./calendar.svg" alt="Календрарь" />
							<span>Дата</span>
						</label>
						<Input
							ref={dateRef}
							value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ''}
							onChange={(event) => onChangeInput(event)}
							type="date"
							name="date"
							id="date"
							isValid={isValid.date}
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
						<Input
							value={values.tag}
							onChange={(event) => onChangeInput(event)}
							type="text"
							name="tag"
							id="tag"
							placeholder="Введите теги..."
						/>
					</div>
					<hr className="hr" />
				</div>

				<textarea
					ref={postRef}
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
