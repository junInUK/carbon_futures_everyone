import React, { Component } from "react";
import '../App.css';

class Footer extends Component {
    render(){
        return (
            <div>
                <hr/>
                <div class="card-group" id="footer">
                    <div class="card border-0">
                        <div class="card-body">
                            <ul>
                                <li>enquiries@carbonfutures.co.uk</li>
                                <li>+44(0)141 280 8022</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card border-0">
                        <div class="card-body">
                            
                        </div>
                    </div>
                    <div class="card border-0">
                        <div class="card-group">
                            <div class="card border-0">
                                <div class="card-body">
                                    <ul>
                                        <li>Services</li>
                                        <li>Works</li>
                                        <li>Experts</li>
                                        <li>Articles</li>
                                        <li>About</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card border-0">
                                <div class="card-body">
                                    <ul>
                                        <li>
                                            Linkedin
                                        </li>
                                        <li>
                                            Twitter
                                        </li>
                                        <li>
                                            Instagram
                                        </li>
                                        <li>
                                            Subscribe
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        );
    }
}

export default Footer;