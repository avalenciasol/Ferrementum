import React, { useEffect } from "react";
import $ from "jquery";

// import "./extra/slick.min.js"
import "../styles/home.css";
import BackToTop from "./extra/BackToTop";


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
                                    Todo para construir,<br />renovar y<br />reparar
                                </h1>
                                <h3 className="fadeInDown blanco" style={{ animationDelay: "50ms" }}> 
                                    ¡Confianza en cada producto!
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

            {/* <!--====== Start Sales Section ======--> */}
            <section className="sales-grid-area pt-115 pb-75">
                <div className="sales-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-75 wow fadeInUp" style={{visibility: "visible", }}>
                                <span className="sub-title">¡Sólo por tiempo límitado!</span>
                                <h2>Productos en promoción</h2>
                            </div>
                        </div>
                    </div>
                    <div className="sales-row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="sales-item sales-grid-one mb-45 wow fadeInUp" dta-wow-delay="10ms" style={{visibility: "visible", }}>
                                <div className="sales-thumbnail">
                                    <img src="../assets/images/products/lijadora-orbital.png" alt="Bauker-LijadoraOrbital"></img>
                                    <span className="sale-btn">20% de descuento</span>
                                    <div className="thumbnail-product d-flex justify-content-between align-items-center">
                                        <div className="title-brand d-flex align-items-center">
                                            <div className="marca">
                                                <h6> BauKer</h6>
                                            </div>
                                        </div>
                                        <span className="dispo in-stock">Disponible</span>
                                    </div>
                                </div>
                                <div className="sales-content">
                                    <h3 className="title "><a href="/detalle-producto">Lijadora Orbital</a></h3>
                                    <span className="product-price">
                                        <s>191,904 COP</s>
                                        159,920 COP
                                    </span>
                                    <div class="sales-meta">
                                        <ul>
                                            <li><span>Envío Nacional</span></li>
                                            <li><span><i className="cart"></i><a href="/cart">Comprar</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="sales-item sales-grid-one mb-45 wow fadeInUp" dta-wow-delay="10ms" style={{visibility: "visible", }}>
                                <div className="sales-thumbnail">
                                    <img src="../assets/images/products/pintura.png" alt="KOLOR-Pintura5Gl"></img>
                                    <span className="sale-btn">25% de descuento</span>
                                    <div className="thumbnail-product d-flex justify-content-between align-items-center">
                                        <div className="title-brand d-flex align-items-center">
                                            <div className="marca">
                                                <h6> KÖLOR</h6>
                                            </div>
                                        </div>
                                        <span className="dispo low-stock">Pocas Unidades</span>
                                    </div>
                                </div>
                                <div className="sales-content">
                                    <h3 className="title "><a href="/detalle-producto">Pintura Interiores - Blanca 5Gl</a></h3>
                                    <span className="product-price">
                                        <s>290,156 COP</s>
                                        224,925 COP
                                    </span>
                                    <div class="sales-meta">
                                        <ul>
                                            <li><span>Envío Nacional</span></li>
                                            <li><span><i className="cart"></i><a href="/cart">Comprar</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="sales-item sales-grid-one mb-45 wow fadeInUp" dta-wow-delay="10ms" style={{visibility: "visible", }}>
                                <div className="sales-thumbnail">
                                    <img src="../assets/images/products/portaHerramientas.png" alt="Stanley-PortaHerramientas"></img>
                                    <span className="sale-btn">21% de descuento</span>
                                    <div className="thumbnail-product d-flex justify-content-between align-items-center">
                                        <div className="title-brand d-flex align-items-center">
                                            <div className="marca">
                                                <h6>STANLEY</h6>
                                            </div>
                                        </div>
                                        <span className="dispo in-stock">Disponible</span>
                                    </div>
                                </div>
                                <div className="sales-content">
                                    <h3 className="title "><a href="/detalle-producto">Porta Herramientas</a></h3>
                                    <span className="product-price">
                                        <s>74,900 COP</s>
                                        58,900 COP
                                    </span>
                                    <div class="sales-meta">
                                        <ul>
                                            <li><span>ENVIO GRATIS</span></li>
                                            <li><span><i className="cart"></i><a href="/cart">Comprar</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* <!--====== Start Sales Section ======--> */}
            <BackToTop />
        </div>
    );
}    

export default Home;