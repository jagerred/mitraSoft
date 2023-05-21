import './App.css';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../Navigation/Navigation';
import { lazy } from 'react';
import { suspenseComponent } from '../../utils/suspenceComponent';

const AllPostsPage = lazy(() =>
	import('../../pages/AllPostsPage/AllPostsPage')
);
const UserPage = lazy(() => import('../../pages/UserPage/UserPage'));
const AboutPage = lazy(() => import('../../pages/AboutPage/AboutPage'));

const App = () => {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={suspenseComponent(<AllPostsPage />)} />
				<Route path='/user/:userId' element={suspenseComponent(<UserPage />)} />
				<Route path='/about' element={suspenseComponent(<AboutPage />)} />
			</Routes>
		</>
	);
};

export default App;
