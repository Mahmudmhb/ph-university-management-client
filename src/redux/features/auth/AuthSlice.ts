import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
type TAuthSlice = {
  user: null | object;
  token: null | object;
};
const initialState: TAuthSlice = {
  user: null,
  token: null,
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});
export const { setUser, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
export const useCurrentToken = (state: RootState) => state.auth.token;
export const useCurrentUser = (state: RootState) => state.auth.user;
