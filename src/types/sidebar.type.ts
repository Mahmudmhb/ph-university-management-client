import { ReactNode } from "react";

export type TSideBar = {
  key: string;
  label: ReactNode;
  children?: TSideBar[];
};
export type TuserPaths = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TuserPaths[];
};
export type TRoute = {
  path: string;
  element: ReactNode;
};
