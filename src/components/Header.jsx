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
    <nav className='bg-blue-950 p-3 rounded-b-2xl'>
      <ul className="flex space-x-4">
        <li className="transition-colors duration-300 hover:bg-blue-900 rounded-xl">
          <NavLink
            to="/"
            className="text-white px-4 py-2 flex items-center justify-center"
            activeClassName="bg-blue-700 rounded"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Home
          </NavLink>
        </li>
        <li className="transition-colors duration-300 hover:bg-blue-900 rounded-xl">
          <NavLink
            to="/addvehicle"
            className="text-white block px-4 py-2 flex items-center justify-center"
            activeClassName="bg-blue-700 rounded"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
            Add Vehicle
          </NavLink>
        </li>
      </ul>
    </nav>
  </>
);


export default Header;