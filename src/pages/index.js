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

import index from './styles/index.css';

const IndexPage = () => (
  <div>
    <div className="Intro">
      <div className="Demo">
        <h2>Machine Learning for <span>Everyone</span></h2>
        <img src="static/img/banner2.png" alt="runway demo" />
      </div>
    </div>

    <div className="About" id="about">
      <div className="VideoDemo">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/7mCAKceSPIM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <h3>Open-source state of the art machine learning models you can use everywhere</h3>
      <div className="Diagram">
        <img src="static/img/logos/icon.png" alt="runway" className="LogoDiagram" />
        <h4>Runs a Machine Learning Model</h4>
        <div className="VerticalLine"></div>

        <h4>Connect via HTTP, Sockets or OSC to your favorite app</h4>

        <a href="https://processing.org/">
          <img className="AppLogo" alt="Processing" src="static/img/logos/processing.png" />
        </a>
        <a href="https://unity3d.com/">
          <img className="AppLogo" alt="Unity" src="static/img/logos/unity.png" />
        </a>
        <a>
          <img className="AppLogo" alt="javascript" src="static/img/logos/js.png" />
        </a>
        <a href="http://openframeworks.cc/">
          <img className="AppLogo" alt="openframeworks" src="static/img/logos/of.png" />
        </a>
        <a href="https://cycling74.com/products/max/">
          <img className="AppLogo" alt="maxmsp" src="static/img/logos/maxmsp.png" />
        </a>
        <a href="https://www.arduino.cc/">
          <img className="AppLogo" alt="arduino" src="static/img/logos/arduino.png" />
        </a>
        <a href="https://www.blender.org/">
          <img className="AppLogo" alt="blender" src="static/img/logos/blender.png" />
        </a>
      </div>
    </div>


    <div className="Download">
      <h5>Version 1.0 is coming soon!</h5>
      <p>Interested? Let's talk! </p>
      <a href="mailto:info@runwayml.com">
        <button>Request Pre-Release</button>
      </a>
      <a href="mailto:info@runwayml.com">
        <button>Contact</button>
      </a>
    </div>
  </div>
)

export default IndexPage
