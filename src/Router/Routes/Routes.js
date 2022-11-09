import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import About from '../../pages/About/About';
import Home from '../../pages/Home/Home';
import Join from '../../components/Join/Join';
import Reviews from '../../pages/Reviews/Reviews';
import Blog from '../../pages/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/reviews',
        element: <Reviews></Reviews>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/join',
        element: <Join></Join>,
      },
    ],
  },
]);

export default router;
