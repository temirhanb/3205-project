import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {API} from "../../shared";
import { IUser} from "../slices/userList";

export const fetchUserThunk = createAsyncThunk<IUser[]>("todoList/fetch", async () => {
  const {data} = await axios.get<IUser[]>(API);

  return data;
});
