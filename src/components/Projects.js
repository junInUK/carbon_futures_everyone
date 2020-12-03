import React from "react";
import anderston_regeneration from '../assets/anderston_regeneration.png';
import meadowbank from '../assets/meadowbank.png';
import meat_market from '../assets/meat_market.png';
import tulls_russell_paper_mill from '../assets/tulls_russell_paper_mill.png';
import riverside_dalmarnock from '../assets/riverside_dalmarnock.png';
import otago_lane from '../assets/otago_lane.png';
import hamiltonhill_regeneration from '../assets/hamiltonhill_regeneration.png';
import laurieston_regeneration from '../assets/laurieston_regeneration.png';

const Projects = () => (
    <div class="container-fluid" id="projects">
        <h4 class="center">Projects</h4>
        <p class="center">Understanding our impact.</p>
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-4">
              <div class="card border-0">
                <div class="card-body">
                  <p class="card-title">Anderston Regeneration</p>
                  <p class="card-subtitle">Glasgow</p>
                  <img src={anderston_regeneration} alt="anderston regeneration" width="100%"></img>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
              <div class="card border-0">
                <div class="card-body">
                  <p class="card-title">Meadowbank</p>
                  <p class="card-subtitle">Glasgow</p>
                  <img src={meadowbank} alt="meadowbank" width="100%"></img>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
              <div class="card border-0">
                <div class="card-body">
                  <p class="card-title">Meat Market</p>
                  <p class="card-subtitle">Glasgow</p>
                  <img src={meat_market} alt="meat market" width="100%"></img>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
              <div class="card border-0">
                <div class="card-body">
                  <p class="card-title">Tulls Russell Paper Mill</p>
                  <p class="card-subtitle">Glasgow</p>
                  <img src={tulls_russell_paper_mill} alt="tulls russell paper mill" width="100%"></img>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
              <div class="card border-0">
                <div class="card-body">
                  <p class="card-title">Riverside Dalmarnock</p>
                  <p class="card-subtitle">Glasgow</p>
                  <img src={riverside_dalmarnock} alt="riverside dalmarnock" width="100%"></img>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
              <div class="card border-0">
                <div class="card-body">
                  <p class="card-title">Otago Lane</p>
                  <p class="card-subtitle">Glasgow</p>
                  <img src={otago_lane} alt="otago lane" width="100%"></img>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
              <div class="card border-0">
                <div class="card-body">
                  <p class="card-title">Hamiltonhill Regeneration</p>
                  <p class="card-subtitle">Glasgow</p>
                  <img src={hamiltonhill_regeneration} alt="hamiltonhill regeneration" width="100%"></img>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
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
);

export default Projects;