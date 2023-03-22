import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      { email, password }
    );

    const { firstName, lastName, token } = response.data;

    localStorage.setItem("token", token);

    return { firstName, lastName, token };
  }
);

export const profileUser = createAsyncThunk(
  "user/getProfile",
  async ({ token }) => {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      { token }
    );
    return response.data;
  }
);
