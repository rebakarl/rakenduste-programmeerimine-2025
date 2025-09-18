import { createHashRouter } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Something from './Components/Something';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/something',
    element: <Something />,
  },
]);

export default router;