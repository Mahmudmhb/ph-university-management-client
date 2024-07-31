import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type TFormCofig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};
type TPhFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormCofig;

const PHForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TPhFormProps) => {
  const formConfig: TFormCofig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methords = useForm(formConfig);

  return (
    <FormProvider {...methords}>
      <Form layout="vertical" onFinish={methords.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHForm;
