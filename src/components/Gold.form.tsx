import { FC } from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import { Form as AntForm, Input, Button } from "antd";
import * as Yup from "yup";

const { Item } = AntForm;

interface IGoldFormProps {}

interface FormValues {
  aedGoldPrice: number;
  inrGoldPrice: number;
  aedToinr: number;
  goldInGrams: number;
  aedWastage: number;
  aedVat: number;
  aedCardCharges: number;
  inrGst: number;
  inrCardCharges: number;
}

const validationSchema = Yup.object().shape({
  aedGoldPrice: Yup.number().required("AED Gold Price is required"),
  inrGoldPrice: Yup.number().required("INR Gold price is required"),
});

const initialValues: FormValues = {
  aedGoldPrice: 222.5,
  inrGoldPrice: 5635,
  aedToinr: 22.66,
  goldInGrams: 20,
  aedWastage: 10,
  aedVat: 5,
  aedCardCharges: 2.5,
  inrGst: 3,
  inrCardCharges: 0,
};

const GoldForm: FC<IGoldFormProps> = () => {
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
          <Item
            label="Gold Grams"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Field type="number" name="goldInGrams" as={Input} placeholder="Gold in Grams"  />
            <ErrorMessage name="goldInGrams" />
          </Item>

          <Item
            label="AED Gold Price"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Field type="number" name="aedGoldPrice" as={Input} />
            <ErrorMessage name="aedGoldPrice" />
          </Item>

          <Item
            label="INR Gold price"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Field type="number" name="inrGoldPrice" as={Input} />
            <ErrorMessage name="inrGoldPrice" />
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
