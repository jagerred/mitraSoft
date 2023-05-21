import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Post from '../Post/Post';
import LazyLoader from '../LazyLoader/LazyLoader';

const Posts = () => {
	const { posts, loadingStatus } = useSelector(state => state.posts);

	const renderPosts = posts.map(({ userId, body, id, title, comments }) => (
		<Post
			key={id}
			userId={userId}
			body={body}
			id={id}
			title={title}
			comments={comments}
		/>
	));
	if (loadingStatus === 'loading') return <LazyLoader />;
	return (
		<Container className='d-flex flex-column p-0'>{renderPosts}</Container>
	);
};

export default Posts;
