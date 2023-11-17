import React from "react";
import { Field } from "formik";
import { Form as AntForm, Input } from "antd";
import { ErrorMessage } from "../common";

const { Item } = AntForm;

// Define the type for the props
interface ErrorMessageProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

const FormInput: React.FC<ErrorMessageProps> = ({
  name,
  label,
  placeholder = "",
  type = "text",
}) => {
  return (
    <Item label={label} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
      <Field type={type} name={name} as={Input} placeholder={placeholder} />
      <ErrorMessage name={name} />
    </Item>
  );
};

export default FormInput;
