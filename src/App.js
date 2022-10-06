import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './component/About/About';
import Home from './component/Home/Home';
import Products from './component/Products/Products';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div>This is Defualt Page</div> },
    { path: 'home', element: <Home></Home> },
    { path: 'about', element: <About></About> },
    { path: 'products', element: <Products></Products> }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
