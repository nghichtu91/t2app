import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/user";
import { UserState } from "./state";
const initialState: UserState = {};

const userSlice = createSlice({
  name: "userslice",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<User>) => {
      state.user = { ...action.payload };
    },
  },
});

export default userSlice.reducer;
