import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (

        <>
            {/* Preloader */}
            <div className="preloader">
                <div className="loading-container">
                    <div className="loading"></div>
                    <div id="loading-icon">
                        <img src="assets/images/loader.svg" alt="" />
                    </div>
                </div>
            </div>


            {/* Header */}
            <header className="main-header">
                <div className="header-sticky">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">

                            <Link to="/" className="navbar-brand">
                                <img src="assets/images/logo.svg" alt="Logo" />
                            </Link>

                            <div className="collapse navbar-collapse main-menu">
                                <div className="nav-menu-wrapper">
                                    <ul className="navbar-nav mr-auto" id="menu">
                                        <li className="nav-item submenu"><Link to="/" className="nav-link">Home</Link>
                                            <ul>
                                                <li className="nav-item submenu"><Link to="index-2.html" className="nav-link">Home - Light</Link>
                                                    <ul>
                                                        <li className="nav-item"><Link to="index-2.html" className="nav-link">Home - Background Image</Link></li>
                                                        <li className="nav-item"><Link to="index-3.html" className="nav-link">Home - Background Video</Link></li>
                                                        <li className="nav-item"><Link to="index-4.html" className="nav-link">Home - Background Slider</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item submenu"><Link to="https://html.awaikenthemes.com/novaride/dark/index.html" className="nav-link">Home - Dark</Link>
                                                    <ul>
                                                        <li className="nav-item"><Link to="https://html.awaikenthemes.com/novaride/dark/index.html" className="nav-link">Home - Background Image</Link></li>
                                                        <li className="nav-item"><Link to="https://html.awaikenthemes.com/novaride/dark/index-2.html" className="nav-link">Home - Background Video</Link></li>
                                                        <li className="nav-item"><Link to="https://html.awaikenthemes.com/novaride/dark/index-3.html" className="nav-link">Home - Background Slider</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
                                        <li className="nav-item"><Link to="service.jsx" className="nav-link">Services</Link></li>
                                        <li className="nav-item submenu"><Link to="/" className="nav-link">Cars</Link>
                                            <ul>
                                                <li className="nav-item"><Link to="Cars.jsx" className="nav-link">Car Lists</Link></li>
                                                <li className="nav-item"><Link to="car-single.jsx" className="nav-link">Car Details</Link></li>
                                                <li className="nav-item"><Link to="car-type.jsx" className="nav-link">Cars Type</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item submenu"><Link to="/" className="nav-link">Pages</Link>
                                            <ul>
                                                <li className="nav-item"><Link to="service-single.jsx" className="nav-link">Service Details</Link></li>
                                                <li className="nav-item"><Link to="blog.jsx" className="nav-link">Blog</Link></li>
                                                <li className="nav-item"><Link to="blog-single.jsx" className="nav-link">Blog Details</Link></li>
                                                <li className="nav-item"><Link to="drivers.jsx" className="nav-link">Drivers</Link></li>
                                                <li className="nav-item"><Link to="driver-single.jsx" className="nav-link">Driver Details</Link></li>
                                                <li className="nav-item"><Link to="pricing.jsx" className="nav-link">Pricing</Link></li>
                                                <li className="nav-item"><Link to="image-gallery.jsx" className="nav-link">Image Gallery</Link></li>
                                                <li className="nav-item"><Link to="video-gallery.jsx" className="nav-link">Video Gallery</Link></li>
                                                <li className="nav-item"><Link to="testimonials.jsx" className="nav-link">Testimonials</Link></li>
                                                <li className="nav-item"><Link to="faqs.html" className="nav-link">FAQ's</Link></li>
                                                <li className="nav-item"><Link to="404.html" className="nav-link">404</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item"><Link to="Contact.jsx" className="nav-link">Contact Us</Link></li>
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


            {/* Hero Section Start */}

            <div className="hero">
                <div className="hero-section bg-section parallaxie">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="hero-content">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">welcome to car rent</h3>
                                        <h1 className="text-anime-style-3" data-cursor="-opaque">Looking to save more on your rental car?</h1>
                                        <p className="wow fadeInUp" data-wow-delay="0.25s">Whether you're planning a weekend getaway, a business trip, or just need a reliable ride for the day, we offers a wide range of vehicles to suit your needs.</p>
                                    </div>

                                    <div className="hero-content-body wow fadeInUp" data-wow-delay="0.5s">
                                        <Link to="/" class="btn-default">book a rental</Link>
                                        <Link to="/" class="btn-default btn-highlighted">learn more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rent-details wow fadeInUp" data-wow-delay="0.75s">
                    <div className="container">
                        <form action="/" method="get">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-12">
                                    <div className="rent-details-box">
                                        <div className="rent-details-form">
                                            <div className="rent-details-item">
                                                <div className="icon-box">
                                                    <img src="images/icon-rent-details-1.svg" alt=""/>
                                                   </div>
                                                <div className="rent-details-content">
                                                    <h3>car type</h3>
                                                    <select className="rent-details-form form-select">
                                                        <option value="" disabled selected>Choose Car Type</option>
                                                        <option value="sport_car">sport car</option>
                                                        <option value="convertible_car">convertible car</option>
                                                        <option value="sedan_car">sedan car</option>
                                                        <option value="luxury_car">luxury car</option>
                                                        <option value="electric_car">electric car</option>
                                                        <option value="coupe_car">coupe car</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="rent-details-item">
                                                <div className="icon-box">
                                                    <img src="images/icon-rent-details-2.svg" alt=""/>
                                                    </div>
                                                <div className="rent-details-content">
                                                    <h3>pickup location</h3>
                                                    <select className="rent-details-form form-select">
                                                        <option value="" disabled selected>Pick Up Location</option>
                                                        <option value="abu_dhabi">abu dhabi</option>
                                                        <option value="alain">alain</option>
                                                        <option value="dubai">dubai</option>
                                                        <option value="sharjah">sharjah</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="rent-details-item">
                                                <div className="icon-box">
                                                    <img src="assets/images/icon-rent-details-3.svg" alt=""/>
                                                    </div>
                                                <div className="rent-details-content">
                                                    <h3>pickup date</h3>
                                                    <p><input type="text" name="date" placeholder="mm/dd/yyyy" className="rent-details-form datepicker" required/></p>
                                                </div>
                                            </div>
                                         
                                            <div className="rent-details-item">
                                                <div className="icon-box">
                                                    <img src="assets/images/icon-rent-details-4.svg" alt=""/>
                                                    </div>
                                                <div className="rent-details-content">
                                                    <h3>Dropoff location</h3>
                                                    <select className="rent-details-form form-select">
                                                        <option value="" disabled selected>Drop Off Location</option>
                                                        <option value="abu_dhabi">abu dhabi</option>
                                                        <option value="alain">alain</option>
                                                        <option value="sharjah">sharjah</option>
                                                    </select>
                                                </div>
                                            </div>
              
                                            <div className="rent-details-item">
                                                <div className="icon-box">
                                                    <img src="assets/images/icon-rent-details-5.svg" alt=""/>
                                                    </div>
                                                <div className="rent-details-content">
                                                    <h3>Return Date</h3>
                                                    <p><input type="text" name="date" placeholder="mm/dd/yyyy" className="rent-details-form datepicker" required/></p>
                                                </div>
                                            </div>

                                            <div className="rent-details-item rent-details-search">
                                                <Link to="/"><i className="fa-solid fa-magnifying-glass"></i></Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* About Us Section Start */}

    <div className="about-us">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about-image">
                        <div className="about-img-1">
                            <figure className="reveal">
                                <img src="assets/images/about-img-1.jpg" alt=""/>
                            </figure>
                        </div>

                        <div className="about-img-2">
                            <figure class="reveal">
                                <img src="assets/images/about-img-2.jpg" alt=""/>
                            </figure>
                        </div>
                    </div>
                </div>
    
                <div className="col-lg-6">
                    <div className="about-content">
                        <div className="section-title">
                            <h3 className="wow fadeInUp">about us</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Your trusted partner in reliable car rental</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.25s">Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga Dolor Saerror Sed Earum A Magni Soluta Quam Minus Dolor Dolor</p>
                        </div>

                        <div className="about-content-body">
                            <div className="about-trusted-booking wow fadeInUp" data-wow-delay="0.5s">
                                <div className="icon-box">
                                    <img src="assets/images/icon-about-trusted-1.svg" alt=""/>
                                </div>
                                <div className="trusted-booking-content">
                                    <h3>easy booking process</h3>
                                    <p>We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service</p>
                                </div>
                            </div>
                           
                            <div className="about-trusted-booking wow fadeInUp" data-wow-delay="0.75s">
                                <div className="icon-box">
                                    <img src="assets/images/icon-about-trusted-2.svg" alt=""/>
                                </div>
                                <div className="trusted-booking-content">
                                    <h3>convenient pick-up & return process</h3>
                                    <p>We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service</p>
                                </div>
                            </div>
                        </div>

                        <div className="about-content-footer wow fadeInUp" data-wow-delay="1s">
                            <Link to="/" className="btn-default">contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Our Services Section Start */}
    <div className="our-services bg-section">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h3 className="wow fadeInUp">our services</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Explore our wide range of rental services</h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="service-item wow fadeInUp">
                        <div className="icon-box">
                            <img src="assets/images/icon-service-1.svg" alt=""/>
                        </div>
                        <div className="service-content">
                            <h3>car rental with driver</h3>
                            <p>Enhance your rental experience with additional options.</p>
                        </div>
                        <div className="service-footer">
                            <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="service-item wow fadeInUp" data-wow-delay="0.25s">
                        <div className="icon-box">
                            <img src="assets/images/icon-service-2.svg" alt=""/>
                        </div>
                        <div className="service-content">
                            <h3>business car rental</h3>
                            <p>Enhance your rental experience with additional options.</p>
                        </div>
                        <div className="service-footer">
                            <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="service-item wow fadeInUp" data-wow-delay="0.5s">
                        <div className="icon-box">
                            <img src="assets/images/icon-service-3.svg" alt=""/>
                        </div>
                        <div className="service-content">
                            <h3>airport transfer</h3>
                            <p>Enhance your rental experience with additional options.</p>
                        </div>
                        <div className="service-footer">
                            <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="service-item wow fadeInUp" data-wow-delay="0.75s">
                        <div className="icon-box">
                            <img src="assets/images/icon-service-4.svg" alt=""/>
                        </div>
                        <div className="service-content">
                            <h3>chauffeur services</h3>
                            <p>Enhance your rental experience with additional options.</p>
                        </div>
                        <div className="service-footer">
                            <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="services-box-footer wow fadeInUp" data-wow-delay="1s">
                        <p>Discover our range of car rental services designed to meet all your travel needs. From a diverse fleet of vehicles to flexible rental plans.</p>
                        <Link to="/" className="btn-default">view all service</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

     {/*Perfect Fleets Section Start */}

    <div className="perfect-fleet bg-section">
        <div className="container-fluid">
            <div className="row section-row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h3 className="wow fadeInUp">our fleets</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Explore our perfect and extensive fleet</h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="car-details-slider">
                        <div className="swiper">
                            <div className="swiper-wrapper" data-cursor-text="Drag">
                                <div className="swiper-slide">
                                    <div className="perfect-fleet-item">
                                        <div className="image-box">
                                            <img src="assets/images/perfect-fleet-img-1.png" alt=""/>
                                        </div>
                                       
                                        <div className="perfect-fleet-content">
                                            <div className="perfect-fleet-title">
                                                <h3>luxury car</h3>
                                                <h2>BMW M2 Car 2017</h2>
                                            </div>
                                            
                                            <div className="perfect-fleet-body">
                                                <ul>
                                                    <li><img src="assets/images/icon-fleet-list-1.svg" alt=""/>4 passenger</li>
                                                    <li><img src="assets/images/icon-fleet-list-2.svg" alt=""/>4 door</li>
                                                    <li><img src="assets/images/icon-fleet-list-3.svg" alt=""/>bags</li>
                                                    <li><img src="assets/images/icon-fleet-list-4.svg" alt=""/>auto</li>
                                                </ul>
                                            </div>
                                           
                                            <div className="perfect-fleet-footer">
                                                <div className="perfect-fleet-pricing">
                                                    <h2>$280<span>/day</span></h2>
                                                </div>
                                               
                                                <div className="perfect-fleet-btn">
                                                    <Link to="/" class="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="swiper-slide">
                                    <div className="perfect-fleet-item">
                                        <div className="image-box">
                                            <img src="assets/images/perfect-fleet-img-2.png" alt=""/>
                                        </div>
                                        
                                        <div className="perfect-fleet-content">
                                            <div className="perfect-fleet-title">
                                                <h3>luxury car</h3>
                                                <h2>Audi RS7 Car 2016</h2>
                                            </div>
                                            
                                            <div className="perfect-fleet-body">
                                                <ul>
                                                    <li><img src="assets/images/icon-fleet-list-1.svg" alt=""/>4 passenger</li>
                                                    <li><img src="assets/images/icon-fleet-list-2.svg" alt=""/>4 door</li>
                                                    <li><img src="assets/images/icon-fleet-list-3.svg" alt=""/>bags</li>
                                                    <li><img src="assets/images/icon-fleet-list-4.svg" alt=""/>auto</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="perfect-fleet-footer">
                                                <div className="perfect-fleet-pricing">
                                                    <h2>$320<span>/day</span></h2>
                                                </div>
                                                
                                                <div className="perfect-fleet-btn">
                                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                              
                                </div>
                                
                                <div className="swiper-slide">
                                    <div className="perfect-fleet-item">
                                        <div className="image-box">
                                            <img src="assets/images/perfect-fleet-img-3.png" alt=""/>
                                        </div>
                                        
                                        <div className="perfect-fleet-content">
                                            <div className="perfect-fleet-title">
                                                <h3>luxury car</h3>
                                                <h2>Ferrari F12 Car 2022</h2>
                                            </div>

                                            <div className="perfect-fleet-body">
                                                <ul>
                                                    <li><img src="assets/images/icon-fleet-list-1.svg" alt=""/>4 passenger</li>
                                                    <li><img src="assets/images/icon-fleet-list-2.svg" alt=""/>4 door</li>
                                                    <li><img src="assets/images/icon-fleet-list-3.svg" alt=""/>bags</li>
                                                    <li><img src="assets/images/icon-fleet-list-4.svg" alt=""/>auto</li>
                                                </ul>
                                            </div>
                                           
                                            <div className="perfect-fleet-footer">
                                                <div className="perfect-fleet-pricing">
                                                    <h2>$450<span>/day</span></h2>
                                                </div>
                                                
                                                <div className="perfect-fleet-btn">
                                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="swiper-slide">
                                    <div className="perfect-fleet-item">
                                        <div className="image-box">
                                            <img src="assets/images/perfect-fleet-img-4.png" alt=""/>
                                        </div>
                                        
                                        <div className="perfect-fleet-content">
                                           
                                            <div className="perfect-fleet-title">
                                                <h3>luxury car</h3>
                                                <h2>Toyota Yaris 2017</h2>
                                            </div>
                                            
                                            <div className="perfect-fleet-body">
                                                <ul>
                                                    <li><img src="assets/images/icon-fleet-list-1.svg" alt=""/>4 passenger</li>
                                                    <li><img src="assets/images/icon-fleet-list-2.svg" alt=""/>4 door</li>
                                                    <li><img src="assets/images/icon-fleet-list-3.svg" alt=""/>bags</li>
                                                    <li><img src="assets/images/icon-fleet-list-4.svg" alt=""/>auto</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="perfect-fleet-footer">
                                                <div className="perfect-fleet-pricing">
                                                    <h2>$220<span>/day</span></h2>
                                                </div>
                                                
                                                <div className="perfect-fleet-btn">
                                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="swiper-slide">
                                    <div className="perfect-fleet-item">
                                        <div className="image-box">
                                            <img src="assets/images/perfect-fleet-img-2.png" alt=""/>
                                        </div>
                                        
                                        <div className="perfect-fleet-content">
                                            <div className="perfect-fleet-title">
                                                <h3>luxury car</h3>
                                                <h2>Audi RS7 Car 2016</h2>
                                            </div>
                                           
                                            <div className="perfect-fleet-body">
                                                <ul>
                                                    <li><img src="assets/images/icon-fleet-list-1.svg" alt=""/>4 passenger</li>
                                                    <li><img src="assets/images/icon-fleet-list-2.svg" alt=""/>4 door</li>
                                                    <li><img src="assets/images/icon-fleet-list-3.svg" alt=""/>bags</li>
                                                    <li><img src="assets/images/icon-fleet-list-4.svg" alt=""/>auto</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="perfect-fleet-footer">
                                                <div className="perfect-fleet-pricing">
                                                    <h2>$320<span>/day</span></h2>
                                                </div>
                                                
                                                <div className="perfect-fleet-btn">
                                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                                                </div>
