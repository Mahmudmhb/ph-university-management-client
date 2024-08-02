import {
  TAcademicSemester,
  TQueryParams,
  TResponseRedux,
} from "../../../types/gobalTypes";
import { baseApi } from "../../Api/baseApi";

export const academicManganmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    crateAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
    getAllSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        // params.append(args[0].name, args[0].value);
        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        console.log(response);
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),
  }),
});
export const { useCrateAcademicSemesterMutation, useGetAllSemestersQuery } =
  academicManganmentApi;
