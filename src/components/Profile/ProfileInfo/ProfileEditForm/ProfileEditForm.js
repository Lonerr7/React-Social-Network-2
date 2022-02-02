import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import s from './ProfileEditForm.module.scss';
import TextError from './TextError/TextError'

const ProfileEditForm = (props) => {
  const initialValues = {
    fullName: '',
    lookingForAJob: '',
    lookingForAJobDescription: '',
    contacts: {
      github: '',
      vk: '',
      facebook: '',
      instagram: '',
      twitter: '',
      website: '',
      youtube: '',
      mainLink: '',
    },
  };

  const validationSchema = yup.object({});

  const onSubmit = (values, { setSubmitting, setStatus }) => {
    props.logIn(values, setStatus);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(props) => (
        <Form className={s.profileEditForm}>
          <div className={s.formControl}>
            <label htmlFor='fullName'>Full name</label>
            <Field name='fullName' id='fullName' type='text' />
            <ErrorMessage name='fullName' component={TextError} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileEditForm;
