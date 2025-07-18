import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
    return (
        <>
            {/* Preloader Start*/}
            <div className="preloader">
                <div className="loading-container">
                    <div className="loading"></div>
                    <div id="loading-icon"><img src="assets/images/loader.svg" alt="" /></div>
                </div>
            </div>

            {/* Header Start */}
            <header className="main-header">
                <div className="header-sticky">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <Link to="/" className="navbar-brand" >
                                <img src="assets/images/logo.svg" alt="Logo" />
                            </Link>

                            <div className="collapse navbar-collapse main-menu">
                                <div className="nav-menu-wrapper">
                                    <ul className="navbar-nav mr-auto" id="menu">
                                        <li className="nav-item">< Link to="/" className="nav-link" >Acceuil</Link></li>
                                        <li className="nav-item"><Link to="/about" className="nav-link" >A propos de nous</Link></li>
                                        <li className="nav-item"><Link to="/service" className="nav-link" >Services</Link></li>
                                        <li className="nav-item "><Link to="/cars" className="nav-link" >Voitures</Link>
                                            {/* <ul>
                                                <li className="nav-item"><Link to="/cars" className="nav-link" >Car Lists</Link></li>
                                                <li className="nav-item"><Link to="/car-single" className="nav-link" >Car Details</Link></li>
                                                <li className="nav-item"><Link to="/car-type" className="nav-link" >Cars Type</Link></li>
                                            </ul> */}
                                        </li>
                                        {/* <li className="nav-item submenu"><Link to="/" className="nav-link" >Pages</Link>
                                            <ul>
                                                <li className="nav-item"><Link to="/service-single" className="nav-link" >Service Details</Link></li>
                                                <li className="nav-item"><Link to="/blog" className="nav-link" >Blog</Link></li>
                                                <li className="nav-item"><Link to="/blog-single" className="nav-link" >Blog Details</Link></li>
                                                <li className="nav-item"><Link to="/drivers" className="nav-link" >Drivers</Link></li>
                                                <li className="nav-item"><Link to="/driver-single" className="nav-link" >Driver Details</Link></li>
                                                <li className="nav-item"><Link to="/pricing" className="nav-link" >Pricing</Link></li>
                                                <li className="nav-item"><Link to="/image-gallery" className="nav-link" >Image Gallery</Link></li>
                                                <li className="nav-item"><Link to="/video-gallery" className="nav-link" >Video Gallery</Link></li>
                                                <li className="nav-item"><Link to="/testimonials" className="nav-link" >Testimonials</Link></li>
                                                <li className="nav-item"><Link to="/faqs" className="nav-link" >FAQ's</Link></li>
                                                <li className="nav-item"><Link to="/404" className="nav-link" >404</Link></li>
                                            </ul>
                                        </li> */}
                                        <li className="nav-item"><Link to="/contact" className="nav-link" >Contactez-nous</Link></li>
                                    </ul>
                                </div>
                                <div className="header-btn d-inline-flex">
                                    <Link to="/" className="btn-default">Inscription</Link>
                                </div>
                            </div>
                            <div className="navbar-toggle"></div>
                        </div>
                    </nav>
                    <div className="responsive-menu"></div>
                </div>
            </header>

            {/* Page Header Start */}
            <div className="page-header bg-section parallaxie">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-header-box">
                                <h1 className="text-anime-style-3" data-cursor="-opaque">Nos Services</h1>
                                {/* <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">services</li>
                                    </ol>
                                </nav> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Page Services Section Start */}
            <div className="page-services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item wow fadeInUp">
                                <div className="icon-box">
                                    <img src="assets/images/icon-service-1.svg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h3>Location de voiture avec chauffeur</h3>
                                    <p>Enhance your rental experience with additional options.</p>
                                </div>
                                <div className="service-footer">
                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon-box">
                                    <img src="assets/images/icon-service-2.svg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h3>Location de voitures d'affaires</h3>
                                    <p>Enhance your rental experience with additional options.</p>
                                </div>
                                <div className="service-footer">
                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-box">
                                    <img src="assets/images/icon-service-3.svg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h3>Transfert aéroport</h3>
                                    <p>Enhance your rental experience with additional options.</p>
                                </div>
                                <div className="service-footer">
                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
                                <div className="icon-box">
                                    <img src="assets/images/icon-service-4.svg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h3>services de chauffeur</h3>
                                    <p>Enhance your rental experience with additional options.</p>
                                </div>
                                <div className="service-footer">
                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="service-item wow fadeInUp" data-wow-delay="0.8s">
                                <div className="icon-box">
                                    <img src="assets/images/icon-service-5.svg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h3>transfert privé</h3>
                                    <p>Enhance your rental experience with additional options.</p>
                                </div>
                                <div className="service-footer">
                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="service-item wow fadeInUp" data-wow-delay="1s">
                                <div className="icon-box">
                                    <img src="assets/images/icon-service-6.svg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h3>Transfert VIP</h3>
                                    <p>Enhance your rental experience with additional options.</p>
                                </div>
                                <div className="service-footer">
                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="service-item wow fadeInUp" data-wow-delay="1.2s">
                                <div className="icon-box">
                                    <img src="assets/images/icon-service-7.svg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h3>Assistance routière</h3>
                                    <p>Enhance your rental experience with additional options.</p>
                                </div>
                                <div className="service-footer">
                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="service-item wow fadeInUp" data-wow-delay="1.4s">
                                <div className="icon-box">
                                    <img src="assets/images/icon-service-8.svg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h3>Transport événementiel</h3>
                                    <p>Enhance your rental experience with additional options.</p>
                                </div>
                                <div className="service-footer">
                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Exclusive Partners Section Start */}
            <div className="exclusive-partners bg-section">
                <div className="container">
                    <div className="row section-row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">Partenaires exécutifs</h3>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Approuvé par les plus grandes marques</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="0.2s">
                                <img src="assets/images/icon-partners-1.svg" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="0.4s">
                                <img src="assets/images/icon-partners-2.svg" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="0.6s">
                                <img src="assets/images/icon-partners-3.svg" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="0.8s">
                                <img src="assets/images/icon-partners-4.svg" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="1s">
                                <img src="assets/images/icon-partners-3.svg" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="1.2s">
                                <img src="assets/images/icon-partners-4.svg" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="1.4s">
                                <img src="assets/images/icon-partners-1.svg" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="1.6s">
                                <img src="assets/images/icon-partners-2.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Testiminial Start */}
            <div className="our-testimonial">
                <div className="container">
                    <div className="row section-row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">testimonials</h3>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">What our customers are saying about us</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonial-slider">
                                <div className="swiper">
                                    <div className="swiper-wrapper" data-cursor-text="Drag">
                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                                <div className="testimonial-header">
                                                    <div className="testimonial-rating">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p>Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.</p>
                                                    </div>
                                                </div>
                                                <div className="testimonial-body">
                                                    <div className="author-image">
                                                        <figure className="image-anime">
                                                            <img src="assets/images/author-1.jpg" alt="" />
                                                        </figure>
                                                    </div>
                                                    <div className="author-content">
                                                        <h3>floyd miles</h3>
                                                        <p>project manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                                <div className="testimonial-header">
                                                    <div className="testimonial-rating">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p>Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.</p>
                                                    </div>
                                                </div>
                                                <div className="testimonial-body">
                                                    <div className="author-image">
                                                        <figure className="image-anime">
                                                            <img src="assets/images/author-2.jpg" alt="" />
                                                        </figure>
                                                    </div>
                                                    <div className="author-content">
                                                        <h3>annette black</h3>
                                                        <p>project manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                                <div className="testimonial-header">
                                                    <div className="testimonial-rating">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p>Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.</p>
                                                    </div>
                                                </div>
                                                <div className="testimonial-body">
                                                    <div className="author-image">
                                                        <figure className="image-anime">
                                                            <img src="assets/images/author-3.jpg" alt="" />
                                                        </figure>
                                                    </div>
                                                    <div className="author-content">
                                                        <h3>leslie alexander</h3>
                                                        <p>project manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                                <div className="testimonial-header">
                                                    <div className="testimonial-rating">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p>Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.</p>
                                                    </div>
                                                </div>
                                                <div className="testimonial-body">
                                                    <div className="author-image">
                                                        <figure className="image-anime">
                                                            <img src="assets/images/author-4.jpg" alt="" />
                                                        </figure>
                                                    </div>
                                                    <div className="author-content">
                                                        <h3>alis white</h3>
                                                        <p>project manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-btn">
                                        <div className="testimonial-button-prev"></div>
                                        <div className="testimonial-button-next"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Start */}
                  <footer className="main-footer bg-section">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="about-footer">
                            <div className="footer-logo">
                              <img src="assets/images/footer-logo.svg" alt="" />
                            </div>
            
                            <div className="about-footer-content">
                              <p>Experience the ease and convenience of renting a car with Novaride. </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                          <div className="footer-links footer-menu">
                            <h3>Liens rapides</h3>
                            <ul>
                              <li><Link to="/">Acceuil</Link></li>
                              <li><Link to="/about">A propos</Link></li>
                              <li><Link to="/cars">Voitures</Link></li>
                              <li><Link to="/service">services</Link></li>
                              <li><Link to="/contact">Nous contacter</Link></li>
                            </ul>
                          </div>
                        </div>
            
            
            
            
            
                        <div className="col-lg-3 col-md-4">
                          <div className="footer-links footer-quick-links">
                            <h3>Location en ville</h3>
                            <ul>
                              <li><Link to="/">Tunis</Link></li>
                              <li><Link to="/">Sousse</Link></li>
                              <li><Link to="/">Mahdia</Link></li>
                              <li><Link to="/">Djerba</Link></li>
                            </ul>
                          </div>
                        </div>
            
                        <div className="col-lg-3 col-md-4">
                          <div className="footer-links footer-quick-links">
                            <h3>Location aéroport</h3>
                            <ul>
                              <li><Link to="/">Aéroport Tunis Carthage</Link></li>
                              <li><Link to="/">Aéroport Habib Bourguiba</Link></li>
                              <li><Link to="/">Aéroport Sfax</Link></li>
                              <li><Link to="/">Aéroport Djerba Mellita</Link></li>
                            </ul>
                          </div>
                        </div>
            
            
            
            
            
                      </div>
            
                      {/* <div className="footer-copyright">
                                          <div className="row align-items-center justify-content-between">
                                              <div className="col-lg-4 col-md-4 text-start">
                                                  <div className="footer-copyright-text">
                                                      <p>© 2025 Novaride. All rights reserved.</p>
                                                  </div>
                                              </div>
                  
                                              <div className="footer-links footer-quick-links">
                                                  <ul className="legal-links-horizontal">
                                                      <li><Link to="/">termes & conditions</Link></li>
                                                      <li><Link to="/">politique de confidentialité</Link></li>
                                                  </ul>
                                              </div>
                  
                                              <div className="col-lg-6 col-md-5">
                                                  <div className="footer-social-links">
                                                      <ul>
                                                          <li><Link to="/"><i className="fa-brands fa-youtube"></i></Link></li>
                                                          <li><Link to="/"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                                          <li><Link to="/"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                                          <li><Link to="/"><i className="fa-brands fa-instagram"></i></Link></li>
                                                          <li><Link to="/"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div> */}
            
                      <div className="footer-copyright">
                        <div className="row align-items-center">
                          <div className="col-lg-6 col-md-7">
                            <div className="footer-copyright-text">
                              <p>© 2025 Novaride. All rights reserved.</p>
                            </div>
                          </div>
            
                          <div className="col-lg-6 col-md-5">
                            <div className="footer-social-links">
                              <ul>
                                <li><Link to="/"><i className="fa-brands fa-youtube"></i></Link></li>
                                <li><Link to="/"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                <li><Link to="/"><i className="fa-brands fa-twitter"></i></Link></li>
                                <li><Link to="/"><i className="fa-brands fa-instagram"></i></Link></li>
                                <li><Link to="/"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
            
                    </div>
                  </footer>

            )
        </>
    );
}

export default Service;