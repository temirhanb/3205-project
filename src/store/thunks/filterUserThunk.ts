import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {API} from "../../shared";

export const filterTodosThunk = createAsyncThunk("users/filter",
  async ({
           email,
           number
         }: { email: string, number: number }) => {

    const CancelToken = axios.CancelToken;

    const source = CancelToken.source();
    const dataReq = {email, number}
    const {data} = await axios.post(API, dataReq, {
      headers: {
        "Content-Type": "application/json",
      },
      cancelToken: source.token,
    });
    return data.models;
  });
