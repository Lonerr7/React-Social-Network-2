import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import s from './ProfileEditForm.module.scss';
import TextError from './TextError/TextError';

const ProfileEditForm = (props) => {
  debugger
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

  const validationSchema = yup.object({
    fullName: yup.string().required(`Required`),
    lookingForAJob: yup.string().required(`Required`),
    lookingForAJobDescription: yup.string().required(`Required`),
    contacts: yup.object().shape({
      github: yup.string().required(`Required`),
      vk: yup.string().required(`Required`),
      facebook: yup.string().required(`Required`),
      instagram: yup.string().required(`Required`),
      twitter: yup.string().required(`Required`),
      website: yup.string().required(`Required`),
      youtube: yup.string().required(`Required`),
      mainLink: yup.string().required(`Required`),
    }),
  });

  const onSubmit = ( { setSubmitting, setStatus }) => {
    props.setEditMode(false);

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

          <div className={s.formControl}>
            <label htmlFor='lookingForAJob'>Looking for a job</label>
            <Field name='lookingForAJob' id='lookingForAJob' type='text' />
            <ErrorMessage name='lookingForAJob' component={TextError} />
          </div>

          <div className={s.formControl}>
            <label htmlFor='lookingForAJobDescription'>
              Looking for a job description
            </label>
            <Field
              name='lookingForAJobDescription'
              id='lookingForAJobDescription'
              type='text'
            />
            <ErrorMessage
              name='lookingForAJobDescription'
              component={TextError}
            />
          </div>

          <div className={s.formControl}>
            <label htmlFor='github'>Github</label>
            <Field name='contacts.github' id='github' type='text' />
            <ErrorMessage name='contacts.github' component={TextError} />
          </div>

          <div className={s.formControl}>
            <label htmlFor='vk'>vk</label>
            <Field name='contacts.vk' id='vk' type='text' />
            <ErrorMessage name='contacts.vk' component={TextError} />
          </div>

          <div className={s.formControl}>
            <label htmlFor='facebook'>facebook</label>
            <Field name='contacts.facebook' id='facebook' type='text' />
            <ErrorMessage name='contacts.facebook' component={TextError} />
          </div>

          <div className={s.formControl}>
            <label htmlFor='instagram'>instagram</label>
            <Field name='contacts.instagram' id='instagram' type='text' />
            <ErrorMessage name='contacts.instagram' component={TextError} />
          </div>

          <div className={s.formControl}>
            <label htmlFor='twitter'>twitter</label>
            <Field name='contacts.twitter' id='twitter' type='text' />
            <ErrorMessage name='contacts.twitter' component={TextError} />
          </div>

          <div className={s.formControl}>
            <label htmlFor='website'>website</label>
            <Field name='contacts.website' id='website' type='text' />
            <ErrorMessage name='contacts.website' component={TextError} />
          </div>

          <div className={s.formControl}>
            <label htmlFor='youtube'>youtube</label>
            <Field name='contacts.youtube' id='youtube' type='text' />
            <ErrorMessage name='contacts.youtube' component={TextError} />
          </div>

          <div className={s.formControl}>
            <label htmlFor='mainLink'>mainLink</label>
            <Field name='contacts.mainLink' id='mainLink' type='text' />
            <ErrorMessage name='contacts.mainLink' component={TextError} />
          </div>
          <p>{props.status}</p>
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileEditForm;
