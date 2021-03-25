import React from 'react';
import { differenceInYears } from 'date-fns';


const BdayDisplay = ({month, day, year}) => {


let result = differenceInYears(					// calculate age using date-fns function
		new Date(),
		new Date(year, month, day)
	);

const displayMessage = () => {					// make sure each selection box has valid user input
	if (month !== '' && month !== '0' 
		&& day !== '' && day !== '0'
		&& year !== '' && year !== '0') 
		{
			return <div>You were born {result} years ago.</div>
	}
}

		return (								// display message

			<div>{displayMessage()}</div>
			
		);
}

export default BdayDisplay;
