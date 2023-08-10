import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";

function App() {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>
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
