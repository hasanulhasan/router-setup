import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './component/About/About';
import Error from './component/Error/Error';
import Friends from './component/Friends/Friends';
import Home from './component/Home/Home';
import Main from './component/Layout/Main';
import Products from './component/Products/Products';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: 'home', element: <Home></Home> },
        { path: 'about', element: <About></About> },
        { path: 'products', element: <Products></Products> },
        {
          path: 'friends',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends></Friends>
        }
      ]
    },
    { path: '*', element: <Error></Error> }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
