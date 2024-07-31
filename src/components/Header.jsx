import React from 'react';

import {Link, NavLink} from 'react-router-dom';

const Header = () => (
  <>
    <header className='bg-blue-950
     p-3 shadow-md border-b-2'>
      <Link to={"/"} className="flex items-center gap-2 ">
        <img src="/assets/logo_nobg.png" alt="Logo" className="object-contain w-[350px]" />
      </Link>
    </header>
    <nav className='bg-blue-950 p-3'>
      <ul className="flex space-x-4">
        <li className="transition-colors duration-300 hover:bg-blue-900 rounded-xl">
          <NavLink
            to="/"
            className="text-white block px-4 py-2"
            activeClassName="bg-blue-700 rounded"
          >
            Home
          </NavLink>
        </li>
        <li className="transition-colors duration-300 hover:bg-blue-900 rounded-xl">
          <NavLink
            to="/addvehicle"
            className="text-white block px-4 py-2"
            activeClassName="bg-blue-700 rounded"
          >
            Add Vehicle
          </NavLink>
        </li>
      </ul>
    </nav>
  </>
);


export default Header;