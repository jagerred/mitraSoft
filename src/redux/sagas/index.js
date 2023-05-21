import axios from 'axios';
import {
	GET_COMMENTS,
	GET_POSTS,
	changeLoadingStatus,
	getCommentsSuccess,
	getPostsSuccess,
} from '../slices/posts';
import { put, takeEvery } from 'redux-saga/effects';
import { delay } from '../../utils/delay';

export function* getPostsSaga(userId) {
	const params = userId.payload ? `?userId=${userId.payload}` : '';
	yield put(changeLoadingStatus('loading'));
	const { data } = yield axios(
		`https://jsonplaceholder.typicode.com/posts${params}`
	);
	yield delay(0.5);
	yield put(getPostsSuccess(data));
	yield put(changeLoadingStatus('idle'));
}

export function* getCommentsSaga(postId) {
	const { data } = yield axios(
		`https://jsonplaceholder.typicode.com/posts/${postId.payload}/comments`
	);
	yield delay(0.5);
	yield put(getCommentsSuccess({ id: postId.payload, data }));
}

export function* sagas() {
	yield takeEvery(GET_POSTS, getPostsSaga);
	yield takeEvery(GET_COMMENTS, getCommentsSaga);
}
