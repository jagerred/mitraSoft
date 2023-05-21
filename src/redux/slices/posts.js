import { createAction, createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		loadingStatus: 'idle',
	},
	reducers: {
		changeLoadingStatus: (state, action) => {
			state.loadingStatus = action.payload;
		},
		getPostsSuccess: (state, action) => {
			state.posts = action.payload;
		},
		getCommentsSuccess: (state, action) => {
			const { id, data } = action.payload;
			const post = state.posts.find(currentPost => currentPost.id === id);
			post.comments = data;
		},
	},
});

export const GET_POSTS = 'posts/getPosts';
export const getPosts = createAction(GET_POSTS);
export const GET_COMMENTS = 'posts/getComments';
export const getComments = createAction(GET_COMMENTS);

export const { getPostsSuccess, getCommentsSuccess, changeLoadingStatus } =
	postsSlice.actions;

export default postsSlice.reducer;
