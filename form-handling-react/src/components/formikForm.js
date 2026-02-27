import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
});

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };
  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" className="error" />

        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" className="error" />

        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" className="error" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
        