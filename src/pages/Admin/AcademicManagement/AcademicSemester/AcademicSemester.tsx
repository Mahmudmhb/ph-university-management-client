import { useGetAllSemestersQuery } from "../../../../redux/features/admin/academicManagement.api";

import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TAcademicSemester, TQueryParams } from "../../../../types/gobalTypes";
import { useState } from "react";

type TTableData = Pick<
  TAcademicSemester,
  "name" | "year" | "startMonth" | "endMonth"
>;

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParams[] | undefined>([]);
  const { data: semesterData, isFetching } = useGetAllSemestersQuery(params);
  const tableData = semesterData?.data?.map(
    ({ _id, name, year, code, startMonth, endMonth }) => ({
      key: _id,
      name,
      year,
      code,
      startMonth,
      endMonth,
    })
  );
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
        {
          text: "2027",
          value: "2027",
        },
        {
          text: "2028",
          value: "2028",
        },
      ],
    },
    {
      title: "Start Month",
      key: "startMonth",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      key: "endMonth",
      dataIndex: "endMonth",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queayParams: TQueryParams[] = [];
      filters.name?.forEach((item) =>
        queayParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item) =>
        queayParams.push({ name: "year", value: item })
      );

      setParams(queayParams);
    }
    console.log("params", pagination, filters, sorter, extra);
  };
  // console.log(data);
  return (
    <div>
      <h1>Hello, AcademicSemester!</h1>
      <Table
        columns={columns}
        loading={isFetching}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default AcademicSemester;
