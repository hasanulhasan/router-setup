import React, { useState } from 'react';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { Result } from 'postcss';

const auth = getAuth(app)

const LogIn = () => {
  const [user, setUser] = useState({})
  const handleGoogleSignOut = () => {
    signOut(auth);
    setUser({});
  }
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch(error => {
        console.log('error', error);
      })
  }
  const provider = new GoogleAuthProvider();
  return (
    <div className='flex justify-center'>
      <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary block">Sign in</button>
      <button onClick={handleGoogleSignOut} className="btn btn-outline btn-primary ml-5 block">Sign Out</button>
      {
        user.email && <div className='text-2xl'>
          <p>{user.displayName}</p>
          <p>{user.email}</p>
          <img src={user.photoURL} alt='..' />
        </div>
      }
    </div>
  );
};

export default LogIn;