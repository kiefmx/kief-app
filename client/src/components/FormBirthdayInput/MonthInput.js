import React from 'react';

const MonthInput = ({monthSelected}) => {

	const months = [ 
		'--Month--',
		'January', 
		'February', 
		'March', 
		'April', 
		'May', 
		'June', 
		'July', 
		'August', 
		'September', 
		'October', 
		'November', 
		'December'
		];

	return (
		<div>
			<select name="month" required onChange={monthSelected}>
				{months.map( (month, i) => <option key={i} value={i}>{month}</option>)}
			</select>
		</div>
	);
}

export default MonthInput;
