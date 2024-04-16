import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Sobre from '../pages/about'
import NotFound from '../pages/404'
import Contact from '../pages/contact'
import Tasks from '../pages/tasks'

const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound />},
  {path: '/about', element: <Sobre />},
  {path: '/contact', element: <Contact />},
  {path: '/tasks', element: <Tasks />}
])

export default router