=                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="perfect-fleet-item">
                                        <div className="image-box">
                                            <img src="assets/images/perfect-fleet-img-3.png" alt=""/>
                                        </div>
                                        
                                        <div className="perfect-fleet-content">
                                            <div className="perfect-fleet-title">
                                                <h3>luxury car</h3>
                                                <h2>Ferrari F12 Car 2022</h2>
                                            </div>
                                            
                                            <div className="perfect-fleet-body">
                                                <ul>
                                                    <li><img src="assets/images/icon-fleet-list-1.svg" alt=""/>4 passenger</li>
                                                    <li><img src="assets/images/icon-fleet-list-2.svg" alt=""/>4 door</li>
                                                    <li><img src="assets/images/icon-fleet-list-3.svg" alt=""/>bags</li>
                                                    <li><img src="assets/images/icon-fleet-list-4.svg" alt=""/>auto</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="perfect-fleet-footer">
                                                <div className="perfect-fleet-pricing">
                                                    <h2>$450<span>/day</span></h2>
                                                </div>

                                                <div className="perfect-fleet-btn">
                                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="swiper-slide">
                                    <div className="perfect-fleet-item">
                                        <div className="image-box">
                                            <img src="assets/images/perfect-fleet-img-4.png" alt=""/>
                                        </div>
                                        
                                        <div className="perfect-fleet-content">
                                            <div className="perfect-fleet-title">
                                                <h3>luxury car</h3>
                                                <h2>Toyota Yaris 2017</h2>
                                            </div>
                                            
                                            <div className="perfect-fleet-body">
                                                <ul>
                                                    <li><img src="assets/images/icon-fleet-list-1.svg" alt=""/>4 passenger</li>
                                                    <li><img src="assets/images/icon-fleet-list-2.svg" alt=""/>4 door</li>
                                                    <li><img src="assets/images/icon-fleet-list-3.svg" alt=""/>bags</li>
                                                    <li><img src="assets/images/icon-fleet-list-4.svg" alt=""/>auto</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="perfect-fleet-footer">
                                                <div className="perfect-fleet-pricing">
                                                    <h2>$220<span>/day</span></h2>
                                                </div>

                                                <div className="perfect-fleet-btn">
                                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="car-details-btn">
                                <div className="car-button-prev"></div>
				                <div className="car-button-next"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Luxury Collection Section Start */}
    <div className="luxury-collection">
        <div className="container-fluid">
            <div className="row no-gutters">
                <div className="col-lg-12">
                    <div className="luxury-collection-box">
                        <div className="luxury-collection-item wow fadeInUp">
                            <div className="luxury-collection-image" data-cursor-text="View">
                                <Link to="/">
                                    <figure>
                                        <img src="assets/images/luxury-collection-img-1.jpg" alt=""/>
                                    </figure>
                                </Link>
                            </div>
                            
                            <div className="luxury-collection-title">
                                <h2>sport car</h2>
                            </div>
                            
                            <div className="luxury-collection-btn">
                                <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                            </div>
                           
                        </div>
                        
                        <div className="luxury-collection-item wow fadeInUp" data-wow-delay="0.25s">
                            <div className="luxury-collection-image" data-cursor-text="View">
                                <Link to="/">
                                    <figure>
                                        <img src="assets/images/luxury-collection-img-2.jpg" alt=""/>
                                    </figure>
                                </Link>
                            </div>
                            
                            <div className="luxury-collection-title">
                                <h2>convertible car</h2>
                            </div>
                            
                            <div className="luxury-collection-btn">
                                <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                            </div>
                        </div>
                        
                        <div className="luxury-collection-item wow fadeInUp" data-wow-delay="0.5s">
                            <div className="luxury-collection-image" data-cursor-text="View">
                                <Link to="/">
                                    <figure>
                                        <img src="assets/images/luxury-collection-img-3.jpg" alt=""/>
                                    </figure>
                                </Link>
                            </div>
                           
                            <div className="luxury-collection-title">
                                <h2>sedan car</h2>
                            </div>
                            
                            <div className="luxury-collection-btn">
                                <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                            </div>
                        </div>
                        
                        <div className="luxury-collection-item wow fadeInUp" data-wow-delay="0.75s">
                            <div className="luxury-collection-image" data-cursor-text="View">
                                <Link to="/">
                                    <figure>
                                        <img src="assets/images/luxury-collection-img-4.jpg" alt=""/>
                                    </figure>
                                </Link>
                            </div>
                            
                            <div className="luxury-collection-title">
                                <h2>luxury car</h2>
                            </div>
                            
                            <div className="luxury-collection-btn">
                                <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>

    {/* How It Work Section Start */}
    <div className="how-it-work">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div class="how-work-content">
                        <div className="section-title">
                            <h3 className="wow fadeInUp">how it work</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Streamlined processes for a hassle-free experience</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.25s">Our streamlined process ensures a seamless car rental experience from start to finish. With easy online booking, flexible pick-up and drop-off options.</p>
                        </div>
                        
                        <div className="how-work-accordion" id="workaccordion">
                            
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                                <div className="icon-box">
                                    <img src="assets/images/icon-how-it-work-1.svg" alt=""/>
                                </div>
                                <h2 className="accordion-header" id="workheading1">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#workcollapse1" aria-expanded="true" aria-controls="workcollapse1">
                                        browse and select
                                    </button>
                                </h2>
                                <div id="workcollapse1" className="accordion-collapse collapse show" aria-labelledby="workheading1"
                                    data-bs-parent="#workaccordion">
                                    <div className="accordion-body">
                                        <p>Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.75s">
                                <div className="icon-box">
                                    <img src="assets/images/icon-how-it-work-2.svg" alt=""/>
                                </div>
                                <h2 className="accordion-header" id="workheading2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#workcollapse2" aria-expanded="false" aria-controls="workcollapse2">
                                        book and confirm
                                    </button>
                                </h2>
                                <div id="workcollapse2" className="accordion-collapse collapse" aria-labelledby="workheading2"
                                    data-bs-parent="#workaccordion">
                                    <div className="accordion-body">
                                        <p>Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="accordion-item wow fadeInUp" data-wow-delay="1s">
                                <div className="icon-box">
                                    <img src="assets/images/icon-how-it-work-3.svg" alt=""/>
                                </div>
                                <h2 className="accordion-header" id="workheading3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#workcollapse3" aria-expanded="false" aria-controls="workcollapse3">
                                        book and enjoy
                                    </button>
                                </h2>
                                <div id="workcollapse3" className="accordion-collapse collapse" aria-labelledby="workheading3"
                                    data-bs-parent="#workaccordion">
                                    <div className="accordion-body">
                                        <p>Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

                <div className="col-lg-6">
                    <div className="how-work-image">
                        <div className="how-work-img">
                            <figure className="reveal">
                                <img src="assets/images/about-img-1.jpg" alt=""/>
                            </figure>
                        </div>
                        
                        <div className="trusted-client">
                            <div className="trusted-client-content">
                                <h3><span className="counter">5</span>m+ Trusted world wide global clients</h3>
                            </div>
                            <div className="trusted-client--image">
                                <img src="assets/images/trusted-client-img.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="intro-video bg-section parallaxie">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h3 className="wow fadeInUp">watch full video</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Discover the ease and convenience of renting with Us</h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
					<div class="intro-video-box">
                        <div className="video-play-button">
                            <Link to="https://www.youtube.com/watch?v=Y-x0efG1seA" class="popup-video" data-cursor-text="Play">
                                <i class="fa-solid fa-play"></i>
                            </Link>
                        </div>
                        
                        <div className="client-slider">
                            <div className="swiper client_logo_slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="company-logo">
                                            <img src="assets/images/client-logo-1.svg" alt="/"/>
                                        </div>
                                    </div>
                                    
                                    <div className="swiper-slide">
                                        <div className="company-logo">
                                            <img src="assets/images/client-logo-2.svg" alt=""/>
                                        </div>
                                    </div>
                                    
                                    <div className="swiper-slide">
                                        <div className="company-logo">
                                            <img src="assets/images/client-logo-3.svg" alt=""/>
                                        </div>
                                    </div>
                                    
                                    <div className="swiper-slide">
                                        <div className="company-logo">
                                            <img src="assets/images/client-logo-4.svg" alt=""/>
                                        </div>
                                    </div>
                                   
                                    <div className="swiper-slide">
                                        <div className="company-logo">
                                            <img src="assets/images/client-logo-5.svg" alt=""/>
                                        </div>
                                    </div>
                                    
                                    <div className="swiper-slide">
                                        <div className="company-logo">
                                            <img src="assets/images/client-logo-6.svg" alt=""/>
                                        </div>
                                    </div>
                                    
                                    <div className="swiper-slide">
                                        <div className="company-logo">
                                            <img src="assets/images/client-logo-5.svg" alt=""/>
                                        </div>
                                    </div>
                                    
                                    <div className="swiper-slide">
                                        <div className="company-logo">
                                            <img src="assets/images/client-logo-4.svg" alt=""/>
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
   
    <div className="why-choose-us">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h3 className="wow fadeInUp">why choose us</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Unmatched quality and service for your needs</h2>
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 order-lg-1 order-md-1 order-1">
                    <div className="why-choose-item wow fadeInUp">
                        <div className="icon-box">
                            <img src="assets/images/icon-why-choose-1.svg" alt=""/>
                        </div>
                        <div className="why-choose-content">
                            <h3>extensive fleet options</h3>
                            <p>Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa</p>
                        </div>
                    </div>
                    
                    <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                        <div className="icon-box">
                            <img src="assets/images/icon-why-choose-2.svg" alt=""/>
                        </div>
                        <div className="why-choose-content">
                            <h3>exceptional customer service</h3>
                            <p>Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-12 order-lg-2 order-md-3 order-2">
                    <div className="why-choose-image">
                        <figure className="reveal">
                            <img src="assets/images/why-choose-img.jpg" alt=""/>
                        </figure>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 order-lg-3 order-md-2 order-3">
                    <div className="why-choose-item wow fadeInUp">
                        <div className="icon-box">
                            <img src="assets/images/icon-why-choose-3.svg" alt=""/>
                        </div>
                        <div className="why-choose-content">
                            <h3>convenient locations</h3>
                            <p>Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa</p>
                        </div>
                    </div>
                    
                    <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                        <div className="icon-box">
                            <img src="assets/images/icon-why-choose-4.svg" alt=""/>
                        </div>
                        <div className="why-choose-content">
                            <h3>reliability and safety</h3>
                            <p>Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Our FAQs Section Start */}

    <div className="our-faqs bg-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 order-lg-1 order-md-2 order-2">
                    <div className="our-faqs-image">
                        <div className="faqs-img-1">
                            <figure className="image-anime">
                                <img src="assets/images/our-faqs-img-1.jpg" alt=""/>
                            </figure>
                        </div>

                        <div className="faqs-img-2">
                            <figure className="image-anime">
                                <img src="assets/images/our-faqs-img-2.jpg" alt=""/>
                            </figure>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 order-lg-2 order-md-1 order-1">
                    <div className="our-faqs-content">
                        <div className="section-title">
                            <h3 className="wow fadeInUp">frequently asked questions</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Everything you need to know about our services</h2>
                        </div>

                        <div className="our-faqs-accordion" id="faqsaccordion">
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.25s">
                                <h2 className="accordion-header" id="faqheading1">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faqcollapse1" aria-expanded="true" aria-controls="faqcollapse1">
                                        What do I need to rent a car?
                                    </button>
                                </h2>
                                <div id="faqcollapse1" className="accordion-collapse collapse show" aria-labelledby="faqheading1"
                                    data-bs-parent="#faqsaccordion">
                                    <div className="accordion-body">
                                        <p>Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.</p>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                                <h2 className="accordion-header" id="faqheading2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faqcollapse2" aria-expanded="false" aria-controls="faqcollapse2">
                                        How old do I need to be to rent a car?
                                    </button>
                                </h2>
                                <div id="faqcollapse2" className="accordion-collapse collapse" aria-labelledby="faqheading2"
                                    data-bs-parent="#faqsaccordion">
                                    <div className="accordion-body">
                                        <p>Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.</p>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.75s">
                                <h2 className="accordion-header" id="faqheading3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faqcollapse3" aria-expanded="false" aria-controls="faqcollapse3">
                                        Can I rent a car with a debit card?
                                    </button>
                                </h2>
                                <div id="faqcollapse3" className="accordion-collapse collapse" aria-labelledby="faqheading3"
                                    data-bs-parent="#faqsaccordion">
                                    <div className="accordion-body">
                                        <p>Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                                    <img src="assets/images/author-1.jpg" alt=""/>
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
                                                    <img src="assets/images/author-2.jpg" alt=""/>
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
                                                    <img src="assets/images/author-3.jpg" alt=""/>
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
                                                    <img src="assets/images/author-4.jpg" alt=""/>
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
     
    {/*CTA Box Section Start */}

    <div className="cta-box bg-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-7">
                    <div className="cta-box-content">
                        <div className="section-title">
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Ready to hit the road? Book your car today !</h2>
                            <p className="wow fadeInUp">Our friendly customer service team is here to help. Contact us anytime for support and inquiries.</p>
                        </div>
                        
                        <div className="cta-box-btn wow fadeInUp" data-wow-delay="0.5s">
                            <Link to="/" class="btn-default">contact us</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-5">
                    <div className="cat-box-image">
                        <figure>
                            <img src="assets/images/cta-car-img.png" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Our Latest Article Start */}

    <div className="latest-article">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h3 className="wow fadeInUp">latest articles</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Stay informed and inspired for your next journey</h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="highlighted-article-post wow fadeInUp">
                        <div className="highlighted-article-featured-img">
                            <figure>
                                <Link to="/" class="image-anime" data-cursor-text="View">
                                    <img src="assets/images/post-1.jpg" alt=""/>
                                </Link>
                            </figure>
                        </div>

                       
                        <div className="highlighted-article-body">
                            <div className="article-meta">
                                <ul>
                                    <li><Link to="/"><i class="fa-solid fa-calendar-days"></i> sep 19, 2024</Link></li>
                                </ul>
                            </div>
                            
                            <div className="highlighted-article-content">
                                <h3><Link to="/">Road Trip Essentials: What to Pack for a Smooth Journey</Link></h3>
                                <Link to="/" class="section-icon-btn">
                                    <img src="assets/images/arrow-white.svg" alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="article-post wow fadeInUp">
                        <div className="article-featured-img">
                            <figure>
                                <Link to="/" className="image-anime" data-cursor-text="View">
                                    <img src="assets/images/post-2.jpg" alt=""/>
                                </Link>
                            </figure>
                        </div>

                        <div className="article-post-body">
                            <div className="article-meta">
                                <ul>
                                    <li><Link to="/"><i className="fa-solid fa-calendar-days"></i> sep 20, 2024</Link></li>
                                </ul>
                            </div>

                            <div className="article-post-content">
                                <h3><Link to="/">Exploring the City: Best Urban Destinations for a Weekend Getaway</Link></h3>
                                <Link to="/" class="read-story-btn">read story</Link>
                            </div>
                        </div>
                    </div>
                   

                    <div className="article-post wow fadeInUp" data-wow-delay="0.25s">
                        <div className="article-featured-img">
                            <figure>
                                <Link to="/" class="image-anime" data-cursor-text="View">
                                    <img src="assets/images/post-3.jpg" alt=""/>
                                </Link>
                            </figure>
                        </div>

                        <div className="article-post-body">
                            <div className="article-meta">
                                <ul>
                                    <li><Link to="/"><i className="fa-solid fa-calendar-days"></i> sep 21, 2024</Link></li>
                                </ul>
                            </div>

                            <div className="article-post-content">
                                <h3><Link to="/">Exploring the City: Best Urban Destinations for a Weekend Getaway</Link></h3>
                                <Link to="/" class="read-story-btn">read story</Link>
                            </div>
                        </div>
                    </div>
                   
                    <div className="article-post wow fadeInUp" data-wow-delay="0.5s">
                        <div className="article-featured-img">
                            <figure>
                                <Link to="/" className="image-anime" data-cursor-text="View">
                                    <img src="assets/images/post-4.jpg" alt=""/>
                                </Link>
                            </figure>
                        </div>

                        <div className="article-post-body">
=                            <div className="article-meta">
                                <ul>
                                    <li><Link to="/"><i className="fa-solid fa-calendar-days"></i> sep 22, 2024</Link></li>
                                </ul>
                            </div>

                            <div className="article-post-content">
                                <h3><Link to="/">Exploring the City: Best Urban Destinations for a Weekend Getaway</Link></h3>
                                <Link to="/" class="read-story-btn">read story</Link>
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
                            <li><Link to="/">about us</Link></li>
                            <li><Link to="/">cars</Link></li>
                            <li><Link to="/">services</Link></li>
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
export default Home;

