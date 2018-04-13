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

import index from './styles/about.css';

const About = () => (
  <div>
    <div className="Content" id="About">
      <h1>About</h1>
      <p>Runway is desktop application that allows to easily run state of the art machine learning models and use them in creative and interactive ways.</p>
      <h3>Why?</h3>
      <p>
      While commercial applications of machine learning can be found everywhere, experimentation of new prototypes and techniques remains - for the most- confined to computer scientists or engineers and has a limited reach to other fields.
      
      This project is an attempt to make machine learning models and ML related tools more accessible to artist, designers and anyone curious about this topic.</p>

      <br />

      <p>Runway is a project made by <a href="http://cvalenzuelab.com">Cristóbal Valenzuela</a>.</p>
    </div>
    <hr />
  </div>
);

export default About