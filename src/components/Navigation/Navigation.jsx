import { Container, Dropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import AvatarIcon from '../Avatar/Avatar';

const Navigation = () => (
	<Navbar bg='primary' variant='dark' className='mb-2'>
		<Container>
			<Dropdown>
				<Dropdown.Toggle id='dropdown-basic'>
					<BurgerIcon />
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item as={Link} to='/'>
						Список постов
					</Dropdown.Item>
					<Dropdown.Item as={Link} to='/about'>
						Обо мне
					</Dropdown.Item>
					<Container className='myInfo fw-semibold pt-2'>
						<AvatarIcon className='myInfoAvatar' />
						<span>Владислав Грицавка</span>
						<span>v.gritsavka@gmail.com</span>
					</Container>
				</Dropdown.Menu>
			</Dropdown>
		</Container>
	</Navbar>
);

export default Navigation;
