import React from "react";
import {FaSearch} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector(state => state.user)
  return (
    <header className="bg-blue-300 shadow-md ">
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto ">
        <Link to='/'>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-blue-500">Luxurious</span>
            <span className="text-blue-600">Real-Estate</span>
          </h1>
        </Link>
        <form
          className="flex items-center p-3 rounded-lg bg-blue-200">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-blue-500 ml-2"/>
        </form>
        <ul className="flex gap-4 " >
          <Link to={'/'}> 
          <li className="hidden sm:inline text-blue-600 hover:underline" >
            Home</li>
          </Link>
          <Link to={'/about'}>
            <li className="hidden sm:inline text-blue-600 hover:underline">
              About</li>
          </Link>
          <Link to={'/profile'}>
          {
            currentUser ? ( 
            <img  className="rounded-full h-7 w-7 object-cover" src={currentUser.avatar} alt="profile_pic"/> ) 
            : (<li className="sm:inline text-blue-600 hover:underline">Sign-in</li>)
          }
          </Link>
            
        </ul>
      </div>
    </header>
  );
}
