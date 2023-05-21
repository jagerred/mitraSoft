import { Card, Container, Spinner } from 'react-bootstrap';

const Comments = ({ comments }) => {
	const renderComments = () =>
		comments.map(({ email, body, id }) => (
			<Card key={id}>
				<Card.Body>
					<Card.Title>{email}</Card.Title>
					<Card.Body>{body}</Card.Body>
				</Card.Body>
			</Card>
		));
	return (
		<Container className='comments'>
			{!comments ? (
				<Spinner animation='border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			) : (
				renderComments()
			)}
		</Container>
	);
};

export default Comments;
