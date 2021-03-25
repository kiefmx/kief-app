import React from 'react';
import 'lodash';

const YearInput = ({yearSelected}) => {

	const _ = require('lodash');
	const years = _.range(2020, 1920);
	years[0] = '--Year--'
	

	return (
		<div>
			<select name="year" required onChange={yearSelected}>
				{years.map( (year, i) => <option key={i} value={year}>{year}</option>)}
			</select>
		</div>
	);
}

export default YearInput;
