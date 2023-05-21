import { Card, Container } from 'react-bootstrap';

const AboutPage = () => {
	return (
		<Container className='p-0'>
			<Card>
				<Card.Body>
					<Card.Header className='text-center mb-2'>
						Заголовок обо мне
					</Card.Header>
					<Card.Text>Основной текст</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default AboutPage;
