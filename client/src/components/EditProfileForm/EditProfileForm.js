import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { createStructuredSelector } from 'reselect';

import {
  selectCurrentUser,
  selectToken,
  selectUpdatingProfile,
} from '../../redux/user/userSelectors';
import { updateProfileStart } from '../../redux/user/userActions';
import { showAlert } from '../../redux/alert/alertActions';

import {
  validateEmail,
  validateFullName,
  validateUsername,
  validateBio,
  validateWebsite,
} from '../../utils/validation';


import Avatar from '../Avatar/Avatar';
import FormInput from '../FormInput/FormInput';
import FormTextarea from '../FormTextarea/FormTextarea';
import Button from '../Button/Button';
import SettingsForm from '../SettingsForm/SettingsForm';
import SettingsFormGroup from '../SettingsForm/SettingsFormGroup/SettingsFormGroup';
import ChangeAvatarButton from '../ChangeAvatarButton/ChangeAvatarButton';
import PerfilCannabico1 from '../KiefInputs/PerfilCannabicoConsumo_1';
import PerfilCannabico2 from '../KiefInputs/PerfilCannabicoPreferencias_2';
import PerfilCannabico3 from '../KiefInputs/PerfilCannabicoExperiencia_3';

import Divider from '@material-ui/core/Divider';

const options = [{label: "First", value: 1}, {label: "Second", value: 2}, {label: "Third", value: 3}]
const [value, setValue] = useState([])
const [error, setError] = useState("")

const EditProfileForm = ({
  currentUser,
  showAlert,
  token,
  updateProfileStart,
  updatingProfile,
}) => {
  const validate = (values) => {
    const errors = {};
    const emailError = validateEmail(values.email);
    if (emailError) errors.email = emailError;

    const fullNameError = validateFullName(values.fullName);
    if (fullNameError) errors.fullName = fullNameError;

    const usernameError = validateUsername(values.username);
    if (usernameError) errors.username = usernameError;

    const bioError = validateBio(values.bio);
    if (bioError) errors.bio = bioError;

    const websiteError = validateWebsite(values.website);
    if (websiteError) errors.website = websiteError;

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: currentUser.email,
      fullName: currentUser.fullName,
      username: currentUser.username,
      bio: currentUser.bio || '',
      website: currentUser.website || '',
      city: currentUser.city || '',
    },
    validate,
    onSubmit: async (values) => {
      await updateProfileStart(token, values);
      showAlert('Profile saved.');
    },
  });

  useEffect(() => {
    document.title = 'Edit Profile • kiefmx';
  }, []);

  return (
    <SettingsForm onSubmit={formik.handleSubmit}>
      <SettingsFormGroup>
        <ChangeAvatarButton>
          <Avatar
            className="avatar--small"
            imageSrc={currentUser.avatar}
            style={{ alignSelf: 'start' }}
          />
        </ChangeAvatarButton>
        <div style={{ lineHeight: '2.2rem' }}>
          <h3 className="heading-2 font-medium">{formik.values.username}</h3>
          <ChangeAvatarButton />
        </div>
      </SettingsFormGroup>
      <SettingsFormGroup>
        <label className="heading-3 font-bold">Name</label>
        <FormInput
          name="fullName"
          fieldProps={formik.getFieldProps('fullName')}
        />
      </SettingsFormGroup>
      <SettingsFormGroup>
        <label className="heading-3 font-bold">City</label>
        <FormInput
          name="city"
          fieldProps={formik.getFieldProps('city')}
        />
      </SettingsFormGroup>
      <SettingsFormGroup>
        <label className="heading-3 font-bold">Website</label>
        <FormInput
          name="website"
          fieldProps={formik.getFieldProps('website')}
        />
      </SettingsFormGroup>
      <SettingsFormGroup>
        <label className="heading-3 font-bold">Bio</label>
        <FormTextarea name="bio" fieldProps={formik.getFieldProps('bio')} />
      </SettingsFormGroup>
      <SettingsFormGroup>
        <label></label>
        <div>
          <h3 className="heading-3 color-grey font-bold">
            Cannabic Profile
          </h3>
          <p
            style={{ fontSize: '1.3rem', lineHeight: '1.6rem' }}
            className="color-grey"
          >
            Completa tu Perfil Cannábico y conecta con personas reales según tu compatibilidad.
          </p>
        </div>
      </SettingsFormGroup>
      <SettingsFormGroup>
        <label></label>
        <PerfilCannabico1 />        
        <label></label>
        <Divider />
      </SettingsFormGroup>    
      <SettingsFormGroup>
        <label></label>
        <PerfilCannabico2 />        
        <label></label>
        <Divider />
      </SettingsFormGroup>    
      <SettingsFormGroup>
        <label></label>
        <PerfilCannabico3 
          		label="Label"
              value={value}
              setValue={setValue}
              options={options}
              error={error}
              setError={setError}
        />        
        <label></label>
        <Divider />
      </SettingsFormGroup>          
      <SettingsFormGroup>
        <label></label>
        <Button
          style={{ width: '10rem' }}
          disabled={Object.keys(formik.touched).length === 0}
          loading={updatingProfile}
          onClick={() => {
            if (!formik.isValid) {
              showAlert(Object.values(formik.errors)[0]);
            }
          }}
        >
          Submit
        </Button>
      </SettingsFormGroup>
    </SettingsForm>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateProfileStart: (authToken, updates) =>
    dispatch(updateProfileStart(authToken, updates)),
  showAlert: (text, onClick) => dispatch(showAlert(text, onClick)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  token: selectToken,
  updatingProfile: selectUpdatingProfile,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
