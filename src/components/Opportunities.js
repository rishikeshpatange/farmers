import React from 'react';
import Card from './Card';
import "./Opportunities.css";

function Opportunities() {
    return (
        <div className='opportunities'>
            <div className="opportunities_content">
                <h1>Creating opportunities for everyone</h1>
                <p>We are the first platform enabling increased benefits for farmers, retailers, and consumers.</p>
            </div>
            <div className="card_row">
                <Card
                    num="1"
                    title="Benifits for farmer"
                    point1="lorem ispium"
                    point2="lorem ispium"
                    point3="lorem ispium"
                    point4="lorem ispium"
                />
                <Card
                    num="1"
                    title="Benifits for farmer"
                    point1="lorem ispium"
                    point2="lorem ispium"
                    point3="lorem ispium"
                    point4="lorem ispium"
                />
                <Card
                    num="1"
                    title="Benifits for farmer"
                    point1="lorem ispium"
                    point2="lorem ispium"
                    point3="lorem ispium"
                    point4="lorem ispium"
                />
            </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <Card
                    num="1"
                    title="Benifits for farmer"
                    point1="lorem ispium"
                    point2="lorem ispium"
                    point3="lorem ispium"
                    point4="lorem ispium"
                />
                    </div>
                    <div class="carousel-item">
                    <Card
                    num="1"
                    title="Benifits for farmer"
                    point1="lorem ispium"
                    point2="lorem ispium"
                    point3="lorem ispium"
                    point4="lorem ispium"
                />
                    </div>
                    <div class="carousel-item">
                    <Card
                    num="1"
                    title="Benifits for farmer"
                    point1="lorem ispium"
                    point2="lorem ispium"
                    point3="lorem ispium"
                    point4="lorem ispium"
                />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}

export default Opportunities