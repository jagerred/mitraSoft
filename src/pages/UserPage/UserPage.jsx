import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Posts from '../../components/Posts/Posts';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/slices/posts';

const UserPage = () => {
	const { posts } = useSelector(state => state.posts);
	const { userId } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPosts(userId));
	}, []);
	const goBack = () => navigate(-1);
	return (
		<Container className='p-0'>
			<Button className='mb-2' onClick={goBack}>
				Назад
			</Button>
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
