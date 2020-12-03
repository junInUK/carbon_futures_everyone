import React, { Fragment } from "react";
import header_img from '../assets/header.png';
import service_img from '../assets/services.png';
import anderston_regeneration from '../assets/anderston_regeneration.png';
import meadowbank from '../assets/meadowbank.png';
import meat_market from '../assets/meat_market.png';
import tulls_russell_paper_mill from '../assets/tulls_russell_paper_mill.png';
import riverside_dalmarnock from '../assets/riverside_dalmarnock.png';
import otago_lane from '../assets/otago_lane.png';
import hamiltonhill_regeneration from '../assets/hamiltonhill_regeneration.png';
import laurieston_regeneration from '../assets/laurieston_regeneration.png';
import articles from '../assets/articles.png';
import '../App.css';

const Home = () => (
  <div class="container-fluid">
    <div class="container-fluid">
      <div class="row">  {/*  <!-- header text --> */}
        <div class="col-sm-3 col-md-3 col-lg-6">
          
        </div>
        <div class="col-sm-9 col-md-9 col-lg-6">
          <h2>Energy and Sustainability Consultancy</h2>
        </div>
      </div>
      <div class="row"> {/*  <!-- header image --> */}
        <img src={header_img} alt="header image" width="100%"></img>
      </div>
      <div class="row wrapper"> {/*  <!-- about section --> */}
        <div class="col-sm-3 col-md-3 col-lg-3">
          <div class="sticky">
            <p class="left-title">About</p>
          </div>
        </div>
        <div class="col-sm-9 col-md-9 col-lg-9">
          <p class="right-content">
            ____ Carbon Futures is a leading independent energy and sustainability consultancy focussed on delivering low-carbon, cost-effective solutions to a variety of sectors within the construction industry.
          </p>
          <p class="right-content-small">
            Who we are            
          </p>
        </div>
      </div>
      <div class="row wrapper"> {/*  <!-- service section --> */}
        <div class="col-sm-3 col-md-3 col-lg-3">
          <div class="sticky">
            <p class="left-title">
              Services
            </p>
          </div>
        </div>
        <div class="col-sm-4 col-md-4 col-lg-4">
          <div>
            <img src={service_img} alt="service image" width="100%"></img>
          </div>
        </div>
        <div class="col-sm-5 col-md-5 col-lg-5">
          <p class="right-content">
            ____ Designed to exceed standards
          </p>
          <p>
            <font class="right-content-small">
              Working closely with our clients and design teams to produce sustainable, energy efficient strategies that meet or even exceed the standards set by Planning and Building Standards
            </font>
          </p>
          <p class="right-content-small">
            What we do
          </p>
        </div>
      </div>
      <div class="row wrapper"> {/*  <!-- projects section --> */}
        <div class="col-sm-3 col-md-3 col-lg-3">
          <div class="sticky">
            <p class="left-title">
              Projects
            </p>
          </div>
        </div>
        <div class="col-sm-9 col-md-9 col-lg-9">
          <div class="row">
            <p class="right-content">
              ____ Understanding our impact
            </p>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="card border-0">
                <div class="card-body">
                  <p class="card-title">Anderston Regeneration</p>
                  <p class="card-subtitle">Glasgow</p>
                  <img src={anderston_regeneration} alt="anderston regeneration" width="100%"></img>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="card border-0">
                <div class="card-body">
                  <p class="card-title">Meadowbank</p>
                  <p class="card-subtitle">Glasgow</p>
                  <img src={meadowbank} alt="meadowbank" width="100%"></img>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="card border-0">
                <div class="card-body">
                  <p class="card-title">Meat Market</p>
                  <p class="card-subtitle">Glasgow</p>
                  <img src={meat_market} alt="meat market" width="100%"></img>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="card border-0">
                <div class="card-body">
                  <p class="card-title">Tulls Russell Paper Mill</p>
                  <p class="card-subtitle">Glasgow</p>
                  <img src={tulls_russell_paper_mill} alt="tulls russell paper mill" width="100%"></img>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="card border-0">
                <div class="card-body">
                  <p class="card-title">Riverside Dalmarnock</p>
                  <p class="card-subtitle">Glasgow</p>
                  <img src={riverside_dalmarnock} alt="riverside dalmarnock" width="100%"></img>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="card border-0">
                <div class="card-body">
                  <p class="card-title">Otago Lane</p>
                  <p class="card-subtitle">Glasgow</p>
                  <img src={otago_lane} alt="otago lane" width="100%"></img>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="card border-0">
                <div class="card-body">
                  <p class="card-title">Hamiltonhill Regeneration</p>
                  <p class="card-subtitle">Glasgow</p>
                  <img src={hamiltonhill_regeneration} alt="hamiltonhill regeneration" width="100%"></img>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="card border-0">
                <div class="card-body">
                  <p class="card-title">Laurieston Regeneration</p>
                  <p class="card-subtitle">Glasgow</p>
                  <img src={laurieston_regeneration} alt="laurieston regeneration" width="100%"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row wrapper">
        <div class="col-sm-3 col-md-3 col-lg-3">
          <div class="sticky">
            <p class="left-title">
              Articles
            </p>
          </div>
        </div>  
        <div class="col-sm-9 col-md-9 col-lg-9">
          <div class="row">
            <p class="right-content">
              ____ Explore our news
            </p>
          </div>
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-6">
              <div class="row">
                <img src={articles} alt="articles" width="100%"></img>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6">
              <div class="card border-0">
                <div class="card-body">
                  <p class="card-subtitle">
                    19 Sep 20, Project news
                  </p>
                  <p class="right-content">
                    Finalists announced for Scottish Home Awards
                  </p>
                </div>
              </div>
              <hr/>
              <div class="card border-0">
                <div class="card-body">
                  <p class="card-subtitle">
                    19 Sep 20, Project news
                  </p>
                  <p class="right-content">
                    Support proposals for a mixed-use development in Polmont.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  </div>
      
   
);

export default Home;
