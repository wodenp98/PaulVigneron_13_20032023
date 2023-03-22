import { createSlice } from "@reduxjs/toolkit";
import { loginUser, profileUser } from "./thunk";

// Définition de l'état initial
const initialState = {
  firstName: "",
  lastName: "",
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// Création du slice pour l'utilisateur
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.firstName = "";
      state.lastName = "";
      state.token = null;
      state.token = null;
    },
  },

  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [profileUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [profileUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.token = action.payload.token;
    },
    [profileUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

// Export des actions générées automatiquement par createSlice
export const { logout } = userSlice.actions;

// Export du reducer
export default userSlice.reducer;
