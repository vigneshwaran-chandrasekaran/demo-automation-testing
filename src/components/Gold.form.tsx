import React, { FC, ReactNode } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";

// Define the component's prop types
interface MyComponentProps {}

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

// Create a functional component
const GoldForm: FC<MyComponentProps> = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const handleOnSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  return (
    <div>
      <div>
        <h1>Signup</h1>
        <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
          <Form>
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" placeholder="John" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" name="lastName" placeholder="Doe" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="john@acme.com"
                type="email"
              />
              <div>
                <button type="submit">Submit</button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default GoldForm;
