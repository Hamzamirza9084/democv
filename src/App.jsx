import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
import Skill from './Skill/Skill';
import Education from './Education/Education';
import About_me from './About_me/About_me';
import Contact from './Contactme/Contact';

const BASE_URL = '/democv'; // Replace with your base URL

function App() {
  const router = createBrowserRouter([
    {
      path: `${BASE_URL}/`, // Home route
      element: <Home />,
    },
    {
      path: `${BASE_URL}/skill`, // Skill route
      element: <Skill />,
    },
    {
      path: `${BASE_URL}/education`, // Education route
      element: <Education />,
    },
    {
      path: `${BASE_URL}/about`, // About Me route
      element: <About_me />,
    },
    {
      path: `${BASE_URL}/contact`, // Contact route
      element: <Contact />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
