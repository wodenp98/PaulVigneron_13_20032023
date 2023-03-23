import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email,
          password,
        }
      );
      const token = response.data.body.token;
      localStorage.setItem("token", token);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const userProfile = createAsyncThunk("user/getProfile", async () => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data.body;
  } catch (error) {
    console.log(error);
  }
});
