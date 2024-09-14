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
                        <div className="col-lg-8">
                            <div className="banner-content">
                                <h1 className="fadeInUp blanco" style={{ animationDelay: "30ms" }}>
                                    Busca, elige<br />y soluciona<br />
                                </h1>
                                <h3 className="fadeInDown blanco" style={{ animationDelay: "50ms" }}> 
                                    Para ti, tu casa, el trabajo ...
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*======End Banner =====*/}

            {/* <!--====== Start category Section ======--> */}
            <section className="category-area">
                <div className="category-container">
                    <div className="category-wrapper-one wow fadeInDown" style={{visibility: "visible", }}>
                        <div className="row no-gutters">
                            <div className="col-lg-2 col-md-4 category-column">
                                <div className="category-item category-item-one">
                                    <div className="info text-center">
                                        <div className="category-icon">
                                            <img src="../assets/images/category/electricas.png" height="68" alt="herramientas Electrícas"></img>
                                            <h6>Herramientas</h6>
                                        </div>
                                        <a href="/home" class="category-btn">Ver Productos</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 category-column">
                                <div className="category-item category-item-one">
                                    <div className="info text-center">
                                        <div className="category-icon">
                                            <img src="../assets/images/category/manuales.png" height="68" alt="herramientas Manuales"></img>
                                            <h6>Accesorios</h6>
                                        </div>
                                        <a href="/home" class="category-btn">Ver Productos</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 category-column">
                                <div className="category-item category-item-one">
                                    <div className="info text-center">
                                        <div className="category-icon">
                                            <img src="../assets/images/category/kits.png" height="68" alt="Kits de Herramientas"></img>
                                            <h6>Kits</h6>
                                        </div>
                                        <a href="/home" class="category-btn">Ver Productos</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 category-column">
                                <div className="category-item category-item-one">
                                    <div className="info text-center">
                                        <div className="category-icon">
                                            <img src="../assets/images/category/pintura.png" height="68" alt="Pinturería"></img>
                                            <h6>Pinturería</h6>
                                        </div>
                                        <a href="/home" class="category-btn">Ver Productos</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 category-column">
                                <div className="category-item category-item-one">
                                    <div className="info text-center">
                                        <div className="category-icon">
                                            <img src="../assets/images/category/plomeria.png" height="68" alt="Plomería"></img>
                                            <h6>Plomería</h6>
                                        </div>
                                        <a href="/home" class="category-btn">Ver Productos</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 category-column">
                                <div className="category-item category-item-one">
                                    <div className="info text-center">
                                        <div className="category-icon">
                                            <img src="../assets/images/category/carpinteria.png" height="68" alt="Carpintería"></img>
                                            <h6>Carpintería</h6>
                                        </div>
                                        <a href="/home" class="category-btn">Ver Productos</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== End category Section ======--> */}
        </div>
    );
}    

export default Home;