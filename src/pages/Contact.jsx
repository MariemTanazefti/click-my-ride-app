import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
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
                            <h1 className="text-anime-style-3" data-cursor="-opaque">Contact Us</h1>
                            <nav className="wow fadeInUp">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">contact us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/*Page Contact Us Start */}
    <div className="page-contact-us">
        <div className="contact-info-form">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-information">
                            <div className="section-title">
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Contact information</h2>
                                <p>Say something to start a live chat!</p>
                            </div>
                            
                            <div className="contact-info-list">
                                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.25s">
                                    <div className="icon-box">
                                        <img src="assets/images/icon-phone.svg" alt=""/>
                                    </div>
                                    
                                    <div className="contact-info-content">
                                        <p>(+01) 789 854 856</p>
                                    </div>
                                </div>
                              
                                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="icon-box">
                                        <img src="assets/images/icon-mail.svg" alt=""/>
                                    </div>
                                    
                                    <div className="contact-info-content">
                                        <p>info@domain.com</p>
                                    </div>
                                   
                                </div>
                            
                                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.75s">
                                    <div className="icon-box">
                                        <img src="assets/images/icon-location.svg" alt=""/>
                                    </div>
                                 
                                    <div className="contact-info-content">
                                        <p>1234 Elm Street, Suite 567 Springfield, United States</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="contact-info-social wow fadeInUp" data-wow-delay="0.5s">
                                <ul>
                                    <li><Link to="#"><i class="fa-brands fa-facebook-f"></i></Link></li>
                                    <li><Link to="#"><i class="fa-brands fa-twitter"></i></Link></li>
                                    <li><Link to ="#"><i class="fa-brands fa-linkedin-in"></i></Link></li>
                                    <li><Link to="#"><i class="fa-brands fa-instagram"></i></Link></li>                                                                
                                </ul>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-6">
                        <div className="contact-us-form">
                            <form id="contactForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp" data-wow-delay="0.5s">
                                <div className="row">
                                    <div className="form-group col-md-6 mb-4">
                                        <label>first name</label>
                                        <input type="text" name="name" className="form-control" id="fname" placeholder="Enter Your Name" required/>
                                        <div className="help-block with-errors"></div>
                                    </div>
    
                                    <div className="form-group col-md-6 mb-4">
                                        <label>last name</label>
                                        <input type="text" name="name" className="form-control" id="lname" placeholder="Enter Your Name" required/>
                                        <div className="help-block with-errors"></div>
                                    </div>
    
                                    <div className="form-group col-md-6 mb-4">
                                        <label>email</label>
                                        <input type="email" name ="email" className="form-control" id="email" placeholder="Enter Your Email" required/>
                                        <div className="help-block with-errors"></div>
                                    </div>
    
                                    <div className="form-group col-md-6 mb-4">
                                        <label>phone</label>
                                        <input type="text" name="phone" className="form-control" id="phone" placeholder="Enter Your Number" required/>
                                        <div className="help-block with-errors"></div>
                                    </div>
    
                                    <div className="form-group col-md-12 mb-4">
                                        <label>message</label>
                                        <textarea name="msg" className="form-control" id="msg" rows="4" placeholder="Write Your Message" required></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
    
                                    <div className="col-lg-12">
                                        <div className="contact-form-btn">
                                            <button type="submit" className="btn-default">send message</button>
                                            <div id="msgSubmit" className="h3 hidden"></div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Google Map Start*/}
	<div className="google-map">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h3 className="wow fadeInUp">location</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">How to reach our location</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="google-map-iframe">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map of New York City"
></iframe>
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

export default Contact;