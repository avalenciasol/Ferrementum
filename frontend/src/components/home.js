import React, { useEffect } from "react";
import $ from "jquery";
import "../styles/home.css";


const Home = () => {

    useEffect(() => {
        // Código para el preloader
        $(window).on('load', function(event) {
            $('.preloader').delay(500).fadeOut('500');
        });
    }, []);

    return (
        <div>
            {/*======Start Preloader =====*/}
            <div className="preloader">
                <div className="loader">
                    <img src="../assets/images/loader.png" alt="loader"></img>
                </div>
            </div>
            {/*======End Preloader =====*/}

            {/*======Start Banner =====*/}
            <section className="banner-area">
                <div className="banner-wrapper-one">    
                    <div className="banner-container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="banner-content">
                                    <h1 className="fadeInUp blanco" style={{ animationDelay: "30ms" }}>
                                        Expertos en<br />tener lo que<br />necesitas
                                    </h1>
                                    <h3 className="fadeInDown blanco" style={{ animationDelay: "50ms" }}> 
                                        Para ti, tu casa, el trabajo ...
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*======End Banner =====*/}
            {/* <!--====== Start category Section ======--> */}
            {/* <section class="category-area">
                <div class="category-wrapper-bg bg_cover pt-75 pb-50" style="background-image: url(assets/images/bg/catgory-bg-1.jpg);">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7">
                                <div class="section-title section-title-white text-center mb-60 wow fadeInUp">
                                    <span class="sub-title">What We Offer</span>
                                    <h2>Popular Category</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="category-item category-item-three mb-30 wow fadeInUp">
                                    <div class="icon">
                                        <i class="flaticon-government"></i>
                                    </div>
                                    <div class="info">
                                        <h4 class="title"><a href="listing-grid.html">Museums</a></h4>
                                        <p>Sed perspi ciaund natus</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="category-item category-item-three mb-30 wow fadeInDown">
                                    <div class="icon">
                                        <i class="flaticon-serving-dish"></i>
                                    </div>
                                    <div class="info">
                                        <h4 class="title"><a href="listing-grid.html">Restaurant</a></h4>
                                        <p>Sed perspi ciaund natus</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="category-item category-item-three mb-30 wow fadeInUp">
                                    <div class="icon">
                                        <i class="flaticon-game-controller"></i>
                                    </div>
                                    <div class="info">
                                        <h4 class="title"><a href="listing-grid.html">Game Field</a></h4>
                                        <p>Sed perspi ciaund natus</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="category-item category-item-three mb-30 wow fadeInDown" data-wow-delay=".15s">
                                    <div class="icon">
                                        <i class="flaticon-suitcase"></i>
                                    </div>
                                    <div class="info">
                                        <h4 class="title"><a href="listing-grid.html">Job & Feed</a></h4>
                                        <p>Sed perspi ciaund natus</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="category-item category-item-three mb-30 wow fadeInUp" data-wow-delay=".20s">
                                    <div class="icon">
                                        <i class="flaticon-gift-box"></i>
                                    </div>
                                    <div class="info">
                                        <h4 class="title"><a href="listing-grid.html">Party Center</a></h4>
                                        <p>Sed perspi ciaund natus</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="category-item category-item-three mb-30 wow fadeInDown" data-wow-delay=".25s">
                                    <div class="icon">
                                        <i class="flaticon-dumbbell"></i>
                                    </div>
                                    <div class="info">
                                        <h4 class="title"><a href="listing-grid.html">Fitness Zone</a></h4>
                                        <p>Sed perspi ciaund natus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <!--====== End category Section ======--> */}
        </div>
    );
}    

export default Home;