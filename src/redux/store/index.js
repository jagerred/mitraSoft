import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../slices/posts';
import createSagaMiddleware from 'redux-saga';
import { sagas } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		posts: postsReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(sagas);
