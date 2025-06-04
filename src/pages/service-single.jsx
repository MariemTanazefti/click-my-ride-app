import React from "react";
import { Link } from "react-router-dom";

const ServiceSingle = () =>{
    return(
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
                            <h1 className="text-anime-style-3" data-cursor="-opaque">Business Car Rental</h1>
                            <nav className="wow fadeInUp">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">service</Link></li>

                                    <li className="breadcrumb-item active" aria-current="page">business car rental</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       {/* Page Service Single Start */}
    <div className="page-service-single">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="service-sidebar">
                        <div class="service-catagery-list wow fadeInUp">
                            <h3>our services</h3>
                            <ul>
                                <li><Link to="#">Car Rental with Driver</Link></li>
                                <li><Link to="#">Business Car Rental</Link></li>
                                <li><Link to="#">Airport Transfer</Link></li>
                                <li><Link to="#">chauffeur services</Link></li>
                            </ul>
                        </div>
                       
                        <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                            <div className="cta-contact-item">
                                <div className="icon-box">
                                    <img src="assets/images/icon-sidebar-cta.svg" alt=""/>
                                </div>
                                <div className="cta-contact-content">
                                    <h2>Need help ?</h2>
                                    <p>We strive to provide exceptional customer service and support. Whether you have questions.</p>
                                </div>
                                <div className="cta-contact-btn">
                                    <Link to="#" className="btn-default">contact now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8">
                    <div className="service-single-content">
                        <div className="service-featured-image">
                            <figure className="image-anime reveal">
                                <img src="assets/images/service-single-img.jpg" alt=""/>
                            </figure>
                        </div>
                    
                        <div className="service-entry">
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Discover premium rental services</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">We offer a wide range of car rental services designed to meet all your transportation needs. Whether you’re traveling for business, planning a family vacation, or need a reliable vehicle for a special event, we have the perfect solution for you.</p>
                            <p className="wow fadeInUp" data-wow-delay="0.4s">We offer a comprehensive range of car rental services designed to meet the diverse needs of our clients. Whether you're traveling for business, planning a family vacation, or need a reliable vehicle for a special event, our fleet and services are tailored to provide you with the perfect solution. Discover the various services we offer and why we are the preferred choice for car rentals.</p>
                            <ul className="wow fadeInUp" data-wow-delay="0.6s">
                                <li>24/7 Roadside Assistance</li>
                                <li>Free Cancellation & Return</li>
                                <li>Rent Now Pay When You Arrive</li>
                                <li>24/7 Roadside Assistance</li>
                                <li>Free Cancellation & Return</li>
                                <li>Rent Now Pay When You Arrive</li>
                            </ul>

                            <div className="service-entry-gallery">
                                <div className="row gallery-items">
                                    <div className="col-lg-3 col-6">
                                        <div className="service-gallery wow fadeInUp" data-wow-delay="0.2s" data-cursor-text="View">
                                            <Link to="assets/images/service-gallery-1.jpg">
                                                <figure className="image-anime">
                                                    <img src="assets/images/service-gallery-1.jpg" alt="img"/>
                                                </figure>
                                            </Link>
                                        </div>
                                    </div>
                
                                    <div className="col-lg-3 col-6">
                                        <div className="service-gallery wow fadeInUp" data-wow-delay="0.4s" data-cursor-text="View">
                                            <Link to="assets/images/service-gallery-2.jpg">
                                                <figure class="image-anime">
                                                    <img src="assets/images/service-gallery-2.jpg" alt="img"/>
                                                </figure>
                                            </Link>
                                        </div>
                                    </div>
                
                                    <div className="col-lg-3 col-6">
                                        <div className="service-gallery wow fadeInUp" data-wow-delay="0.6s" data-cursor-text="View">
                                            <Link to="assets/images/service-gallery-3.jpg">
                                                <figure className="image-anime">
                                                    <img src="assets/images/service-gallery-3.jpg" alt="img"/>
                                                </figure>
                                            </Link>
                                        </div>
                                    </div>
                
                                    <div className="col-lg-3 col-6">
                                        <div className="service-gallery wow fadeInUp" data-wow-delay="0.8s" data-cursor-text="View">
                                            <Link to="assets/images/service-gallery-4.jpg">
                                                <figure className="image-anime">
                                                    <img src="assets/images/service-gallery-4.jpg" alt="img"/>
                                                </figure>
                                            </Link>
                                        </div>
                                    </div>                                   
                                </div>
                            </div>
                        </div>

                        <div className="rental-conditions-faqs">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">frequently asked questions</h3>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">You need to know about service</h2>
                            </div>

                            <div className="rental-condition-accordion" id="rentalaccordion">
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="rentalheading1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#rentalcollapse1" aria-expanded="true" aria-controls="rentalcollapse1">
                                            Driver's License Requirements
                                        </button>
                                    </h2>
                                    <div id="rentalcollapse1" className="accordion-collapse collapse show" aria-labelledby="rentalheading1"
                                        data-bs-parent="#rentalaccordion">
                                        <div className="accordion-body">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.25s">
                                    <h2 className="accordion-header" id="rentalheading2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#rentalcollapse2" aria-expanded="false" aria-controls="rentalcollapse2">
                                            Insurance and Coverage policy
                                        </button>
                                    </h2>
                                    <div id="rentalcollapse2" className="accordion-collapse collapse" aria-labelledby="rentalheading2"
                                        data-bs-parent="#rentalaccordion">
                                        <div className="accordion-body">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                                    <h2 className="accordion-header" id="rentalheading3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#rentalcollapse3" aria-expanded="false" aria-controls="rentalcollapse3">
                                            Available payment Methods
                                        </button>
                                    </h2>
                                    <div id="rentalcollapse3" className="accordion-collapse collapse" aria-labelledby="rentalheading3"
                                        data-bs-parent="#rentalaccordion">
                                        <div className="accordion-body">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.75s">
                                    <h2 className="accordion-header" id="rentalheading4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#rentalcollapse4" aria-expanded="false" aria-controls="rentalcollapse4">
                                            Cancellation and Modification policy
                                        </button>
                                    </h2>
                                    <div id="rentalcollapse4" className="accordion-collapse collapse" aria-labelledby="rentalheading4"
                                        data-bs-parent="#rentalaccordion">
                                        <div className="accordion-body">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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




)
    </>
    );
}

export default ServiceSingle;