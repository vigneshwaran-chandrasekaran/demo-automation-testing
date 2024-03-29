import { FC } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { Button, Col, Row } from "antd";
import * as Yup from "yup";
import { FormInput } from "../common";

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
  goldInGrams: 18.38,
  aedToinr: 22.66,
  aedGoldPrice: 223.5,
  inrGoldPrice: 5635,
  aedWastage: 0,
  aedVat: 5,
  aedCardCharges: 0,
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
              <FormInput
                name="goldInGrams"
                label="Gold in Grams"
                placeholder="Gold in Grams"
                type="number"
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <FormInput name="aedToinr" label="AED to INR" type="number" />
            </Col>
            <Col className="gutter-row" span={6}></Col>
            <Col className="gutter-row" span={6}></Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
              <FormInput
                name="aedGoldPrice"
                label="AED Gold Price"
                type="number"
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <FormInput
                name="aedWastage"
                label="AED Gold Wastage"
                type="number"
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <FormInput name="aedVat" label="AED VAT Tax" type="number" />
            </Col>
            <Col className="gutter-row" span={6}>
              <FormInput
                name="aedCardCharges"
                label="AED Card Charges"
                type="number"
              />
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
              <FormInput
                name="inrGoldPrice"
                label="INR Gold price"
                type="number"
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <FormInput
                name="inrWastage"
                label="INR Gold Wastage"
                type="number"
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <FormInput name="inrGst" label="INR GST Tax" type="number" />
            </Col>
            <Col className="gutter-row" span={6}>
              <FormInput
                name="inrCardCharges"
                label="INR Card Charges"
                type="number"
              />
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
              <FormInput name="aedTotal" label="AED Gold price" disabled />
            </Col>
            <Col className="gutter-row" span={6}>
              <FormInput name="inrTotal" label="INR Total Amount" disabled />
            </Col>
            <Col className="gutter-row" span={6}>
              <FormInput
                name="aedTotalinInr"
                label="AED price in INR"
                disabled
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <FormInput name="inrSavings" label="INR Savings" disabled />
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


// https://goldprice.org/gold-price-united-arab-emirates.html
// https://gulfnews.com/gold-forex/historical-gold-rates
// https://igold.ae/gold-rate/24-carat
// https://www.uaegoldprice.com/
