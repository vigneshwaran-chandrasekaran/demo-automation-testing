import { FC } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Form as AntForm, Input, Button, Col, Row } from "antd";
import * as Yup from "yup";
import { ErrorMessage } from "../components/common";

const { Item } = AntForm;

interface IGoldFormProps {}

interface FormValues {
  goldInGrams: number;
  aedToinr: number;
  aedGoldPrice: number;
  inrGoldPrice: number;
  aedWastage: number;
  aedVat: number;
  aedCardCharges: number;
  inrWastage: number;
  inrGst: number;
  inrCardCharges: number;
  aedTotal: number;
  inrTotal: number;
  inrSavings: number;
}

interface FormTotalValues {
  aedTotal: number;
  inrTotal: number;
  inrSavings: number;
  aedTotalinInr: number;
}

const validationSchema = Yup.object().shape({
  goldInGrams: Yup.number().required("Gold weight is required"),
  aedToinr: Yup.number().required("AED to INR Price is required"),
  aedGoldPrice: Yup.number().required("AED Gold Price is required"),
  inrGoldPrice: Yup.number().required("INR Gold price is required"),
  aedWastage: Yup.number(),
  aedVat: Yup.number(),
  aedCardCharges: Yup.number(),
  inrWastage: Yup.number(),
  inrGst: Yup.number(),
  inrCardCharges: Yup.number(),
});

const initialValues: FormValues = {
  goldInGrams: 20,
  aedToinr: 22.66,
  aedGoldPrice: 223.5,
  inrGoldPrice: 5635,
  aedWastage: 10,
  aedVat: 5,
  aedCardCharges: 2.5,
  inrWastage: 2.5,
  inrGst: 3,
  inrCardCharges: 0,
  aedTotal: 0,
  inrTotal: 0,
  inrSavings: 0,
};

const roundToTwoDecimalPlaces = (amount: number): number =>
  Number(amount.toFixed(2));

const calculatePrice = (basePrice: number, percentage: number): number =>
  roundToTwoDecimalPlaces(basePrice + basePrice * (percentage / 100));

function getPriceDetails(values: FormValues): FormTotalValues {
  const {
    goldInGrams,
    aedToinr,
    aedGoldPrice,
    inrGoldPrice,
    aedWastage,
    aedVat,
    aedCardCharges,
    inrWastage,
    inrGst,
    inrCardCharges,
  } = values;

  let aedPrice = goldInGrams * aedGoldPrice;
  let inrPrice = goldInGrams * inrGoldPrice;

  if (aedWastage) {
    aedPrice = calculatePrice(aedPrice, aedWastage);
  }

  if (aedVat) {
    aedPrice = calculatePrice(aedPrice, aedVat);
  }

  if (aedCardCharges) {
    aedPrice = calculatePrice(aedPrice, aedCardCharges);
  }

  if (inrWastage) {
    inrPrice = calculatePrice(inrPrice, inrWastage);
  }

  if (inrGst) {
    inrPrice = calculatePrice(inrPrice, inrGst);
  }

  if (inrCardCharges) {
    inrPrice = calculatePrice(inrPrice, inrCardCharges);
  }

  aedPrice = roundToTwoDecimalPlaces(aedPrice);
  inrPrice = roundToTwoDecimalPlaces(inrPrice);
  const aedTotalinInr = roundToTwoDecimalPlaces(aedPrice * aedToinr);

  return {
    inrTotal: inrPrice,
    aedTotal: aedPrice,
    inrSavings: roundToTwoDecimalPlaces(inrPrice - aedTotalinInr),
    aedTotalinInr,
  };
}

const GoldForm: FC<IGoldFormProps> = () => {
  const handleSubmit = (
    values: FormValues,
    { setSubmitting, setFieldValue }: FormikHelpers<FormValues>
  ) => {
    const { inrTotal, aedTotal, inrSavings, aedTotalinInr } =
      getPriceDetails(values);

    setFieldValue("aedTotal", aedTotal);
    setFieldValue("inrTotal", inrTotal);
    setFieldValue("inrSavings", inrSavings);
    setFieldValue("aedTotalinInr", aedTotalinInr);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, resetForm }) => (
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
                label="AED to INR"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Field type="number" name="aedToinr" as={Input} />
                <ErrorMessage name="aedToinr" />
              </Item>
            </Col>
            <Col className="gutter-row" span={6}></Col>
            <Col className="gutter-row" span={6}></Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
                label="AED Gold Wastage"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Field type="number" name="aedWastage" as={Input} />
                <ErrorMessage name="aedWastage" />
              </Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Item
                label="AED VAT Tax"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Field type="number" name="aedVat" as={Input} />
                <ErrorMessage name="aedVat" />
              </Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Item
                label="AED Card Charges"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Field type="number" name="aedCardCharges" as={Input} />
                <ErrorMessage name="aedCardCharges" />
              </Item>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
                label="INR Gold Wastage"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Field type="number" name="inrWastage" as={Input} />
                <ErrorMessage name="inrWastage" />
              </Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Item
                label="INR GST Tax"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Field type="number" name="inrGst" as={Input} />
                <ErrorMessage name="inrGst" />
              </Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Item
                label="INR Card Charges"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Field type="number" name="inrCardCharges" as={Input} />
                <ErrorMessage name="inrCardCharges" />
              </Item>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
              <Item
                label="AED Gold price"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Field type="number" name="aedTotal" as={Input} />
                <ErrorMessage name="aedTotal" />
              </Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Item
                label="INR Total Amount"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Field type="number" name="inrTotal" as={Input} />
                <ErrorMessage name="inrTotal" />
              </Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Item
                label="AED price in INR"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Field type="number" name="aedTotalinInr" as={Input} />
                <ErrorMessage name="aedTotalinInr" />
              </Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Item
                label="INR Savings"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Field type="number" name="inrSavings" as={Input} />
                <ErrorMessage name="inrSavings" />
              </Item>
            </Col>
            <Col className="gutter-row" span={6}></Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={2}>
              <Button type="primary" htmlType="submit" loading={isSubmitting}>
                Submit
              </Button>
            </Col>
            <Col className="gutter-row" span={2}>
              <Button type="default" onClick={() => resetForm()} danger>
                Reset Form
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default GoldForm;
