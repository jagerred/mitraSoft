import './App.css';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import AllPostsPage from '../../pages/AllPostsPage/AllPostsPage';
import Navigation from '../Navigation/Navigation';
import UserPage from '../../pages/UserPage/UserPage';
import AboutPage from '../../pages/AboutPage/AboutPage';

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<AllPostsPage />} />
				<Route path='/user/:userId' element={<UserPage />} />
				<Route path='/about' element={<AboutPage />} />
			</Routes>
		</>
	);
}

export default App;
