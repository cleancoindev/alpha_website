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

import './styles/index.css';

const Tutorials = () => (
  <div>
    <div className="Content">
      <img src="/static/img/icons/installTop.png" alt="install icon" className="IconTop"/>
      <h1>Tutorials</h1>
      <p>A list of tutorials on how to run and use machine learning models with Runway and how to connect them to other software and applications. Besides the Getting Started section, tutorials are split into input types.</p>
  
      <div className="TutorialItem">
        <h2>Getting Started</h2>
        <ul>
          <li>
            <Link to="/tutorials/getting-started/">
              <b>Install and Run</b>: 
            </Link>
              An brief introduction on how to install and run a model. 
          </li>
          <br />
          <li>
            <b>Creating your own models</b>: 
            Soon!
          </li>
        </ul>
      </div>
    
      <div className="TutorialItem">
        <h2>Image Models</h2>
        <ul>
          <li>
            <Link to="/tutorials/im2txt/">
              <b>Im2txt</b>: 
            </Link>
            The im2txt model, also called the Show and Tell model, is a deep neural network that learned how to describe the content of images. You can give it any image or video and it will return a description.
          </li>
          <br />
          <li>
            <Link to="/tutorials/openpose/">
              <b>OpenPose</b>: 
            </Link>
            Real-time multi-person keypoint detection library for body, face, and hands estimation
          </li>
        </ul>
      </div>

      <div className="TutorialItem">
        <h2>Text Models</h2>
        <p>Soon!</p>
      </div>

      <div className="TutorialItem">
        <h2>Sound Models</h2>
        <p>Soon!</p>
      </div>

      <div className="TutorialItem">
        <h2>Other Models</h2>
        <p>Soon!</p>
      </div>
        
    </div>
    <hr />
  </div>
);

export default Tutorials;