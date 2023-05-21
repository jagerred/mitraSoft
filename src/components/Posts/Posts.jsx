import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Post from '../Post/Post';

const Posts = () => {
	const { posts } = useSelector(state => state.posts);
	const renderPosts = posts.map(({ userId, body, id, title }) => (
		<Post key={id} userId={userId} body={body} id={id} title={title} />
	));
	return (
		<Container className='d-flex flex-column p-0'>{renderPosts}</Container>
	);
};

export default Posts;
