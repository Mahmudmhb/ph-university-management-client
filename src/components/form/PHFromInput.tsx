import { Form } from "antd";
import Input from "antd/es/input/Input";
import { Controller } from "react-hook-form";
type TPhInputForm = {
  type: string;
  name: string;
  label?: string;
};

const PHFromInput = ({ type, name, label }: TPhInputForm) => {
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <Controller
          name={name}
          render={({ field }) => (
            <Form.Item label={label}>
              <Input type={type} {...field} id={name} />
            </Form.Item>
          )}
        />
      </div>
    </>
  );
};

export default PHFromInput;
