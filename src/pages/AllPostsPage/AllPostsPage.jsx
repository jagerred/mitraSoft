import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Posts from '../../components/Posts/Posts';
import { getPosts } from '../../redux/slices/posts';

const AllPostsPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return <Posts />;
};

export default AllPostsPage;
