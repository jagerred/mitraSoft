import { Container, Dropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BurgerIcon from '../BurgerIcon/BurgerIcon';

const Navigation = () => (
	<Navbar bg='primary' variant='dark' className='mb-2'>
		<Container>
			<Dropdown>
				<Dropdown.Toggle id='dropdown-basic'>
					<BurgerIcon />
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item as={Link} to='/'>
						Посты
					</Dropdown.Item>
					<Dropdown.Item as={Link} to='/about'>
						О себе
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</Container>
	</Navbar>
);

export default Navigation;
