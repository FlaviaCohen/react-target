import routesPaths from './routesPaths';
import Home from 'pages/Home/Home';
import Signup from 'pages/Signup/Signup';
import Login from 'pages/Login/Login';
import Profile from 'pages/Profile/Profile';
import About from 'pages/About/About';
import NewTarget from 'pages/NewTarget/NewTarget';

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
  {
    path: routesPaths.about,
    component: <About />,
  },
  {
    path: routesPaths.profile,
    component: <Profile />,
    private: true,
  },
  {
    path: routesPaths.newTarget,
    component: <NewTarget />,
    private: true,
  },
];

export default routes;
