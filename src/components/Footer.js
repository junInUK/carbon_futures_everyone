import React, { Component } from "react";
import '../App.css';

class Footer extends Component {
    render(){
        return (
            <div id="bigfooter">
                <hr/>
                <div class="row" id="footer">
                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <ul>
                            <li>enquiries@carbonfutures.co.uk</li>
                            <li>+44(0)141 280 8022</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div class="col-sm-3 col-md-3 col-lg-3">
                        <ul>
                            <li>Services</li>
                            <li>Works</li>
                            <li>Experts</li>
                            <li>Articles</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <div class="col-sm-3 col-md-3 col-lg-3">
                        <ul>
                            <li>Linkedin</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Subscribe</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            
        );
    }
}

export default Footer;