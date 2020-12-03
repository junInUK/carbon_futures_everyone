import React, { Component } from "react";
import home_icon from '../assets/carbon_futures.ico';
import { Link } from "react-router-dom";

class NavBar extends Component {
    render(){
        return (
            <div id="nav">
                <nav class="navbar navbar-expand-lg navbar-light bg-light flex-center">
                    <Link to = "/">
                        <a class="navbar-brand" href="#">
                            <img src={home_icon} alt="Carbon futures icon"></img>
                        </a>
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link to = "/about">
                                    <a class="nav-link">About</a>
                                </Link>
                            </li>             
                            <li class="nav-item">
                                <Link to = "/services">
                                    <a class="nav-link">Services</a>
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link to = "/projects">
                                    <a class="nav-link">Projects</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to = "/articles">
                                    <a class="nav-link">Articles</a>
                                </Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav mr-right">
                            <li class="nav-item active">
                                <Link to = "/contact">
                                    <a class="nav-link">Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }   
}

export default NavBar;
