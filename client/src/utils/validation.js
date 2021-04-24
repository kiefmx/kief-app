import { da } from "date-fns/locale";

export const validateEmail = (email) => {
  if (
    !email ||
    !email.match(
      //eslint-disable-next-line
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    return 'Enter a valid email address.';
  }
  return false;
};

export const validateFullName = (fullName) => {
  if (!fullName) {
    return 'Enter a valid name.';
  }
  return false;
};

export const validateUsername = (username) => {
  if (!username) {
    return 'Enter a valid username.';
  } else if (username.length > 30 || username.length < 3) {
    return 'Please choose a username between 3 and 30 characters.';
    //eslint-disable-next-line
  } else if (!username.match(/^[a-zA-Z0-9\_.]+$/)) {
    return 'Only letters A-Z, numbers 0-9 and the symbols _ . ';
  }
  return false;
};

export const validatePassword = (password) => {
  if (!password) {
    return 'Enter a valid password.';
  } else if (password.length < 6) {
    return 'For security purposes we require a password to be at least 6 characters.';
  } 
  return false;
};

export const validateCity = (city) => {  
  if (!city || city == '') {
    return 'Enter a valid city.';
  } 
  return false;
};

export const validateDayOBD = (dayOBD) => {    
  if (!dayOBD || dayOBD == '') {
    return 'Enter a day.';
  } 
  else if(Number(dayOBD) < 1 || Number(dayOBD) > 31){
    return '1 to 31';
  }
  return false;
};

export const validateMonthOBD = (monthOBD) => {    
  if (!monthOBD || monthOBD == '') {
    return 'Enter a month.';
  }  
  else if(Number(monthOBD) < 1 || Number(monthOBD) > 12){
    return '1 to 12';
  }
  return false;
};

export const validateYearOBD = (yearOBD) => {    
  if (!yearOBD || yearOBD == '') {
    return 'Enter a year.';
  } 
  else if(Number(yearOBD) < 1900 || Number(yearOBD) > 2021){
    return '1900 to 2021';
  }
  return false;
};

export const validateBio = (bio) => {  
  if (bio.length > 150) {
    return 'Your bio has to be 150 characters or less.';
  }
  return false;
};

export const validateWebsite = (website) => {
  if (
    website &&
    !website.match(
      //eslint-disable-next-line
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    )
  ) {
    return 'Please provide a valid website.';
  }
  return false;
};
