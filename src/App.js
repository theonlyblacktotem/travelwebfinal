import React, { Component } from 'react';

import ParallaxSmooth from './js/picparallax.js';

import './App.css';
import './css/bar.css';
import './css/contact.css';
import './css/hitravel.css';
import './css/paralax.css';

import './css/navbarANDFX.css';




var sectionStyle = {
  width: "100%",
  height: "700px",

};
var sectionStyle2 = {
  width: "100%",
  height: "400px",

};

class App extends Component {
  render() {
    return (

      <div>
        <ulx>
          <li>
            <a href="#"></a>
          </li>
        </ulx>

        <div>
          <nav class="menu menu--julietx">

            <ul class="menu__listx">

              <li class="menu__itemx">
                <a href="#top" class="menu__linkx">Login</a>
              </li>
              <li class="menu__itemx">
                <a href="#" class="menu__linkx">Sign Up</a>
              </li>
              <li class="menu__itemx">
                <a href="#about" class="menu__linkx">Contact</a>
              </li>
              <li class="menu__itemx">
                <a href="#" class="menu__linkx">Blog</a>
              </li>

            </ul>
          </nav>
        </div>

        <div class="parallax" id="top" style={sectionStyle} ></div>

        <div id="large-header" class="large-header">
          <canvas id="demo-canvas"></canvas>
          <h1 class="main-title">Connect <span class="thin">Three</span></h1>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/> <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/> <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/> <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

        </div>

        <section class="bg-primary" id="hitravel">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto text-center">
                <h2 class="section-heading-texthi">HI TRAVEL</h2>
                <hr class="lighthr my-4" />
                <p class="text-faded-convince mb-4">11111sgoletsgoletsgoletsgoletsgoletsgo letsgoletsgoletsgoletsgoletsgoletsgoletsgoletsgo letsgoletsgo
                    letsgoletsgoletsgoletsgoletsgoletsgo letsgoletsgo letsgoletsgoletsgo letsgoletsgoletsgoletsgo letsgo
                    letsgo
                      </p>
                <div class="scroll">
                  <div class="mouse-icon">
                    <div class="wheel"></div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>





        <div class="parallax2" id="about" style={sectionStyle2}></div>


        <section>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 order-lg-2">
                <div class="p-5">
                  <img class="img-fluid-few " src="image/p34.jpg" alt="" />
                </div>
              </div>
              <div class="col-lg-6 order-lg-1">
                <div class="p-5">
                  <h2 class="display-4">SUPERMAN</h2>
                  <p>The one who doing everthing on this fucking site. The one who doing everthing on this fucking site.
                              The one who doing everthing on this fucking site</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div id="navbar">

          <b href="#">
            <i class="fa fa-search"></i>
          </b>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
          <nav class="menu menu--juliet">
            <ul class="menu__list1">


            </ul>
            <ul class="menu__list">

              <li class="menu__item">
                <a href="#top" class="menu__link">login</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link">Sign Up</a>
              </li>
              <li class="menu__item">
                <a href="#about" class="menu__link">Contact</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link">Blog</a>
              </li>

            </ul>
          </nav>


        </div>

        <div class="parallax"></div>

      </div>

    );
  }
}

export default App;
