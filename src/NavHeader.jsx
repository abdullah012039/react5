import React from 'react';
import { Link } from 'react-router-dom';

const NavHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavHeader;
