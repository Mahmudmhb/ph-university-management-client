import { useGetAllSemestersQuery } from "../../../../redux/features/admin/academicManagement.api";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>Hello, AcademicSemester!</h1>
    </div>
  );
};

export default AcademicSemester;
