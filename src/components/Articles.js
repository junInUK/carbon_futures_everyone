import React from "react";
import articles from '../assets/articles.png';

const Articles = () => (
    <div class="container-fluid" id="articles">
        <h4 class="center">Articles</h4>
        <p class="center">Explore our news.</p>
        <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-6 row-centered">
                <img src={articles} alt="articles image" width="50%"></img>
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
);

export default Articles;