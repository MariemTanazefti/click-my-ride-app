import React from "react";
import { Link } from "react-router-dom";
const DriverSingle = () => {
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
                            <h1 className="text-anime-style-3" data-cursor="-opaque">John Smith</h1>
                            <nav className="wow fadeInUp">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">drivers</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">John Smith</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Page Team Single Start */}
    <div className="page-team-single">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="team-member-details">
                        <div className="team-member-image">
                            <figure className="image-anime">
                                <img src="assets/images/team-1.jpg" alt=""/>
                            </figure>
                        </div>
                       
                        <div className="team-member-content">
                            <div className="team-member-title">
                                <h2 className="wow fadeInUp">john smith</h2>
                                <p className="wow fadeInUp" data-wow-delay="0.25s">senior chauffeur</p>
                            </div>
                          
                            <div className="team-member-body wow fadeInUp" data-wow-delay="0.5s">
                                <ul>
                                    <li><span>Phone: </span>(+01) 789 456 789</li>
                                    <li><span>Email: </span>domain@gmail.com</li>
                                    <li><span>Position: </span>Senior Chauffeur</li>
                                </ul>
                            </div>
                            
                            <div className="member-social-list">
                                <ul className="wow fadeInUp" data-wow-delay="0.75s">
                                    <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                    <li><Link to="#"><i className="fa-brands fa-youtube"></i></Link></li>
                                    <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                    <li><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>									
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="team-member-intro">
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Introduction</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">John biography</h2>
                        </div>

                        <div className="team-intro-content">
                            <p className="wow fadeInUp">We pride ourselves on having a team of highly skilled and professional drivers dedicated to providing you with the best possible service. Here are some of the top drivers who make your journeys safe, comfortable, and enjoyable:</p>
                            <p className="wow fadeInUp" data-wow-delay="0.25s">John brings over 15 years of professional driving experience to our team. His extensive knowledge of the city, coupled with his impeccable driving skills, ensures that you reach your destination safely and on time. John is known for his punctuality and professionalism, making him a favorite among our corporate clients.</p>
                        </div>

                        <div className="team-member-specialty wow fadeInUp" data-wow-delay="0.5s">
                            <ul>
                                <li><span>Experience :</span> 15 years</li>
                                <li><span>Specialty :</span> Senior Chauffeur, Airport Transfer</li>
                                <li><span>Specialty :</span> English, spanish</li>
                            </ul>
                        </div>
                    </div>
                   
                    <div className="team-member-features">
                        <div className="section-title">
                            <h3 className="wow fadeInUp">features</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Know about john</h2>
                        </div>

                        <div className="team-features-content wow fadeInUp" data-wow-delay="0.25s">
                            <p>We pride ourselves on having a team of highly skilled and professional drivers dedicated to providing you with the best possible service.</p>
                        </div>
                        
                        <div className="team-features-list wow fadeInUp" data-wow-delay="0.5s">
                            <ul>
                                <li>Qualified and Experienced</li>
                                <li>Safety First</li>
                                <li>Highly Trained</li>
                                <li>Personalized Experience</li>
                                <li>Years of Experience</li>
                                <li>Local Knowledge</li>
                            </ul>
                        </div>
                    </div>

                    <div className="team-member-testimonials">
                       <div className="section-title">
                            <h3 className="wow fadeInUp">testimonials</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Customers feedback</h2>
                        </div>
                        
                        <div className="team-member-slider">
                            <div className="swiper">
                                <div className="swiper-wrapper" data-cursor-text="Drag">
                                    <div className="swiper-slide">
                                        <div className="team-feedback-item">
                                            <div className="quote-icon-box">
                                                <img src="assets/images/icon-quote-img-1.svg" alt=""/>
                                            </div>
                                            
                                            <div className="team-feedback-content">
                                                <p>John is professionalism and attention to detail are outstanding. We felt safe and well-cared-for throughout our journey.</p>
                                            </div>
                                            
                                            <div className="team-feedback-body">
                                                <h3>dakota young</h3>
                                                <p>customers</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="swiper-slide">
                                        <div className="team-feedback-item">
                                            <div className="quote-icon-box">
                                                <img src="assets/simages/icon-quote-img-1.svg" alt=""/>
                                            </div>
                                           
                                            <div className="team-feedback-content">
                                                <p>John is professionalism and attention to detail are outstanding. We felt safe and well-cared-for throughout our journey.</p>
                                            </div>
                                            
                                            <div className="team-feedback-body">
                                                <h3>casey davis</h3>
                                                <p>customers</p>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="swiper-slide">
                                        <div className="team-feedback-item">
                                            <div className="quote-icon-box">
                                                <img src="assets/images/icon-quote-img-1.svg" alt=""/>
                                            </div>
                                            
                                            <div className="team-feedback-content">
                                                <p>John is professionalism and attention to detail are outstanding. We felt safe and well-cared-for throughout our journey.</p>
                                            </div>
                                            
                                            <div className="team-feedback-body">
                                                <h3>jamie clark</h3>
                                                <p>customers</p>
                                            </div>
                                           
                                        </div>
                                      
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
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

export default DriverSingle;