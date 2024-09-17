import React from "react";

import "../styles/grid-view.css"

const CategoriesGrid = () => {
    return (
        <div>
            {/*! --====== Start banner section ======--> */}
            <section className="banner-c-area">
                <div className="breadcrumbs-wrapper">
                    <div className="cat-container">
                        <div className="cat-row">
                            <div className="col-lg-8">
                                <div className="cat-page-title">
                                    <h1 className="title">Herramientas</h1>
                                    <ul class="breadcrumbs-link">
                                        <li><a href="/home">Inicio</a></li>
                                        <li className="active">Categoria</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*! --====== End banner section ======-->*/}

            {/*! --====== Start categorie section ======--> */}
            <section className="categorie-grid-area pt-120 pb-90">
                <div className="cat-container">
                    <div className="cat-row">
                        <div className="col-lg-4">
                            <div className="sidebar-filter-area">
                                <div className="filter search-product-widget mb-30 wow fadeInUp">
                                    <h4 className="filter-title">Filtros</h4>
                                    <form>
                                        <div className="search-form">
                                            <div className="form_group">
                                                <input type="search" className="form-control" placeholder="palabra clave" name="filter-search" required></input>
                                                <i class="search-i"></i>
                                            </div>
                                            <div className="form-group">
                                                <select className="wide">
                                                    <option defaultValue={"Categoria"}>Categoria</option>
                                                    <option value={"01"}>Herramientas</option>
                                                    <option value={"02"}>Kits y Organizadores</option>
                                                    <option value={"03"}>Plomería</option>
                                                    <option value={"04"}>Pinturas</option>
                                                    <option value={"05"}>Electricidad</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <select className="wide">
                                                    <option defaultValue={"Disponibilidad"}>Disponibilidad</option>
                                                    <option value={"01"}>stock en tienda</option>
                                                    <option value={"02"}>Despacho a domicilio</option>
                                                    <option value={"03"}>Retiro en tienda</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <select className="wide">
                                                    <option defaultValue={"Marca"}>Marca</option>
                                                    <option value={"01"}>BauKer</option>
                                                    <option value={"02"}>Stanley</option>
                                                    <option value={"03"}>DeWalt</option>
                                                    <option value={"04"}>Makita</option>
                                                    <option value={"05"}>Truper </option>
                                                    <option value={"06"}>Bosch</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <select className="wide">
                                                    <option defaultValue={"Precio"}>Precio</option>
                                                    <option value={"01"}>$50,000 - $90,000</option>
                                                    <option value={"02"}>$90,000 - $110,000</option>
                                                    <option value={"03"}>$110,000 - $160,000</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form_group">
                                            <button className="form-btn icon-btn">Aplicar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="cat-search-filter mb-40">
                                <div className="cat-row">
                                    <div className="col-md-8">
                                        <div className="filter-left d-flex align-items-center">
                                            <div className="show-text">
                                                <span>Mostrando resultado 1 - 8</span>
                                            </div>
                                            <div className="sorting-dropdown">
                                                <select>
                                                    <option defaultValue={"predeterminado"}>Predeterminado</option>
                                                    <option value={"01"}>A - Z</option>
                                                    <option value={"02"}>Precio Menor a Precio Mayor</option>
                                                    <option value={"03"}>Precio Mayor a Precio Menor</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cat-grid-wrapper">
                            <div className="cat-row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="cat-item cat-grid-item-two mb-30 wow fadeInUp">
                                        <div className="cat-thumbnail">
                                            <img src="../assets/images/products/lijadora-orbital.png" alt="lijadora Orbital"></img>
                                        </div>
                                        <div className="cat-content">
                                            <h3 className="title"><a href="/product-details">Lijadora Orbital</a></h3>
                                            <p>BauKer</p>
                                            <span className="product-price">159,920 COP<span className="dispo in-stock">DISPONIBLE</span></span>
                                            <div className="categorie-meta">
                                                <ul>
                                                    <li><span>Envío Nacional</span></li>
                                                    <li><span><a href="/cart">Comprar</a></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="cat-item cat-grid-item-two mb-30 wow fadeInUp">
                                        <div className="cat-thumbnail">
                                            <img src="../assets/images/products/atornillador.png" alt="atornillador"></img>
                                        </div>
                                    </div>
                                    <div className="cat-content">
                                        <h3 className="title"><a href="/product-details">Atornillador Inalámbrico</a></h3>
                                        <p>Truper</p>
                                        <span className="product-price">110,900 COP<span className="dispo in-stock">DISPONIBLE</span></span>
                                        <div className="categorie-meta">
                                            <ul>
                                                <li><span>Envío Nacional</span></li>
                                                <li><span><a href="/cart">Comprar</a></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="cat-item cat-grid-item-two mb-30 wow fadeInUp">
                                        <div className="cat-thumbnail">
                                            <img src="../assets/images/products/t-percutorB+D.png" alt="taladro percutor"></img>
                                        </div>
                                    </div>
                                    <div className="cat-content">
                                        <h3 className="title"><a href="/product-details">Taladro Percutor</a></h3>
                                        <p>Black+Decker</p>
                                        <span className="product-price">189,900 COP<span className="dispo low-stock">POCAS UNIDADES</span></span>
                                        <div className="categorie-meta">
                                            <ul>
                                                <li><span>Envío Nacional</span></li>
                                                <li><span><a href="/cart">Comprar</a></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="cat-item cat-grid-item-two mb-30 wow fadeInUp">
                                        <div className="cat-thumbnail">
                                            <img src="../assets/images/products/pulidora.png" alt="pulidora"></img>
                                        </div>
                                    </div>
                                    <div className="cat-content">
                                        <h3 className="title"><a href="/product-details">Pulidora</a></h3>
                                        <p>Ubermann</p>
                                        <span className="product-price">299,900 COP<span className="dispo in-stock">DISPONIBLE</span></span>
                                        <div className="categorie-meta">
                                            <ul>
                                                <li><span>Envío Nacional</span></li>
                                                <li><span><a href="/cart">Comprar</a></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="cat-item cat-grid-item-two mb-30 wow fadeInUp">
                                        <div className="cat-thumbnail">
                                            <img src="../assets/images/products/rotamartillo.png" alt="rotamartillo"></img>
                                        </div>
                                    </div>
                                    <div className="cat-content">
                                        <h3 className="title"><a href="/product-details">Rotamartillo Demoledor</a></h3>
                                        <p>Bosch</p>
                                        <span className="product-price">3'576,900 COP<span className="dispo in-stock">DISPONIBLE</span></span>
                                        <div className="categorie-meta">
                                            <ul>
                                                <li><span>Envío Nacional</span></li>
                                                <li><span><a href="/cart">Comprar</a></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="cat-item cat-grid-item-two mb-30 wow fadeInUp">
                                        <div className="cat-thumbnail">
                                            <img src="../assets/images/products/tronzadora.png" alt="tronzadora"></img>
                                        </div>
                                    </div>
                                    <div className="cat-content">
                                        <h3 className="title"><a href="/product-details">Tronzadora 14"</a></h3>
                                        <p>Makita</p>
                                        <span className="product-price">889,900 COP<span className="dispo in-stock">DISPONIBLE</span></span>
                                        <div className="categorie-meta">
                                            <ul>
                                                <li><span>Envío Nacional</span></li>
                                                <li><span><a href="/cart">Comprar</a></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="cat-item cat-grid-item-two mb-30 wow fadeInUp">
                                        <div className="cat-thumbnail">
                                            <img src="../assets/images/products/polichadora.png" alt="polichadora"></img>
                                        </div>
                                    </div>
                                    <div className="cat-content">
                                        <h3 className="title"><a href="/product-details">Polichadora Orbital</a></h3>
                                        <p>BauKer</p>
                                        <span className="product-price">119,900 COP<span className="dispo low-stock">POCAS UNIDADES</span></span>
                                        <div className="categorie-meta">
                                            <ul>
                                                <li><span>Envío Nacional</span></li>
                                                <li><span><a href="/cart">Comprar</a></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="cat-item cat-grid-item-two mb-30 wow fadeInUp">
                                        <div className="cat-thumbnail">
                                            <img src="../assets/images/products/t-percutorB.png" alt="t Percutor"></img>
                                        </div>
                                    </div>
                                    <div className="cat-content">
                                        <h3 className="title"><a href="/product-details">Taladro Percutor</a></h3>
                                        <p>BauKer</p>
                                        <span className="product-price">229,900  COP<span className="dispo in-stock">DISPONIBLE</span></span>
                                        <div className="categorie-meta">
                                            <ul>
                                                <li><span>Envío Nacional</span></li>
                                                <li><span><a href="/cart">Comprar</a></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*! --====== End categorie section ======-->*/}
        </div>
    );
};

export default CategoriesGrid;