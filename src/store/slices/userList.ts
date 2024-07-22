import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUserThunk} from "../thunks/fetchUserThunk";
import {createTodosThunk} from "../thunks/filterUserThunk";
import {StatusRequest} from "../../shared";

export interface IUser {
  id: string;
  email: string;
  number: string;
}

export interface IInitialState {
  todos: IUser[];
  status: StatusRequest;
}

const initialState = {
  todos: [] as IUser[],
  status: StatusRequest.LOADING
} as IInitialState;

export const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    testAction: () => (console.log("slice")),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserThunk.pending, (state) => {
      state.status = StatusRequest.LOADING;
      state.todos = [];
    });
    builder.addCase(fetchUserThunk.rejected, (state, action) => {
      state.status = StatusRequest.ERROR;
      state.todos = [];
    });
    builder.addCase(fetchUserThunk.fulfilled, (state, action: PayloadAction<IUser[]>) => {
      state.status = StatusRequest.SUCCESS;
      state.todos = action.payload;
    });

    builder.addCase(createTodosThunk.pending, (state) => {
      state.status = StatusRequest.LOADING;

    });
    builder.addCase(createTodosThunk.rejected, (state, action) => {
      state.status = StatusRequest.ERROR;
    });
    builder.addCase(createTodosThunk.fulfilled, (state, action) => {
      state.status = StatusRequest.SUCCESS;
      state.todos.push(action.payload);
    });
  },
});

export default userListSlice.reducer;
