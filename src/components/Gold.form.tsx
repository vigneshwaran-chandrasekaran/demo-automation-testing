import { FC } from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import { Form as AntForm, Input, Button, Col, Row } from "antd";
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
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
              <Item
                label="Gold in Grams"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Field
                  type="number"
                  name="goldInGrams"
                  as={Input}
                  placeholder="Gold in Grams"
                />
                <ErrorMessage name="goldInGrams" />
              </Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Item
                label="AED Gold Price"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Field type="number" name="aedGoldPrice" as={Input} />
                <ErrorMessage name="aedGoldPrice" />
              </Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Item
                label="INR Gold price"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Field type="number" name="inrGoldPrice" as={Input} />
                <ErrorMessage name="inrGoldPrice" />
              </Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Item
                label="AED to INR"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Field type="number" name="aedToinr" as={Input} />
                <ErrorMessage name="aedToinr" />
              </Item>
            </Col>
          </Row>
          <Item
            label="AED Gold Wastage"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Field type="number" name="aedWastage" as={Input} />
            <ErrorMessage name="aedWastage" />
          </Item>

          <Item
            label="AED VAT Tax"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Field type="number" name="aedVat" as={Input} />
            <ErrorMessage name="aedVat" />
          </Item>

          <Item
            label="AED Card Charges"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Field type="number" name="aedCardCharges" as={Input} />
            <ErrorMessage name="aedCardCharges" />
          </Item>

          <Item
            label="INR Gold Wastage"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Field type="number" name="inrGst" as={Input} />
            <ErrorMessage name="inrGst" />
          </Item>

          <Item
            label="INR Card Charges"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Field type="number" name="inrCardCharges" as={Input} />
            <ErrorMessage name="inrCardCharges" />
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
