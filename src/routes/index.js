import routesPaths from './routesPaths';
import Home from 'pages/Home/Home';
import Signup from 'pages/Signup/Signup';
import Login from 'pages/Login/Login';

const routes = [
  {
    path: routesPaths.index,
    component: <Home />,
    exact: true,
    private: true,
  },
  {
    path: routesPaths.signup,
    component: <Signup />,
  },
  {
    path: routesPaths.login,
    component: <Login />,
  },
];

export default routes;
