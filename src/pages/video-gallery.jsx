import React from "react";
import { Link } from "react-router-dom";
const VideoGallery = () => {
    return (

        <>
        {/* Preloader Start*/ }
                    <div className="preloader">
                    <div className="loading-container">
                        <div className="loading"></div>
                        <div id="loading-icon"><img src="assets/images/loader.svg" alt=""/></div>
                    </div>
                </div>
            
                {/* Header Start */}
                <header className="main-header">
                    <div className="header-sticky">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container">
                                <Link to="/" className="navbar-brand" >
                                    <img src="assets/images/logo.svg" alt="Logo"/>
                                </Link>
                              
                                <div className="collapse navbar-collapse main-menu">
                                    <div className="nav-menu-wrapper">
                                        <ul className="navbar-nav mr-auto" id="menu">
                                            <li className="nav-item submenu">< Link to="/" className="nav-link" >Home</Link>
                                                <ul>
                                                    <li className="nav-item submenu"><Link to="index-2.html" className="nav-link" >Home - Light</Link>
                                                        <ul>    
                                                            <li className="nav-item"><Link to="index-2.html" className="nav-link" >Home - Background Image</Link></li>
                                                            <li className="nav-item"><Link to="index-3.html" className="nav-link" >Home - Background Video</Link></li>
                                                            <li className="nav-item"><Link to="index-4.html" className="nav-link" >Home - Background Slider</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item submenu"><Link to="https://html.awaikenthemes.com/novaride/dark/index.html" className="nav-link" >Home - Dark</Link>
                                                        <ul>    
                                                            <li className="nav-item"><Link to="https://html.awaikenthemes.com/novaride/dark/index.html" className="nav-link" >Home - Background Image</Link></li>
                                                            <li className="nav-item"><Link to="https://html.awaikenthemes.com/novaride/dark/index-2.html" className="nav-link" >Home - Background Video</Link></li>
                                                            <li className="nav-item"><Link to="https://html.awaikenthemes.com/novaride/dark/index-3.html" className="nav-link" >Home - Background Slider</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
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
                                    <h1 className="text-anime-style-3" data-cursor="-opaque">Video Gallery</h1>
                                    <nav className="wow fadeInUp">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">gallery</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page Video Gallery Start */}
    <div className="page-video-gallery">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="video-gallery-image wow fadeInUp" data-cursor-text="Play">
                        <Link to="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="assets/images/video-gallery-img-1.jpg" alt=""/>
                            </figure>
                        </Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.2s" data-cursor-text="Play">
                        <Link to="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="assets/images/video-gallery-img-2.jpg" alt=""/>
                            </figure>
                        </Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.4s" data-cursor-text="Play">
                        <Link to="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="assets/images/video-gallery-img-3.jpg" alt=""/>
                            </figure>
                        </Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.6s" data-cursor-text="Play">
                        <Link to="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="assets/images/video-gallery-img-4.jpg" alt=""/>
                            </figure>
                        </Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.8s" data-cursor-text="Play">
                        <Link to="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="assets/images/video-gallery-img-5.jpg" alt=""/>
                            </figure>
                        </Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="1s" data-cursor-text="Play">
                        <Link to="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="assets/images/video-gallery-img-6.jpg" alt=""/>
                            </figure>
                        </Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="1.2s" data-cursor-text="Play">
                        <Link to="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="assets/images/video-gallery-img-7.jpg" alt=""/>
                            </figure>
                        </Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="1.4s" data-cursor-text="Play">
                        <Link to="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="assets/images/video-gallery-img-8.jpg" alt=""/>
                            </figure>
                        </Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="1.6s" data-cursor-text="Play">
                        <Link to="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="assets/images/video-gallery-img-9.jpg" alt=""/>
                            </figure>
                        </Link>
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
                                                    <img src="assets/images/footer-logo.svg" alt=""/>
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
                                                            <input type="email" name="email" className="form-control"  id="mail" placeholder="Email ..." required/>
                                                            <button type="submit" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></button>
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
                
                            
                    </>
                    );
                }
                
export default VideoGallery;
