import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { About, Contact, Experiences, Work } from '../pages';

export const getRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'experiences',
          element: <Experiences />,
        },
        {
          path: 'work',
          element: <Work />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
      ],
    },
  ]);
