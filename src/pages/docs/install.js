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

import './styles/install.css';

const Install = () => (
  <div>
    <div className="Content">
    <img src="/static/img/icons/installTop.png" alt="install icon" className="IconTop"/>
    <h1>Installing Runway</h1>

    <h4>*A note on the current status of this software</h4>
    <h5>Runway is still an experimental and in active development software. Please treat it as a work in progress, with bugs and flaws not as a production ready or final project. Be nice. 
    <br />
    Runway is still in beta and only available through a direct request to hello@runwayml.com</h5>

    <h2>1. Prerequisites</h2>
    <p>Runway's only requirement is <a href="https://www.docker.com/">Docker</a>. Docker is a software to create and run container-based apps. You just need to install Docker, no settings or extra configurations are required. Docker Community Edition (CE) is free. </p>
    <h3>Installing Docker</h3>
    <p>Go to the <a href="https://www.docker.com/community-edition#/download">Docker CE download page</a> and download the right version for your OS. Docker is available for Mac, Windows and Linux.</p>

    <br/>
    <p>Once the installation process is complete you should see the following based on your OS:</p>
    <ul>
      <li>
        macOS: A whale in the top bar indicates that docker is running
        <img src="/static/img/whale-in-menu-bar.png" alt="docker mac" />
      </li>
      <li>
        Windows: A whale in the notifications area indicates that docker is running
        <img src="/static/img/docker-windows.jpg" alt="docker mac" />
      </li>
      <li>
        Linux Distributions: Docker should be available in your terminal. Try running <code>docker --help</code>
      </li> 
    </ul>
    
    <p>Once Docker is installed you can move on to the next step.</p>

    <h2>2. Download Runway</h2>
    <p>From the link sent to you, download the app and save the file anywhere you want. You should be able to run the app just by clicking the icon. It might be the case that you a security warning pops up. If that's the case, please visit the <a href="">troubleshoot guide.</a> <br/> This tutorial will continue with macOS but the same can be applied to other OSs.</p>
    <br />
    <p>Once opened, you should see Runway's default screen: </p>
    <div className="Screenshot">
      <img src="/static/img/screenshots/01.png" alt="icon menu" />
      <p>Initial App View</p>
    </div>
    <p>The main window is compromised of 4 sub panels:</p>


    <div className="Screenshot">
      <img src="/static/img/screenshots/allparts.png" alt="icon menu" />
      <p>Main View Panels</p>
    </div>

    <p>Each panel represents a different abstraction layers when using machine learning models.</p>
    <ul>
      <li><b>Models:</b> Models are pre-trained machine learning architectures that have been created to perform a very specific task, like recognize objects and people, understand speech or generate music. Generally, models are trained on large amounts of data and during a long period of time. In Runway, you will find models that have been already been trained and that you, for the most part, don't need to train or modify. Models serve as the basic building block of the app. </li>
      <br/>
      <li><b>Inputs:</b> Inputs are all possible ways of giving making a model perform a task. Let's say you have a model that can recognize faces, then the inputs for that model can be images, videos or pixels.</li>
      <br />
      <li><b>Outputs:</b> Outputs are the result of what the model did over the inputs based on the model. If the model recognizes faces when given an image, then the output will be the position in the image where faces where detected. </li>
    </ul>
    <p>So, Runway works is the following way:</p>
    <div className="Screenshot">
      <img src="/static/img/graph.png" alt="graph" className="Graph" />
    </div>

    <h2>3. What's next?</h2>

    <p>We highly recommend to take a look at the <Link to="/tutorials/getting-started">Getting Started</Link> tutorial before moving into creating and using models.</p>
    <br/>
    <p>You can also just try one of the <Link tp="/tutorials/">tutorials</Link> or <a href="https://github.com/runwayml">help contribute to the project</a> !</p>
  
    </div>
    <hr />
  </div>
)

export default Install
