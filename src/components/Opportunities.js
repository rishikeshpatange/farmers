import React from 'react';
import Card from './Card';
import "./Opportunities.css";

function Opportunities() {
    return (
        <div className='opportunities'>
            <div className="opportunities_content">
                <div className='opportunities_content_line'>
                    <h1>How it Works?</h1>
                    <span className='opportunities_line'></span>
                </div>
                <p>Dares Agro helps farmers to grow their yields with state of the art precision technology.</p>
            </div>
            <div className="card_row" data-aos="fade-left" >
                <Card
                    num="01"
                    title="Evaluate the land"
                    discription="Our team of Experts will visit your farm and evaluate the current state of the land. This includes taking note of any problems or issues with the land and suggesting possible solutions."

                />
                <Card
                    num="02"
                    title="Suggest crops to be grown"
                    discription="After assessing the land, we will suggest crops to be grown. We will also provide you with information on how these crops can be best managed and produced."

                />
            </div>
            <div className="card_row"
                data-aos="fade-right">
                <Card

                    num="03"
                    title="Improve soil quality"
                    discription="We work to improve soil quality by using non-pesticide methods and installing state-of-the-art technology. This helps to increase crop yields and improve the overall quality of the soil."

                />
                <Card
                    num="04"
                    title="Implement the plan"
                    discription="We will help you to implement the recommended improvements"

                />
            </div>
            <div className="card_row" data-aos="fade-left">
                <Card
                    num="05"
                    title="Supply chain management"
                    discription="We will help to manage the entire supply chain from planting through delivery to end consumer"

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
                            num="01"
                            title="Evaluate the land"
                            discription="Our team of Experts will visit your farm and evaluate the current state of the land. This includes taking note of any problems or issues with the land and suggesting possible solutions."

                        />
                    </div>
                    <div class="carousel-item">
                        <Card
                            num="02"
                            title="Suggest crops to be grown"
                            discription="After assessing the land, we will suggest crops to be grown. We will also provide you with information on how these crops can be best managed and produced."

                        />
                    </div>
                    <div class="carousel-item">
                        <Card

                            num="03"
                            title="Improve soil quality"
                            discription="We work to improve soil quality by using non-pesticide methods and installing state-of-the-art technology. This helps to increase crop yields and improve the overall quality of the soil."

                        />
                    </div>
                    <div class="carousel-item">
                        <Card
                            num="04"
                            title="Implement the plan"
                            discription="We will help you to implement the recommended improvements"

                        />
                    </div>
                    <div class="carousel-item">
                        <Card
                            num="05"
                            title="Supply chain management"
                            discription="We will help to manage the entire supply chain from planting through delivery to end consumer"

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