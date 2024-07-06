import { jwtDecode, JwtPayload } from "jwt-decode";
export const veryfyToken = (token: string) => {
  return jwtDecode<JwtPayload>(token);
};
