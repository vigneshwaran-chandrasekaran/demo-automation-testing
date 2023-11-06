import { FC } from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import { Form as AntForm, Input, Button, Alert } from "antd";
import * as Yup from "yup";

const { Item } = AntForm;

interface IGoldFormProps {}

interface FormValues {
  name: string;
  email: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const GoldForm: FC<IGoldFormProps> = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
  };

  const handleSubmit = (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      // Simulate form submission
      console.log("Submitted values:", values);
      resetForm();
      setSubmitting(false);
    }, 500);
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

          <Item>
            <Button type="primary" htmlType="submit" loading={isSubmitting}>
              Submit
            </Button>
          </Item>
        </Form>
      )}
    </Formik>
  );
};

export default GoldForm;
