import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../types";
import { api } from "../lib/api";

interface PostsState {
  items: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: PostsState = {
  items: [],
  status: "idle",
};

export const fetchPosts = createAsyncThunk("posts/fetchAll", async () => {
  const res = await api.get<Post[]>("/posts");
  return res.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default postsSlice.reducer;
