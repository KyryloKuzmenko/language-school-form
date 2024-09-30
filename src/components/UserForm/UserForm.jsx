import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './UserForm.module.css';
import { useDispatch } from 'react-redux';
import { hideForm } from '../../redux/form/formSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// Валидация с помощью Yup
// const validationSchema = Yup.object({
//   name: Yup.string().required('Name is required'),
//   number: Yup.string()
//     .matches(
//       /^\+\d{10,15}$/,
//       'Phone number must start with "+" and contain 10-15 digits'
//     )
//     .required('Phone number is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   language: Yup.string().required('Please select a language'),
// });

const validationSchema = Yup.object({
  name: Yup.string(),
  number: Yup.string()
    .matches(
      /^\+\d{10,15}$/,
      'Phone number must start with "+" and contain 10-15 digits'
    ),
  email: Yup.string().email('Invalid email'),
  language: Yup.string(),
});

const UserForm = () => {
  const INITIAL_VALUES = {
    // id: '',
    name: '',
    email: '',
    language: '',
    phone: '',
    message: '',
  };

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Хук для навигации
  const [submitted, setSubmitted] = useState(false); // Состояние для отслеживания отправки формы
  const [error, setError] = useState(null);


  const handleSubmit = async (values, { resetForm }) => {
    console.log('Data', values);
    resetForm(); // Сбрасываем значения формы
    dispatch(hideForm()); // Скрываем форму
    setSubmitted(true); // Устанавливаем состояние отправки формы

    try {
      const response = await axios.post(
        'https://language-school-form.vercel.app/api/users',
        values
      );
      console.log('Response:', response.data);
    } catch (error) {
            console.error('Ошибка при отправке данных:', error); // Логируем ошибку
      setError('Ошибка при отправке данных'); // Устанавливаем состояние ошибки
    }

    // Перенаправляем на главную страницу через 5 секунд
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  return (
    <div className={css.formWrap}>
      {submitted ? (
        <div className={css.message}>
          <h2>Мы с вами свяжемся!</h2>
        </div>
      ) : (
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={`${css.form} container`}>
              <label className={css.label} htmlFor="nameField">
                <span>Name</span>
              </label>
              <Field
                className={css.userName}
                type="text"
                name="name"
                id="nameField"
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}

              <label className={css.label} htmlFor="numberField">
                <span>Phone Number</span>
              </label>
              <Field
                className={css.userNumber}
                type="text"
                name="phone"
                id="numberField"
              />
              {errors.number && touched.number ? (
                <div>{errors.number}</div>
              ) : null}

              <label className={css.label} htmlFor="emailField">
                <span>Email</span>
              </label>
              <Field
                className={css.email}
                type="text"
                name="email"
                placeholder="example@gmail.com"
                id="emailField"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}

              <label className={css.label} htmlFor="lang">
                <span>Language</span>
              </label>
              <Field as="select" name="language" id="lang">
                <option value="">Select Language</option>
                <option value="Ukrainian">Ukrainian</option>
                <option value="English">English</option>
                <option value="Frances">Frances</option>
              </Field>
              {errors.language && touched.language ? (
                <div>{errors.language}</div>
              ) : null}

              <button className={css.submitBtn} type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default UserForm;
