import React from "react";
import service_img from '../assets/services.png';

const Services = () => (
    <div class="container-fluid" id="services">
        <h4 class="center">Services</h4>
        <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-6 row-centered">
                <img src={service_img} alt="services image" width="50%"></img>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6">
                <h4>Designed to exceed standards</h4>
                <p>Working closely with our clients and design teams to produce sustainable, energy efficient strategies that meet or even exceed the standards set by Planning and Building Standards.</p>
            </div>
        </div>
    </div>
);

export default Services;