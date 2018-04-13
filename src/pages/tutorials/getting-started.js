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

import index from './styles/gettingstarted.css';

import dropdown from './imgs/getting-started/dropdown.png';
import model from './imgs/getting-started/model.png';
import popup from './imgs/getting-started/installpopup.png';
import installing_hide from './imgs/getting-started/installing_hide.png';
import installing_process from './imgs/getting-started/installing_process.png';
import install_complete from './imgs/getting-started/install_complete.png';
import select from './imgs/getting-started/select.png';
import file_input from './imgs/getting-started/file_input.png';
import image_input from './imgs/getting-started/image_input.png';
import model_enabled from './imgs/getting-started/model_enabled.png';
import connect_to_model from './imgs/getting-started/connect_to_model.png';

const GettingStarted = () => (
  <div>
    <div className="Content">
      <h1>Getting Started</h1>
      <p>This tutorial will go over the basics of how to install and run a model in Runway. We will use the <a href="https://github.com/tensorflow/models/tree/master/research/im2txt">im2txt</a> model and see the results locally in the app. There will be <b>no</b> coding involved at all. Just be sure that Docker is running on your computer. If you have not install Docker yet, please visit the <Link to="/install/">Installation Page</Link>.</p>
      
      <h3>About the Model</h3>
      <p>The im2txt is a model, developed by Google, that uses a deep neural network to learn how to describe the content of images. Basically you can give it any image and it will output a short caption or description of the image. You can find more information <a href="https://github.com/tensorflow/models/tree/master/research/im2txt">here</a> and <a href="http://arxiv.org/abs/1609.06647">here</a>.</p>

      <h2>1. Install the Model</h2>
      <p>Open the Runway app and from the <span className="DropdownBtn">Models</span> dropdown, select the im2txt model:</p>

      <div className="ImageLarge">
        <img src={dropdown} alt="dropdown"/>
        <p>Select the im2txt model</p>
      </div>

      <p>Once selected, you should see a description of the model, how it was developed it, the framework used and links to resources about the paper and original code. The Model area is meant as an informative description of how the model works.</p>

      <div className="ImageLarge">
        <img src={model} alt="Model Description"/>
        <p>Model Description</p>
      </div>

      <p>If you have not already clicked the <span className="GreenBtn">Install</span> button, do it now. This will prompt a pop up confirming that you want to install the model. Click <span className="GreyBtn">Yes</span>. It is important to consider that the size of some models can be a couple of GB big. </p>

      <div className="ImageLarge">
        <img src={popup} alt="dropdown"/>
        <p>Confirm the model installation</p>
      </div>

      <p>After confirming the installation you will see a new window. This window will show the progress of the model while is it being downloaded and installed. Please keep this window open and wait until the model is ready. <b>This might take a couple of minutes</b> depending on your internet speed([speed]). Click the <span className="GreyBtn">Follow Process</span> button to see a live progress of the model being installed.</p>

      <div className="ImageLarge">
        <img src={installing_process} alt="dropdown"/>
        <p>Model being installed</p>
      </div>

      <h2>2. Select an Input</h2>

      <p>Once completed, the downloader window will disappear and the main view will become available again. Notice that the <span className="GreenBtn">Select</span> button in now available. Click it, and now new options will appear in the <b>INPUTS</b> and <b>OUTPUTS</b> panels.</p>

      <div className="ImageLarge">
        <img src={select} alt="dropdown"/>
        <p>Model Installed</p>
      </div>

      <p>Select the <span className="CheckboxButton"><div/>File</span> option checkbox in the <b>INPUTS</b> panel.</p>
      <div className="ImageLarge">
        <img src={file_input} alt="dropdown"/>
        <p>File Input selected</p>
      </div>

      <p>Again in the <b>INPUTS</b> panel, now select the <span className="DropdownBtn">Choose File</span> button and pick an image file from your computer. <br /><b>This file must a in .JPG format</b>.</p>
      <div className="ImageLarge">
        <img src={image_input} alt="dropdown"/>
        <p>Upload an Image</p>
      </div>

      <h2>3. Connect to the Model</h2>

      <p>Once the image has been selected, you are almost ready to go! Click the <span className="GreenBtn">Enable Model</span> button at the bottom of the app. This will make the model available to connect to. See how the footer bar changes its status to <b>Model Enabled</b></p>
      <div className="ImageLarge">
        <img src={model_enabled} alt="dropdown"/>
        <p>Model has been enabled</p>
      </div>

      <p>Now just click <span className="GreenBtn">Connect</span>! This will run the im2txt model and output the results locally in the app. You will see a <a href="https://www.w3schools.com/js/js_json_syntax.asp">JSON Object</a> containing the 3 most probable descriptions the model guessed for that image. Try changing the image and seeing what the model thinks the image is about. You don't need to disconnect from the model to change the image, just click the <span className="DropdownBtn">Choose File</span></p>
      <div className="ImageLarge">
        <img src={connect_to_model} alt="dropdown"/>
        <p>Model is running!</p>
      </div>

      <h2>What's next?</h2>

      <p>This tutorial showed how to run a deep neural network model that was trained to describe the content of images without any coding. This is the simplest example you can run in Runway. You can use the same steps describe but use the output of the model into any other application. Try the more complete <a href="">im2txt tutorial</a> next!  </p>

    </div>
    <hr />
  </div>
);

export default GettingStarted