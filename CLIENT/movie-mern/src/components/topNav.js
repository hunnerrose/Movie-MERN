<<<<<<< HEAD
import React from 'react';
import logo from '../img/Shmovie.png';

export default function TopNav({ query, setQuery }) {
  return (
    <header
      id='header'
      className='mb-2 mx-5'
    >
      <div class='flex items-center justify-between'>
        <a
          href='/'
          class='text-white no-underline'
        >
          <h3 class='relative rounded-full bg-black px-[9px] flex-1'>
            <span class='text-gray-500'>SHMOVIE </span>{' '}
            <span class='text-white z-10'>FANATICS</span>
          </h3>
        </a>
=======
import React from "react";
import logo from "../img/Shmovie.png";
import "../index.css";

export default function TopNav({ query, setQuery }) {
  return (
    <header id="header" className="mb-2 mx-5">
      <div class="flex items-center justify-between">
        <div className="image-container">
          <a href="/" className="text-white no-underline">
            {/*<h3 className="text-white">SHMOVIE FANATICS</h3>*/}
            <img src={logo} alt="SHMOVIE FANATICS" className="image" />
          </a>
        </div>
>>>>>>> origin/mig_app
        <span>
          <input
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search...'
            class='w-full h-12 rounded-full mb-2 p-4 bg-transparent outline-none transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-2 border-blue-500 text-white focus:text-gray-400 focus:-translate-y-1 focus:scale-110 focus:border-blue-500'
          />
        </span>
      </div>
    </header>
  );
}
