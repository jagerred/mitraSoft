import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Posts from '../../components/Posts/Posts';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/slices/posts';

const UserPage = () => {
	const { posts } = useSelector(state => state.posts);
	const { userId } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPosts(userId));
	}, []);
	return (
		<Container className='p-0'>
			<Container className='userInfo'>
				<h3>{`Пользователь ${userId}`}</h3>
				<span>{`Всего ${posts.length} постов`}</span>
			</Container>
			<h2>Его посты</h2>
			<Posts />
		</Container>
	);
};

export default UserPage;
