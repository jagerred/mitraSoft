import axios from 'axios';
import { GET_POSTS, getPostsSuccess } from '../slices/posts';
import { put, takeEvery } from 'redux-saga/effects';

export function* getPostsSaga(userId) {
	const params = userId.payload ? `?userId=${userId.payload}` : '';
	const { data } = yield axios(
		`https://jsonplaceholder.typicode.com/posts${params}`
	);
	yield put(getPostsSuccess(data));
}

export function* sagas() {
	yield takeEvery(GET_POSTS, getPostsSaga);
}
