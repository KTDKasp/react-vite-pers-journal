import React from 'react';

import './Input.css';

export const Input = React.forwardRef(function Input({ isValid = true, appearance, ...props }, ref) {
	return (
		<input
			{...props}
			ref={ref}
			className={`${
				appearance === 'title'
					? 'input-title'
					: 'input'
			} ${isValid ? '' : 'invalid'}`}
		/>
	);
});
