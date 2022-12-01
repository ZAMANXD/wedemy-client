import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddReviews from './components/AddReviews/AddReviews';
import DisplayReviews from './components/DisplayReviews/DisplayReviews';
import AddCourse from './pages/AddCourse/AddCourse';
import Blogs from './pages/Blogs/Blogs';
import Broken from './pages/Broken/Broken';
import CourseDetails from './pages/CourseDetails/CourseDetails';
import Courses from './pages/Courses/Courses';
import Home from './pages/Home/Home';
import Main from './pages/Main/Main';
import MyReviews from './pages/MyReviews/MyReviews';

import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import UpdateReview from './pages/UpdateReview/UpdateReview';
import User from './pages/User/User';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://befr-server.vercel.app/courses'),
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>,
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
          loader: () => fetch('https://befr-server.vercel.app/courses'),
        },

        {
          path: '/login',
          element: <SignIn></SignIn>,
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>,
        },
        {
          path: '/dashboard',
          element: (
            <PrivateRoute>
              <User></User>
            </PrivateRoute>
          ),
        },
        {
          path: '/display-reviews',
          loader: () => fetch('https://befr-server.vercel.app/reviews'),
          element: <DisplayReviews></DisplayReviews>,
        },

        {
          path: '/course-details/:id',
          loader: ({ params }) =>
            fetch(`https://befr-server.vercel.app/courses/${params.id}`),
          element: <CourseDetails></CourseDetails>,
        },
        {
          path: '/addreview',
          element: (
            <PrivateRoute>
              <AddReviews></AddReviews>
            </PrivateRoute>
          ),
        },

        {
          path: '/addcourse',
          element: (
            <PrivateRoute>
              <AddCourse></AddCourse>
            </PrivateRoute>
          ),
        },
        {
          path: '/myreview',
          loader: () => fetch('https://befr-server.vercel.app/reviews'),
          element: (
            <PrivateRoute>
              <MyReviews></MyReviews>
            </PrivateRoute>
          ),
        },
        {
          path: '/update/:id',
          element: <UpdateReview></UpdateReview>,
          loader: ({ params }) =>
            fetch(`https://befr-server.vercel.app/reviews/${params.id}`),
        },
        {
          path: '*',
          element: <Broken></Broken>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
