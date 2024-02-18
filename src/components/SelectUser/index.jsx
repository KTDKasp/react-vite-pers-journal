import React from 'react';
import { UserContext } from '../../App';

import './SelectUser.css';
export const SelectUser = () => {
	const { userId, setUserId } = React.useContext(UserContext);

	const onChangeUser = (event) => {
		setUserId(Number(event.target.value));
	};
	return (
		<select className='select' name="user" id="user" value={userId} onChange={onChangeUser}>
			<option value="1">Тимур</option>
			<option value="2">Хан</option>
			<option value="3">Jack</option>
		</select>
	);
};
	