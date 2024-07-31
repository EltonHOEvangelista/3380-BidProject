import React from 'react';

import {NavLink} from 'react-router-dom';

const Header = () => (
  <>
    <header>
      <h1>Header</h1>
    </header>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="addvehicle">Add Vehicle</NavLink></li>
      </ul>
    </nav>
  </>
);

export default Header;