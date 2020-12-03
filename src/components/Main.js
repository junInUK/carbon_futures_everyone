import React, { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Articles from "./Articles";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends Component {
    render(){
        return (
            <Router>
                <React.Fragment>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/articles" component={Articles} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                    <Footer/>
                </React.Fragment>        
            </Router>
        );
    }
    
}

export default Main;