import React from "react";
import styled from "styled-components";
import { ErrorMessage as FormikErrorMessage } from "formik";

interface StyledComponentProps {}

const Error = styled.div<StyledComponentProps>`
  color: red;
`;

// Define the type for the props
interface ErrorMessageProps {
  name: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ name }) => {
  return (
    <FormikErrorMessage name={name}>
      {(msg: string) => <Error>{msg}</Error>}
    </FormikErrorMessage>
  );
};

export default ErrorMessage;
