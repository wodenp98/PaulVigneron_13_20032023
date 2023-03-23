import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userProfile, userUpdateProfile } from "./thunk";

const initialState = {
  firstName: "",
  lastName: "",
  token: null,
  isAuthenticated: false,
  update: false,
  isLoading: false,
  error: null,
};

// token?
// true ou !state

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout(state) {
      state.isAuthenticated = false;
      state.firstName = "";
      state.lastName = "";
      state.token = localStorage.removeItem("token");
    },
    userUpdate(state) {
      state.update = !state.update;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(userProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(userProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(userUpdateProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userUpdateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.token = action.payload.token;
        state.update = !state.update;
        state.isAuthenticated = true;
      })
      .addCase(userUpdateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { userLogout, userUpdate } = userSlice.actions;

export default userSlice.reducer;
