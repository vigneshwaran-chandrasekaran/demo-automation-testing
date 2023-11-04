import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input, Button, Alert } from "antd";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const MyForm: React.FC = () => {
  const initialValues = { name: "", email: "" };

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <div>
      <h2>My Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Name</label>
              <Field type="text" name="name" as={Input} />
              <ErrorMessage name="name" component={Alert} />
            </div>

            <div>
              <label>Email</label>
              <Field type="text" name="email" as={Input} />
              <ErrorMessage name="email" component={Alert} />
            </div>

            <Button type="primary" htmlType="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
