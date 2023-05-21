import { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AvatarIcon from '../Avatar/Avatar';
import Comments from '../Comments/Comments';
import { useDispatch } from 'react-redux';
import { getComments } from '../../redux/slices/posts';

const Post = ({ userId, title, body, id, comments }) => {
	const dispatch = useDispatch();
	const [isCommentsVisible, setIsCommentsVisible] = useState(false);
	const toggleComments = () => {
		setIsCommentsVisible(!isCommentsVisible);
		dispatch(getComments(id));
	};
	return (
		<Card className='mb-2'>
			<Card.Body>
				<Link to={`/user/${userId}`} className='p-1'>
					<AvatarIcon />
				</Link>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{body}</Card.Text>
				{isCommentsVisible && <Comments comments={comments} />}
				<Button onClick={toggleComments}>
					{isCommentsVisible ? 'Скрыть' : 'Комментарии'}
				</Button>
			</Card.Body>
		</Card>
	);
};

export default Post;
