import React from "react";
import logo from "../img/Shmovie.png";
import "../index.css";

export default function TopNav({ query, setQuery }) {
  return (
    <header id="header" className="mb-2 mx-5">
      <div class="flex items-center justify-between">
        <div className="image-container">
          <a href="/" className="text-white no-underline">
            {/*<h3 className="logo-header">SHMOVIE FANATICS</h3>*/}
            <img src={logo} alt="SHMOVIE FANATICS" className="image" />
          </a>
        </div>
        <span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-48 h-12 rounded-full mr-5 mb-3 p-4 bg-transparent outline-none transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-2 border-blue-500 focus:text-gray-400 focus:-translate-y-1 focus:scale-110 focus:border-blue-500 text-white"
          />
        </span>
      </div>
    </header>
  );
}
