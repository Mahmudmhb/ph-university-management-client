import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TSelectProps = {
  lebel: string;
  name: string;
  options: { value: string; lebel: string; disabled?: boolean }[];
};

const PHSelect = ({ lebel, name, options }: TSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={lebel}>
          <Select style={{ width: "100%" }} {...field} options={options} />
          {error && <small style={{ color: "red" }}>{error.message} </small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
