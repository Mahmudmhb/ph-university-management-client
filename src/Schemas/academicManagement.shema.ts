import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: "Please select the name" }),
  year: z.string({ required_error: "Please select the year" }),
  startMonth: z.string({ required_error: "Please select the start month" }),
  endMonth: z.string({ required_error: "Please select the end month" }),
});
