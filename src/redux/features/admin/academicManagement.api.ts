import { baseApi } from "../../Api/baseApi";

export const academicManganmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    crateAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/afdfdsdfscademic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
    getAllSemesters: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
    }),
  }),
});
export const { useCrateAcademicSemesterMutation, useGetAllSemestersQuery } =
  academicManganmentApi;
