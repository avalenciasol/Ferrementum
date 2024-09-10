import React from "react";
import "../styles/homepage/animate.css";
import "../styles/homepage/bootstrap.min.css";
import "../styles/homepage/default.css";
import "../styles/homepage/jquery-ui.min.css";
import "../styles/homepage/magnific-popup.css";
import "../styles/homepage/nice-select.css";
import "../styles/homepage/slick.css";
import "../styles/homepage/style.css";


const Home = () => {
    return (
        <div>
            {/*======Start Preloader =====*/}
            <div className="preloader">
                <div className="loader">
                    <img src="./public/assets/images/loader.png" alt="loader"></img>
                </div>
            </div>

            {/*====== Start Hero Section ======*/}
            <section className="hero-area">
                <div className="hero-wrapper-one">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8">
                        <div className="hero-content">
                        <h1 className="wow fadeInUp blanco" data-wow-delay="30ms">
                            Busca, elige<br />y encuentra<br />lo que sea
                        </h1>
                        <h3 className="wow fadeInDown blanco" data-wow-delay="50ms">
                            para ti, tu casa, el trabajo ...
                        </h3>
                        <div className="hero-search-wrapper wow fadeInUp blanco" data-wow-delay="70ms">
                            <form>
                            <div className="row">
                                <div className="col-lg-5 col-md-4 col-sm-12">
                                <div className="form_group">
                                    <input
                                    type="search"
                                    className="form_control"
                                    placeholder="Servicio que necesitas"
                                    name="search"
                                    required
                                    />
                                    <i className="ti-ink-pen"></i>
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form_group">
                                    <input
                                    type="text"
                                    className="form_control"
                                    placeholder="tu zona"
                                    name="location"
                                    required
                                    />
                                    <i className="ti-location-pin"></i>
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-12">
                                <div className="form_group">
                                    <button className="main-btn icon-btn">Buscar</button>
                                </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        <p className="tags">
                            <span><strong>Popular:</strong></span>
                            {/* <a href="/herramientas"><em>Herramientas</em></a>, 
                            <a href="/construcción"><em>Construcción</em></a>, 
                            <a href="/plomería"><em>Plomería</em></a>, 
                            <a href="/electricidad"><em>Electricidad</em></a>,  */}
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/*====== End Hero Section ======*/}

            {/*====== Start Category Section ======*/}
            <section className="category-area">
                <div className="container">
                    <div className="category-wrapper-one wow fadeInDown">
                    <div className="row no-gutters">
                        <div className="col-lg-2 col-md-4 category-column">
                        <div className="category-item category-item-one">
                            <div className="info text-center">
                            <div className="icon">
                                <img
                                src="./public/assets/images/svg/carpinteria.svg"
                                height="68"
                                alt="Soluciones para el Hombre"
                                />
                            </div>
                            <h6>Carpintería</h6>
                            </div>
                            <a href="index.html" className="category-btn">
                            <i className="ti-arrow-right"></i>
                            </a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-4 category-column">
                        <div className="category-item category-item-one">
                            <div className="info text-center">
                            <div className="icon">
                                <img
                                src="./public/assets/images/svg/herramientas.svg"
                                height="68"
                                alt="Soluciones para la Mujer"
                                />
                            </div>
                            <h6>Herramientas</h6>
                            </div>
                            <a href="index.html" className="category-btn">
                            <i className="ti-arrow-right"></i>
                            </a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-4 category-column">
                        <div className="category-item category-item-one">
                            <div className="info text-center">
                            <div className="icon">
                                <img
                                src="./public/assets/images/svg/para-la-pareja.svg"
                                height="68"
                                alt="Soluciones para la Pareja"
                                />
                            </div>
                            <h6>Pinturería</h6>
                            </div>
                            <a href="index.html" className="category-btn">
                            <i className="ti-arrow-right"></i>
                            </a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-4 category-column">
                        <div className="category-item category-item-one">
                            <div className="info text-center">
                            <div className="icon">
                                <img
                                src="./public/assets/images/svg/para-la-casa.svg"
                                height="68"
                                alt="Soluciones para la Casa"
                                />
                            </div>
                            <h6>Plomería</h6>
                            </div>
                            <a href="index.html" className="category-btn">
                            <i className="ti-arrow-right"></i>
                            </a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-4 category-column">
                        <div className="category-item category-item-one">
                            <div className="info text-center">
                            <div className="icon">
                                <img
                                src="./public/assets/images/svg/para-el-trabajo.svg"
                                height="68"
                                alt="Soluciones para el Trabajo"
                                />
                            </div>
                            <h6>Electricidad</h6>
                            </div>
                            <a href="index.html" className="category-btn">
                            <i className="ti-arrow-right"></i>
                            </a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-4 category-column">
                        <div className="category-item category-item-one">
                            <div className="info text-center">
                            <div className="icon">
                                <img
                                src="./public/assets/images/svg/para-las-novedades.svg"
                                height="68"
                                alt="Nuevas Soluciones!"
                                />
                            </div>
                            <h6>Novedades</h6>
                            </div>
                            <a href="index.html" className="category-btn">
                            <i className="ti-arrow-right"></i>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            {/*====== End Category Section ======*/}

            {/*====== Start Category Section ======*/}
            <section className="category-area pt-110 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title section-title-two text-center mb-60 wow fadeInUp">
                                <h2>Categoría <span className="line">Herramientas</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="category-item category-item-two mb-50 wow fadeInUp" data-wow-delay=".2s">
                                <div className="category-img">
                                    <img
                                    src="./public/assets/images/servicios/servicio-plomeria.jpg"
                                    alt="Servicio de Plomeria"
                                    />
                                    <div className="category-overlay">
                                        <div className="category-content">
                                            <a href="servicio-plomeria.html">
                                                <img
                                                src="./public/assets/images/logo-v.png"
                                                height="75"
                                                width="120"
                                                alt="Servicio de Plomeria"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            <div className="info">
                                <div className="icon">
                                    <i className="flaticon-government"></i>
                                </div>
                                <h3 className="title verdes-logo">
                                    <a href="#">Manuales</a>
                                </h3>
                                <span className="listing">35 Productos</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="category-item category-item-two mb-50 wow fadeInUp" data-wow-delay=".25s">
                            <div className="category-img">
                                <img
                                src="./public/assets/images/servicios/servicio-gasista.jpg"
                                alt="Servicio de Gasista"
                                />
                                <div className="category-overlay">
                                    <div className="category-content">
                                        <a href="servicio-gasista.html">
                                            <img
                                            src="./public/assets/images/logo-v.png"
                                            height="75"
                                            width="120"
                                            alt="Servicio de Gasista"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        <div className="info">
                            <div className="icon">
                                <i className="flaticon-serving-dish"></i>
                            </div>
                            <h3 className="title verdes-logo">
                                <a href="#">Eléctricas</a>
                            </h3>
                            <span className="listing">24 Productos</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="category-item category-item-two mb-50 wow fadeInUp" data-wow-delay=".30s">
                        <div className="category-img">
                            <img
                            src="./public/assets/images/servicios/servicio-electricista.jpg"
                            alt="Servicio de Electricista"
                            />
                            <div className="category-overlay">
                                <div className="category-content">
                                    <a href="servicio-electricista.html">
                                        <img
                                        src="./public/assets/images/logo-v.png"
                                        height="75"
                                        width="120"
                                        alt="Servicio de Electricista"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon">
                                <i className="flaticon-dumbbell"></i>
                            </div>
                            <h3 className="title verdes-logo">
                                <a href="#">Perforación</a>
                            </h3>
                            <span className="listing">50 Productos</span>
                        </div>
                    </div>
                </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="category-item category-item-two mb-50 wow fadeInUp" data-wow-delay=".35s">
                            <div className="category-img">
                                <img
                                src="./public/assets/images/servicios/servicio-pintor.jpg"
                                alt="Servicio de Pintor"
                                />
                                <div className="category-overlay">
                                    <div className="category-content">
                                        <a href="servicio-pintor.html">
                                            <img
                                            src="./public/assets/images/logo-v.png"
                                            height="75"
                                            width="120"
                                            alt="Servicio de Pintor"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <div className="icon">
                                    <i className="flaticon-gift-box"></i>
                                </div>
                                <h3 className="title verdes-logo">
                                    <a href="#">Medición</a>
                                </h3>
                                <span className="listing">25 Productos</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="category-item category-item-two mb-50 wow fadeInUp" data-wow-delay=".40s">
                            <div className="category-img">
                                <img
                                src="./public/assets/images/servicios/servicio-jardinero.jpg"
                                alt="Servicio de Jardinero"
                                />
                                <div className="category-overlay">
                                    <div className="category-content">
                                        <a href="servicio-jardinero.html">
                                            <img
                                            src="./public/assets/images/logo-v.png"
                                            height="75"
                                            width="120"
                                            alt="Servicio de Jardinero"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <div className="icon">
                                    <i className="flaticon-game-controller"></i>
                                </div>
                                <h3 className="title verdes-logo">
                                    <a href="#">Soldadura</a>
                                </h3>
                                <span className="listing">10 Productos</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="category-item category-item-two mb-50 wow fadeInUp" data-wow-delay=".45s">
                            <div className="category-img">
                                <img
                                src="./public/assets/images/servicios/servicio-aire-acondicionado.jpg"
                                alt="Servicio de Aires Acondicionados"
                                />
                                <div className="category-overlay">
                                    <div className="category-content">
                                        <a href="servicio-aire-acondicionado.html">
                                            <img
                                            src="./public/assets/images/logo-v.png"
                                            height="75"
                                            width="120"
                                            alt="Servicio de Aires Acondicionados"
                                            />
                                         </a>
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <div className="icon">
                                    <i className="flaticon-suitcase"></i>
                                </div>
                                <h3 className="title verdes-logo">
                                    <a href="#">Lijado, desbaste, pulido</a>
                                </h3>
                                <span className="listing">15 Productos</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="category-item category-item-two mb-50 wow fadeInUp" data-wow-delay=".50s">
                            <div className="category-img">
                                <img
                                src="./public/assets/images/servicios/servicio-cerrajero.jpg"
                                alt="Servicio de Cerrajero"
                                />
                                <div className="category-overlay">
                                    <div className="category-content">
                                        <a href="servicio-cerrajero.html">
                                            <img
                                                src="./public/assets/images/logo-v.png"
                                                height="75"
                                                width="120"
                                                alt="Servicio de Cerrajero"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <div className="icon">
                                    <i className="flaticon-shopping"></i>
                                </div>
                                <h3 className="title verdes-logo">
                                    <a href="#">Corte</a>
                                </h3>
                                <span className="listing">35 Productos</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="category-item category-item-two mb-50 wow fadeInUp" data-wow-delay=".55s">
                            <div className="category-img">
                                <img
                                src="./public/assets/images/servicios/servicio-techista.jpg"
                                alt="Servicio de Techista"
                                />
                                <div className="category-overlay">
                                    <div className="category-content">
                                        <a href="servicio-techista.html">
                                            <img
                                                src="./public/assets/images/logo-v.png"
                                                height="75"
                                                width="120"
                                                alt="Servicio de Techista"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <div className="icon">
                                    <i className="flaticon-color-palette"></i>
                                </div>
                                <h3 className="title verdes-logo">
                                    <a href="#">Kits de Herramientas</a>
                                </h3>
                                <span className="listing">10 Productos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*====== End Category Section ======*/}

        {/*====== Start Listing Section ======*/}
        <section className="listing-grid-area pt-115 pb-75">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title text-center mb-75 wow fadeInUp">
                    <span className="sub-title">Sólo por Tiempo Limitado!</span>
                    <h2>Productos en Promoción</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-one mb-45 wow fadeInUp" data-wow-delay="10ms">
                    <div className="listing-thumbnail">
                        <img
                        src="./public/assets/images/servicios/promo-canaletas.jpg"
                        alt="Instalacion y Reparacion de Canaletas"
                        />
                        <span className="featured-btn">Con Garantía</span>
                        <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                        <div className="meta-icon-title d-flex align-items-center">
                            <div className="icon">
                            <i className="flaticon-chef"></i>
                            </div>
                            <div className="title">
                            <h6>Bauker</h6>
                            </div>
                        </div>
                        <span className="status st-open">Disponible</span>
                        </div>
                    </div>
                    <div className="listing-content">
                        <h3 className="title verdes-logo"><a href="#">Taladro </a></h3>
                        <div className="ratings">
                        <ul className="ratings ratings-three">
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li><span><a href="#">(02 Opiniones)</a></span></li>
                        </ul>
                        </div>
                        <span className="price">Desde: $80,0000</span>
                        {/* <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a></span> */}
                        <div className="listing-meta">
                        <ul>
                            <li><span><i className="ti-location-pin"></i>Envíos Nacionales</span></li>
                            <li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-one mb-45 wow fadeInUp" data-wow-delay="20ms">
                    <div className="listing-thumbnail">
                        <img
                        src="./public/assets/images/servicios/promo-corte-de-pelo.jpg"
                        alt="Corte de Pelo Masculino en Promocion"
                        />
                        <span className="featured-btn">25% DE DESCUENTO</span>
                        <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                        <div className="meta-icon-title d-flex align-items-center">
                            <div className="icon">
                            <i className="flaticon-government"></i>
                            </div>
                            <div className="title">
                            <h6>CAT</h6>
                            </div>
                        </div>
                        <span className="status st-open">Pocas Unidades</span>
                        </div>
                    </div>
                    <div className="listing-content">
                        <h3 className="title verdes-logo"><a href="#">Kit de Herramientas</a></h3>
                        <div className="ratings">
                        <ul className="ratings ratings-three">
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li><span><a href="#">(10 Opiniones)</a></span></li>
                        </ul>
                        </div>
                        <span className="price"><s>$65,000</s>  $48,750</span>
                        {/* <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a></span> */}
                        <div className="listing-meta">
                        <ul>
                            <li><span><i className="ti-location-pin"></i>Bogotá y Alrededores</span></li>
                            <li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-one mb-45 wow fadeInUp" data-wow-delay="30ms">
                    <div className="listing-thumbnail">
                        <img
                        src="./public/assets/images/servicios/promo-protector-celular.jpg"
                        alt="Cambio de GorillaGlass del Celular en Promocion"
                        />
                        <span className="featured-btn">2x1</span>
                        <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                        <div className="meta-icon-title d-flex align-items-center">
                            <div className="icon">
                            <i className="flaticon-dumbbell"></i>
                            </div>
                            <div className="title">
                            <h6>DeWalt</h6>
                            </div>
                        </div>
                        <span className="status st-close">Disponible</span>
                        </div>
                    </div>
                    <div className="listing-content">
                        <h3 className="title verdes-logo"><a href="#">Batería Dcb205 20V</a></h3>
                        <div className="ratings">
                        <ul className="ratings ratings-three">
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li><span><a href="#">(12 Opiniones)</a></span></li>
                        </ul>
                        </div>
                        <span className="price">$408,204</span>
                        <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a></span>
                        <div className="listing-meta">
                        <ul>
                            <li><span><i className="ti-location-pin"></i>Envíos Nacionales</span></li>
                            <li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        {/*====== End Listing Section ======*/}

    </div>
    
    );
}

export default Home;