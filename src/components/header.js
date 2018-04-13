// Copyright (C) 2018 Cristobal Valenzuela
// 
// This file is part of RunwayML.
// 
// RunwayML is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// RunwayML is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with RunwayML.  If not, see <http://www.gnu.org/licenses/>.
// 

import React from 'react'
import Link from 'gatsby-link'

import './styles/header.css';

const Header = ({ siteTitle }) => (
  <div className="Header">

    <div className="Logo">
      <Link to="/">
        <img src="/static/img/logos/logo2.png" alt="runway" />
      </Link>
    </div>

    <div className="Menu">
      <ul>
        <Link to="/about/">
          <li>About</li>
        </Link>
        <Link to="/docs/install/">
          <li>Install</li>
        </Link>
        <Link to="/tutorials/">
        <li>Tutorials</li>
        </Link>
        <Link to="/examples/">
          <li>Examples</li>
        </Link>
        <a href="https://github.com/runwayml">
          <li>Github</li>
        </a>
        <Link to="/contact/">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  </div>
);

export default Header