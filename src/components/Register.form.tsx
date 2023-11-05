import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Form as AntForm, Input, Button, Alert } from 'antd';
import * as Yup from 'yup';

const { Item } = AntForm;

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const RegistrationForm: React.FC = () => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values: FormValues) => {
    // Handle form submission here (e.g., send data to a server)
    console.log('Submitted values:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Item label="Name">
            <Field type="text" name="name" as={Input} />
            <ErrorMessage name="name" component={Alert} />
          </Item>

          <Item label="Email">
            <Field type="text" name="email" as={Input} />
            <ErrorMessage name="email" component={Alert} />
          </Item>

          <Item label="Password">
            <Field type="password" name="password" as={Input} />
            <ErrorMessage name="password" component={Alert} />
          </Item>

          <Item>
            <Button type="primary" htmlType="submit" loading={isSubmitting}>
              Register
            </Button>
          </Item>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
