import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './component/About/About';
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
        { path: 'friends', element: <Friends></Friends> },
        { path: 'products', element: <Products></Products> }
      ]
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
