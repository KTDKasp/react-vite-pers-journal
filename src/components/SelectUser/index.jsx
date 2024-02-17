import React from 'react';
import { UserContext } from '../../App';
export const SelectUser = () => {
	const { userId, setUserId } = React.useContext(UserContext);

	console.log('render');

	return (
		<select name="user" id="user" value={userId} onChange={() => setUserId(Number(event.target.value))}>
			<option value="1">Тимур</option>
			<option value="2">Хан</option>
			<option value="3">Jack</option>
		</select>
	);
};
	