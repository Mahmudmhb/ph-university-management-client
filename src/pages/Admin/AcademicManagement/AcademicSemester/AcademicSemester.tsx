import { useGetAllSemestersQuery } from "../../../../redux/features/AcademicSemester/academicSemesterApi";

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
