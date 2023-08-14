import type { DatePickerProps } from "antd";
import styled from 'styled-components'; 
import { DatePicker, Space } from "antd";
import { Counter } from "./components/Counter";

const Heading = styled.h1<{ active: boolean }>`
  color: ${(props) => (props.active ? "red" : "blue")};
`;

function App() {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>
      <Counter />
      <Heading active>Active</Heading>
      <Heading active={false}>In Active</Heading>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} picker="week" />
        <DatePicker onChange={onChange} picker="month" />
        <DatePicker onChange={onChange} picker="quarter" />
        <DatePicker onChange={onChange} picker="year" />
      </Space>
    </div>
  );
}

export default App;
