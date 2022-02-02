import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import s from './ProfileEditForm.module.scss';
import TextError from './TextError/TextError';

const ProfileEditForm = (props) => {
  const initialValues = {
    fullName: '',
    aboutMe: '',
    lookingForAJob: false,
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

  const onSubmit = (values, { setSubmitting, setStatus }) => {
    props.updateProfileInfo(values, props.userId);
    props.setEditMode(false);
    setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form className={s.profileEditForm}>
            <div className={s.formControl}>
              <label className={s.formLabel} htmlFor='fullName'>
                Full name
              </label>
              <Field
                className={s.formInput}
                name='fullName'
                id='fullName'
                type='text'
              />
              <ErrorMessage name='fullName' component={TextError} />
            </div>

            <div className={s.formControl}>
              <label className={s.formLabel} htmlFor='aboutMe'>
                About Me
              </label>
              <Field
                className={s.formInput}
                name='aboutMe'
                id='aboutMe'
                type='text'
              />
            </div>

            <div className={s.formControl_checkbox}>
              <label className={s.formLabel} htmlFor='lookingForAJob'>
                Looking for a job
              </label>
              <Field
                
                name='lookingForAJob'
                id='lookingForAJob'
                type='checkbox'
              />
            </div>

            <div className={s.formControl}>
              <label
                className={s.formLabel}
                htmlFor='lookingForAJobDescription'
              >
                Looking for a job description
              </label>
              <Field
                className={s.formInput}
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
              <label className={s.formLabel} htmlFor='github'>
                Github
              </label>
              <Field
                className={s.formInput}
                name='contacts.github'
                id='github'
                type='text'
              />
              <ErrorMessage name='contacts.github' component={TextError} />
            </div>

            <div className={s.formControl}>
              <label className={s.formLabel} htmlFor='vk'>
                vk
              </label>
              <Field
                className={s.formInput}
                name='contacts.vk'
                id='vk'
                type='text'
              />
              <ErrorMessage name='contacts.vk' component={TextError} />
            </div>

            <div className={s.formControl}>
              <label className={s.formLabel} htmlFor='facebook'>
                facebook
              </label>
              <Field
                className={s.formInput}
                name='contacts.facebook'
                id='facebook'
                type='text'
              />
              <ErrorMessage name='contacts.facebook' component={TextError} />
            </div>

            <div className={s.formControl}>
              <label className={s.formLabel} htmlFor='instagram'>
                instagram
              </label>
              <Field
                className={s.formInput}
                name='contacts.instagram'
                id='instagram'
                type='text'
              />
              <ErrorMessage name='contacts.instagram' component={TextError} />
            </div>

            <div className={s.formControl}>
              <label className={s.formLabel} htmlFor='twitter'>
                twitter
              </label>
              <Field
                className={s.formInput}
                name='contacts.twitter'
                id='twitter'
                type='text'
              />
              <ErrorMessage name='contacts.twitter' component={TextError} />
            </div>

            <div className={s.formControl}>
              <label className={s.formLabel} htmlFor='website'>
                website
              </label>
              <Field
                className={s.formInput}
                name='contacts.website'
                id='website'
                type='text'
              />
              <ErrorMessage name='contacts.website' component={TextError} />
            </div>

            <div className={s.formControl}>
              <label className={s.formLabel} htmlFor='youtube'>
                youtube
              </label>
              <Field
                className={s.formInput}
                name='contacts.youtube'
                id='youtube'
                type='text'
              />
              <ErrorMessage name='contacts.youtube' component={TextError} />
            </div>

            <div className={s.formControl}>
              <label className={s.formLabel} htmlFor='mainLink'>
                mainLink
              </label>
              <Field
                className={s.formInput}
                name='contacts.mainLink'
                id='mainLink'
                type='text'
              />
              <ErrorMessage name='contacts.mainLink' component={TextError} />
            </div>
            <p>{props.status}</p>
            <button type='submit'>Save</button>
          </Form>
        )}
      </Formik>
      <button
        onClick={() => {
          props.setEditMode(false);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default ProfileEditForm;
