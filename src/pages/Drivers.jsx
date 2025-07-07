import React from "react";
import { Link } from "react-router-dom";
const Drivers = () => {
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
                                        <li className="nav-item">< Link to="/" className="nav-link" >Home</Link></li>
                                        <li className="nav-item"><Link to="/about" className="nav-link" >About Us</Link></li>
                                        <li className="nav-item"><Link to="/service" className="nav-link" >Services</Link></li>
                                        <li className="nav-item submenu"><Link to="/cars" className="nav-link" >Cars</Link>
                                            <ul>
                                                <li className="nav-item"><Link to="/cars" className="nav-link" >Car Lists</Link></li>
                                                <li className="nav-item"><Link to="/car-single" className="nav-link" >Car Details</Link></li>
                                                <li className="nav-item"><Link to="/car-type" className="nav-link" >Cars Type</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item submenu"><Link to="/" className="nav-link" >Pages</Link>
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
                                        </li>
                                        <li className="nav-item"><Link to="/contact" className="nav-link" >Contact Us</Link></li>
                                    </ul>
                                </div>
                                <div className="header-btn d-inline-flex">
                                    <Link to="/" className="btn-default">book a rental</Link>
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
                                <h1 className="text-anime-style-3" data-cursor="-opaque">Our Drivers</h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">drivers</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Page Drivers Start*/}
            <div className="page-drivers">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="team-member-item wow fadeInUp">
                                <div className="team-image">
                                    <figure className="image-anime">
                                        <img src="assets/images/team-1.jpg" alt="" />
                                    </figure>

                                    <div className="team-social-icon">
                                        <ul>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-youtube"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>john smith</h3>
                                    <p>senior chauffeur</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="team-member-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="team-image">
                                    <figure className="image-anime">
                                        <img src="assets/images/team-2.jpg" alt="" />
                                    </figure>

                                    <div className="team-social-icon">
                                        <ul>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-youtube"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>taylor smith</h3>
                                    <p>city tour guide</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="team-member-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="team-image">
                                    <figure className="image-anime">
                                        <img src="assets/images/team-3.jpg" alt="" />
                                    </figure>

                                    <div className="team-social-icon">
                                        <ul>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-youtube"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>jordan brown</h3>
                                    <p>distance driver</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="team-member-item wow fadeInUp" data-wow-delay="0.6s">
                                <div className="team-image">
                                    <figure className="image-anime">
                                        <img src="assets/images/team-4.jpg" alt="" />
                                    </figure>

                                    <div className="team-social-icon">
                                        <ul>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-youtube"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>davis casey</h3>
                                    <p>travel specialist</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="team-member-item wow fadeInUp" data-wow-delay="0.8s">
                                <div className="team-image">
                                    <figure className="image-anime">
                                        <img src="assets/images/team-5.jpg" alt="" />
                                    </figure>

                                    <div className="team-social-icon">
                                        <ul>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-youtube"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>morgan lee</h3>
                                    <p>travel consultant</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="team-member-item wow fadeInUp" data-wow-delay="1s">
                                <div className="team-image">
                                    <figure className="image-anime">
                                        <img src="assets/images/team-6.jpg" alt="" />
                                    </figure>

                                    <div className="team-social-icon">
                                        <ul>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-youtube"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>carlos mendes</h3>
                                    <p>airport transfer</p>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="team-member-item wow fadeInUp" data-wow-delay="1.2s">
                                <div className="team-image">
                                    <figure className="image-anime">
                                        <img src="assets/images/team-7.jpg" alt="" />
                                    </figure>

                                    <div className="team-social-icon">
                                        <ul>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-youtube"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="team-content">
                                    <h3>riley walker</h3>
                                    <p>executive chauffeur</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="team-member-item wow fadeInUp" data-wow-delay="1.4s">
                                <div className="team-image">
                                    <figure className="image-anime">
                                        <img src="assets/images/team-8.jpg" alt="" />
                                    </figure>

                                    <div className="team-social-icon">
                                        <ul>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-youtube"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>avery hall</h3>
                                    <p>shuttle driver</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Start*/}
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
                            <div className="footer-links footer-quick-links">
                                <h3>legal policy</h3>
                                <ul>
                                    <li><Link to="/">term & condition</Link></li>
                                    <li><Link to="/">privacy policy</Link></li>
                                    <li><Link to="/">legal notice</Link></li>
                                    <li><Link to="/">accessibility</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="footer-links footer-menu">
                                <h3>quick links</h3>
                                <ul>
                                    <li><Link to="/">home</Link></li>
                                    <li><Link to="/about">about us</Link></li>
                                    <li><Link to="/cars">cars</Link></li>
                                    <li><Link to="/service">services</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="footer-newsletter">
                                <h3>Subscribe to the Newsleeters</h3>
                                <div className="footer-newsletter-form">
                                    <form id="newslettersForm" action="/" method="POST">
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" id="mail" placeholder="Email ..." required />
                                            <button type="submit" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt="" /></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-copyright">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-7">
                                <div className="footer-copyright-text">
                                    <p>© 2024 Novaride. All rights reserved.</p>
                                </div>
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
                    </div>
                </div>
            </footer>




            )
        </>
    );
}

export default Drivers;