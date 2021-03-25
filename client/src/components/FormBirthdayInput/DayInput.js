import React from 'react';

const DayInput = ({daySelected, month}) => {

	const months30 = ['april', 'june', 'september', 'november'];
	const feb = 'February';

	let days = [...Array(32).keys()];
	days[0] = "--Day--"
	

	if ( months30.includes(month.toLowerCase()) ) {
		days.pop();
	} else if ( month === feb) {
		days.splice(-2, 2);
	}


	return (
		<div>
			<select name="day" required onChange={daySelected}>
				{days.map( (day, i) => <option key={i} value={day}>{day}</option>)}
			</select>
		</div>
	);
}

export default DayInput;
