import { createBrowserRouter } from 'react-router-dom';
import App from './app/page';
import Recommendation from './app/cataloging/Recommendation';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'recommendations',
        element: <Recommendation />,
      },
      {
        path: 'recommendations/:gameId',
        element: <Recommendation />,
      },
    ],
  },
]);