import React, { Component } from "react";
import home_icon from '../assets/carbon_futures_with_text.ico';
import home_icon_big from '../assets/carbon_futures_with_text_big.png';
import { Link } from "react-router-dom";
import '../App.css';

class NavBar extends Component {
    render(){
        return (
            
                <nav class="nav navbar navbar-expand-lg navbar-light bg-light flex-center">
                    <Link to = "/">
                        <a class="navbar-brand" href="#">
                            
                            <picture>
                                <source media="(max-width: 500px)" srcset={home_icon}></source>
                                <source media="(min-width: 501px)" srcset={home_icon_big}></source>
                                <img src={home_icon} alt="Carbon futures icon"></img>
                            </picture>
                            
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
            
            
        );
    }   
}

export default NavBar;
