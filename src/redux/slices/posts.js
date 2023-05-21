import { createAction, createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
	},
	reducers: {
		getPostsSuccess: (state, action) => {
			state.posts = action.payload;
		},
	},
});
export const GET_POSTS = 'posts/getPosts';
export const getPosts = createAction(GET_POSTS);

export const { getPostsSuccess } = postsSlice.actions;

export default postsSlice.reducer;
