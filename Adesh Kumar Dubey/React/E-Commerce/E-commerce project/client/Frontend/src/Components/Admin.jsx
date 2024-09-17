import React from 'react';
import Nav from './Nav';

function Admin({ user }) {
  return (
    <>
      <div className='bg-slate-800 w-full h-screen'>
        <Nav />
        <div className='text-white font-bold text-8xl flex flex-col items-center justify-center h-full'>
          <h2 className="mt-1/2">Hello {user.name}</h2>
          <h1 className="text-6xl">Admin Panel</h1>
        </div>
      </div>
    </>
  );
}

export default Admin;
