import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const LazyLoader = () => (
	<Container className='lazyLoader'>
		<Spinner animation='border' role='status'>
			<span className='visually-hidden'>Loading...</span>
		</Spinner>
	</Container>
);

export default LazyLoader;
