import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './component/About/About';
import Error from './component/Error/Error';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Friends from './component/Friends/Friends';
import Gallery from './component/Gallery/Gallery';
import Home from './component/Home/Home';
import Main from './component/Layout/Main';
import LogIn from './component/LogIn/LogIn';
import Postdetails from './component/Postdetails/Postdetails';
import Posts from './component/Posts/Posts';
import Products from './component/Products/Products';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: 'about', element: <About></About> },
        {
          path: 'products',
          loader: async () => {
            return fetch('https://fakestoreapi.com/products')
          },
          element: <Products></Products>
        },
        {
          path: 'posts',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element: <Posts></Posts>
        },
        {
          path: 'login',
          element: <LogIn></LogIn>
        },
        {
          path: 'gallery',
          loader: async () => {
            return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
          },
          element: <Gallery></Gallery>
        },
        {
          path: 'friends',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends></Friends>
        },
        {
          path: '/friend/:friendId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path: '/post/:postId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <Postdetails></Postdetails>
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
