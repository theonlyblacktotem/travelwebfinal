import React, { Component } from 'react';

import ParallaxSmooth from './js/picparallax.js';

import './App.css';
import './css/bar.css';
import './css/contact.css';
import './css/hitravel.css';
import './css/paralax.css';

import './css/navbarANDFX.css';
import logo from './image/mainlogo_mini.png';

var navlogosize = {
  flex: 1,
    width: "70%",
    height: "70%",
    resizeMode: 'contain'
}

var mainlogosize = {
  textAlign: "left",
  flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
}

var sectionStyle = {
  width: "100%",
  height: "100vh",

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
            <bc href="#top">
            <img src={logo} alt="logo" style={mainlogosize}/>
          </bc>
            
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

        <div class="parallax" id="top" style={sectionStyle} >
          <div class="caption">
            <div class="logo">
            <img src="image/jsgo.png" alt="Girl in a jacket"/>
            </div>
          </div>
          <div id="large-header" class="large-header">
            <canvas id="demo-canvas"></canvas>

            {/* <h1 class="main-title">Connect <span class="thin">Three</span></h1> */}
          </div>

        </div>



        <section class="bg-primary" id="hitravel">

          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto text-center">
                <h2 class="section-heading-texthi">Travel you're gonna be old.</h2>
                <hr class="lighthr my-4" />
                <p class="text-faded-convince mb-4">“The tragedy in the lives of most of us is that we go through life walking down a high-walled lane with people of our own kind, the same economic situation, the same national background and education and religious outlook. And beyond those walls, all humanity lies, unknown and unseen, and untouched by our restricted and impoverished lives.”

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
        <div class="parallax2" style={sectionStyle2} id="about">
          <div class="caption">
            <span class="border-team">OUR MARVELOUS TEAM</span>
          </div>

        </div>
        {/* คอนแท็ก */}

        <section class="bg-light-contact" >
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase"></h2>
                <h3 class="section-subheading text-muted">If you ask us "Friend or Money" Exaclty we will choose MONEY </h3>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="team-member">
                  <img class="mx-auto rounded-circle" src="image/p33.jpg" alt="rr" />
                  <h4>Puridate Thepnarong</h4>
                  <p class="text-muted">Lead Developer</p>
                  <ul class="list-inline social-buttons">
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="https://www.facebook.com/phuridate.tepnarong" target="_blank">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="team-member">
                  <img class="mx-auto rounded-circle" src="image/web1.jpg" alt="rr" />
                  <h4>Blacktotem Rightseeker</h4>
                  <p class="text-muted">Lead Developer</p>
                  <ul class="list-inline social-buttons">
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="https://www.facebook.com/blacktotem.rightseeker" target="_blank">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="team-member">
                  <img class="mx-auto rounded-circle" src="image/web3.jpg" alt="" />
                  <h4>Kudo Karn</h4>
                  <p class="text-muted">Lead Content</p>
                  <ul class="list-inline social-buttons">
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="https://www.facebook.com/kudo.karn" target="_blank">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="team-member">
                  <img class="mx-auto rounded-circle" src="image/web2.jpg" alt="" />
                  <h4>Tequila Jiffiyy</h4>
                  <p class="text-muted">Lead Designer</p>
                  <ul class="list-inline social-buttons">
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="https://www.facebook.com/tequilaji.f" target="_blank">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-8 mx-auto text-center">
                <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
              </div>
            </div>
          </div>
        </section>



        <div class="parallax3" style={sectionStyle2}>
          <div class="caption">
            <span class="border-team">GO OUT TO USE YOUR LIFE!</span>
          </div>
        </div>



        <div id="navbar">

          <b href="#top">
            <img src={logo} alt="logo" style={navlogosize}/>
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






      </div>

    );
  }
}

export default App;
