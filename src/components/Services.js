import React, { Component } from "react";
import $ from "jquery";
import service_img from '../assets/services.png';

class Services extends Component{
    constructor(props){
        super(props);
        this.imgFadein = this.imgFadein.bind(this);
    }

    imgFadein(){
       $("#service_image").fadeIn("slow");
    //   alert("haha");
    }

    render(){
        return(
            <div class="container-fluid" id="services" onLoad={this.imgFadein}>
                <h4 class="center">Services</h4>
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-6 row-centered fade-in">
                        <img id="service_image" src={service_img} alt="services image" width="50%"></img>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <h4>Designed to exceed standards</h4>
                        <p>Working closely with our clients and design teams to produce sustainable, energy efficient strategies that meet or even exceed the standards set by Planning and Building Standards.</p>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Services;