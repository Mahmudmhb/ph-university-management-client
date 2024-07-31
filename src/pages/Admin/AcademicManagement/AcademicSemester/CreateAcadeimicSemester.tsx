import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../../components/form/PHSelect";
import { nameOptions } from "../../../../components/Constents/semester";
import { monthOptions } from "../../../../components/Constents/gobel";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../../Schemas/academicManagement.shema";
import { useCrateAcademicSemesterMutation } from "../../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../../types/gobalTypes";

const CreateAcadeimicSemester = () => {
  const currentYear = new Date().getFullYear();
  const [addAcademicSemester] = useCrateAcademicSemesterMutation();

  const yearOption = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((year) => ({
    value: String(currentYear + year),
    lebel: String(currentYear + year),
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("createing......");
    // console.log(data);
    const name = nameOptions[Number(data?.name) - 1]?.lebel;
    // console.log(name);
    const semesterData = {
      name,
      code: data?.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    // console.log(semesterData);
    try {
      const res = (await addAcademicSemester(semesterData)) as TResponse;
      // console.log(res);
      if (res.error) {
        toast.error(res.error?.data.message, { id: toastId });
      } else {
        toast.success("new semester create succssful", { id: toastId });
      }
    } catch (error) {
      toast.error(`${error}`, { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect lebel={"Name"} name="name" options={nameOptions} />
          <PHSelect lebel={"Year"} name="year" options={yearOption} />
          <PHSelect
            lebel={"Start Month"}
            name="startMonth"
            options={monthOptions}
          />
          <PHSelect
            lebel={"End Month"}
            name="endMonth"
            options={monthOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcadeimicSemester;
