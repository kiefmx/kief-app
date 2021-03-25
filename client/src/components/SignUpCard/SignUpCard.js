import React, { Fragment, useState  } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { ReactComponent as LogoKiefmxRegister } from '../../assets/svg/kief-black.svg';

import { signUpStart } from '../../redux/user/userActions';
import { selectError, selectFetching } from '../../redux/user/userSelectors';

import {
  validateEmail,
  validateFullName,
  validateUsername,
  validatePassword,
  validateCity,
  validateDayOBD,
  validateMonthOBD,
  validateYearOBD
} from '../../utils/validation';

import Button from '../Button/Button';
import TextButton from '../Button/TextButton/TextButton';
import Divider from '../Divider/Divider';
import Card from '../Card/Card';
import FormInput from '../FormInput/FormInput';
import FormSearchLocationInput from '../FormSearchLocationInput/FormSearchLocationInput';
import MonthInput from '../FormBirthdayInput/MonthInput';
import DayInput from '../FormBirthdayInput/DayInput';
import YearInput from '../FormBirthdayInput/YearInput';
import BdayDisplay from '../FormBirthdayInput/BdayDisplay';

import DatePicker from 'react-date-picker';

import ViewOnGithubButton from '../ViewOnGithubButton/ViewOnGithubButton';
import GithubLoginButton from '../GithubLoginButton/GithubLoginButton';

const SignUpCard = ({ signUpStart, error, fetching }) => {
  let monthInput = '1';
  let dayInput = '1';
  let yearInput = '2000';

  const selectedMonth = (event) => {    
    monthInput = event.target.value;
    console.log(monthInput);
  }

  const selectedDay = (event) => {
    dayInput = event.target.value;
  }

  const selectedYear = (event) => {
    yearInput = event.target.value;
  }

  const validate = (values) => {
    const errors = {};
    const emailError = validateEmail(values.email);
    if (emailError) errors.email = emailError;

    const fullNameError = validateFullName(values.fullName);
    if (fullNameError) errors.fullName = fullNameError;

    const usernameError = validateUsername(values.username);
    if (usernameError) errors.username = usernameError;

    const passwordError = validatePassword(values.password);
    if (passwordError) errors.password = passwordError;

    const cityError = validateCity(values.city);
    if (cityError) errors.city = cityError;

    const dayOBDError = validateDayOBD(values.dayOBD);
    if (dayOBDError) errors.dayOBD = dayOBDError;

    const monthOBDError = validateMonthOBD(values.monthOBD);
    if (monthOBDError) errors.monthOBD = monthOBDError;

    const yearOBDError = validateYearOBD(values.yearOBD);
    if (yearOBDError) errors.yearOBD = yearOBDError;
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      username: '',
      password: '',
      city:'',
      dayOBD:'',
      monthOBD:'',
      yearOBD:''
    },
    validate,
    onSubmit: (values) =>
      signUpStart(
        values.email,
        values.fullName,
        values.username,
        values.password,
        values.city,
        values.dayOBD,
        values.monthOBD,
        values.yearOBD
      ),
  });

  const [value, onChange] = useState(new Date());

  return (
    <Fragment>
      <Card className="form-card">
        <div className="header-register-kief__logo-image">
          <LogoKiefmxRegister />      
        </div>
        <h2
          style={{ fontSize: '1.3rem' }}
          className="heading-2 color-grey text-center"
        >
          Regístrate en kief.mx y se parte de este gran universo cannábico 
        </h2>        
        <form className="form-card__form" onSubmit={formik.handleSubmit}>
          <FormInput
            name="email"
            fieldProps={formik.getFieldProps('email')}
            valid={formik.touched.email && !formik.errors.email}
            placeholder="Email"
          />
          <FormInput
            name="fullName"
            fieldProps={formik.getFieldProps('fullName')}
            valid={formik.touched.fullName && !formik.errors.fullName}
            placeholder="Nombre"
          />
          <FormInput
            name="username"
            fieldProps={formik.getFieldProps('username')}
            valid={formik.touched.username && !formik.errors.username}
            placeholder="Usuario"
          />
          <FormInput
            name="password"
            fieldProps={formik.getFieldProps('password')}
            placeholder="Password"
            valid={formik.touched.password && !formik.errors.password}
            type="password"
          />

          <FormInput
            name="city"
            fieldProps={formik.getFieldProps('city')}
            placeholder="Ciudad"
            valid={formik.touched.city && !formik.errors.city}
            type="text"
          />

          <h2
              style={{ fontSize: '1.3rem' }}
              className="heading-2 color-grey text-left"
            >
              Fecha Nacimiento
            </h2> 
          <div className="__DOB">
              
            <FormInput
              name="dayOBD"
              fieldProps={formik.getFieldProps('dayOBD')}
              valid={formik.touched.dayOBD && !formik.errors.dayOBD}
              type="number"
              placeholder="Día"
              min="1"
              max="31"
            />
            <FormInput
              name="monthOBD"
              fieldProps={formik.getFieldProps('monthOBD')}
              valid={formik.touched.monthOBD && !formik.errors.monthOBD}
              type="number"
              placeholder="Mes"
              min="1"
              max="12"
            />
            <FormInput
              name="yearOBD"
              fieldProps={formik.getFieldProps('yearOBD')}
              valid={formik.touched.yearOBD && !formik.errors.yearOBD}
              type="number"
              placeholder="Año"
              min="1900"
              max="2021"
            />
          </div>
          
          
          <Button
            loading={fetching}
            disabled={
              Object.keys(formik.touched).length === 0 ? true : !formik.isValid
            }
          >
            Unirme
          </Button>
          <p></p>
        </form>
        <p className="error">
          {error
            ? error
            : formik.submitCount > 0 && Object.values(formik.errors)[0]}
        </p>
        <p className="heading-5 color-grey">
          Acepto tener más de 18 años de edad, los Términos y Condiciones, Política de Cookies, así como nuestra Política de Privacidad.
        </p>
      </Card>
      <Card>
        <section
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
          }}
        >
          <h4 style={{ marginRight: '5px' }} className="heading-4 font-thin">
            Tengo cuenta
          </h4>
          <Link to="/login">
            <TextButton medium blue bold>
              Ingresar
            </TextButton>
          </Link>
        </section>
      </Card>      
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, fullName, username, password, city, dayOBD, monthOBD, yearOBD) =>
    dispatch(signUpStart(email, fullName, username, password, city, dayOBD, monthOBD, yearOBD)),
});

const mapStateToProps = createStructuredSelector({
  error: selectError,
  fetching: selectFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpCard);
