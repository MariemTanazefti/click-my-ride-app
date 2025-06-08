import React from "react";
import { Link } from "react-router-dom";

const Faqs = () =>{
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
                            <h1 className="text-anime-style-3" data-cursor="-opaque">FAQs</h1>
                            <nav className="wow fadeInUp">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">faqs</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         {/* Page Faqs Start */}
    <div className="page-faqs">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="faq-sidebar">
                        <div className="faq-catagery-list wow fadeInUp" data-wow-delay="0.25s">
                            <ul>
                                <li><Link to="#general_information">general information</Link></li>
                                <li><Link to="#booking_and_reservations">booking and reservations</Link></li>
                                <li><Link to="#pricing_and_payment">pricing and payment</Link></li>
                                <li><Link to="#vehicle_information">vehicle information</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-8">
                    <div className="rental-condition-accordion" id="general_information">
                        <div className="section-title faqs-section-title">
                            <h3 className="wow fadeInUp">FAQs</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">General information</h2>
                        </div>
                        <div className="faq-accordion" id="accordion">
                            <div className="accordion-item wow fadeInUp">
                                <h2 className="accordion-header" id="heading1">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                        What types of vehicles are available for rent?
                                    </button>
                                </h2>
                                <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1"
                                    data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <p>Yes, we accept international driver's licenses. An additional government-issued ID, such as a passport, is also required.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.25s">
                                <h2 className="accordion-header" id="heading2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                        Where are your rental locations?
                                    </button>
                                </h2>
                                <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2"
                                    data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <p>Yes, we accept international driver's licenses. An additional government-issued ID, such as a passport, is also required.</p>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                                <h2 className="accordion-header" id="heading3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                        What are your hours of operation?
                                    </button>
                                </h2>
                                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3"
                                    data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <p>Yes, we accept international driver's licenses. An additional government-issued ID, such as a passport, is also required.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="rental-condition-accordion" id="booking_and_reservations">
                        <div className="section-title faqs-section-title">
                            <h3 className="wow fadeInUp">FAQs</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Booking and reservations</h2>
                        </div>
                        <div className="faq-accordion" id="accordion1">
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.75s">
                                <h2 className="accordion-header" id="heading4">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                        How do I make a reservation?
                                    </button>
                                </h2>
                                <div id="collapse4" className="accordion-collapse collapse show" aria-labelledby="heading4"
                                    data-bs-parent="#accordion1">
                                    <div className="accordion-body">
                                        <p>Yes, you can rent a car for someone else, but the primary driver must be present at the time of rental to provide their driver's license and sign the rental agreement.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="accordion-item wow fadeInUp" data-wow-delay="1s">
                                <h2 className="accordion-header" id="heading5">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                        Can I modify or cancel my reservation?
                                    </button>
                                </h2>
                                <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5"
                                    data-bs-parent="#accordion1">
                                    <div className="accordion-body">
                                        <p>Yes, you can rent a car for someone else, but the primary driver must be present at the time of rental to provide their driver's license and sign the rental agreement.</p>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                                <h2 className="accordion-header" id="heading6">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                        What is your cancellation policy?
                                    </button>
                                </h2>
                                <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6"
                                    data-bs-parent="#accordion1">
                                    <div class="accordion-body">
                                        <p>Yes, you can rent a car for someone else, but the primary driver must be present at the time of rental to provide their driver's license and sign the rental agreement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="rental-condition-accordion" id="pricing_and_payment">
                        <div className="section-title faqs-section-title">
                            <h3 className="wow fadeInUp">FAQs</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Pricing and payment</h2>
                        </div>
                        <div className="faq-accordion" id="accordion2">
                            <div className="accordion-item wow fadeInUp">
                                <h2 className="accordion-header" id="heading7">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                        What forms of payment do you accept?
                                    </button>
                                </h2>
                                <div id="collapse7" className="accordion-collapse collapse show" aria-labelledby="heading7"
                                    data-bs-parent="#accordion2">
                                    <div className="accordion-body">
                                        <p>Reservations can be made online through our website, by calling our customer service hotline, or by visiting one of our rental locations in person.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.25s">
                                <h2 className="accordion-header" id="heading8">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                        Are there any hidden fees?
                                    </button>
                                </h2>
                                <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8"
                                    data-bs-parent="#accordion2">
                                    <div className="accordion-body">
                                        <p>Reservations can be made online through our website, by calling our customer service hotline, or by visiting one of our rental locations in person.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                                <h2 className="accordion-header" id="heading9">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                        Do you require a deposit?
                                    </button>
                                </h2>
                                <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9"
                                    data-bs-parent="#accordion2">
                                    <div className="accordion-body">
                                        <p>Reservations can be made online through our website, by calling our customer service hotline, or by visiting one of our rental locations in person.</p>
                                    </div>
                                </div>
                            </div>
            
                        </div>
                    </div>
                    
                    <div className="rental-condition-accordion" id="vehicle_information">
                        <div className="section-title faqs-section-title">
                            <h3 className="wow fadeInUp">FAQs</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Vehicle information</h2>
                        </div>
                        <div className="faq-accordion" id="accordion3">
                            <div className="accordion-item wow fadeInUp">
                                <h2 className="accordion-header" id="heading10">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse10" aria-expanded="true" aria-controls="collapse10">
                                        Are your vehicles insured?
                                    </button>
                                </h2>
                                <div id="collapse10" className="accordion-collapse collapse show" aria-labelledby="heading10"
                                    data-bs-parent="#accordion3">
                                    <div className="accordion-body">
                                        <p>We offer a diverse fleet of vehicles, including economy cars, compact cars, SUVs, luxury cars, and more to suit various needs and preferences.</p>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.25s">
                                <h2 className="accordion-header" id="heading11">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                        Do you offer vehicles with automatic transmission?
                                    </button>
                                </h2>
                                <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11"
                                    data-bs-parent="#accordion3">
                                    <div className="accordion-body">
                                        <p>We offer a diverse fleet of vehicles, including economy cars, compact cars, SUVs, luxury cars, and more to suit various needs and preferences.</p>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                                <h2 className="accordion-header" id="heading12">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                        Can I choose a specific vehicle model?
                                    </button>
                                </h2>
                                <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12"
                                    data-bs-parent="#accordion3">
                                    <div className="accordion-body">
                                        <p>We offer a diverse fleet of vehicles, including economy cars, compact cars, SUVs, luxury cars, and more to suit various needs and preferences.</p>
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
        
export default Faqs;

