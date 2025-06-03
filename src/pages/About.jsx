import React from "react";

import { Link } from "react-router-dom";

const About = () => {
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
              <Link to="/" className="navbar-brand" >
                <img src="assets/images/logo.svg" alt="Logo" />
              </Link>
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item submenu">
                      <Link to="/" className="nav-link" >
                        Home
                      </Link>
                      <ul>
                        <li className="nav-item submenu">
                          <Link to="/" className="nav-link">
                            Home - Light
                          </Link>
                          <ul>
                            <li className="nav-item">
                              <Link to="/" className="nav-link" >
                                Home - Background Image
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/" className="nav-link" >
                                Home - Background Video
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/" className="nav-link" >
                                Home - Background Slider
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item submenu">
                          <Link to="https://html.awaikenthemes.com/novaride/dark/index.html"
                            className="nav-link"
                            
                          >
                            Home - Dark
                          </Link>
                          <ul>
                            <li className="nav-item">
                              <Link to="https://html.awaikenthemes.com/novaride/dark/index.html"
                                className="nav-link"
                              >
                                Home - Background Image
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="https://html.awaikenthemes.com/novaride/dark/index-2.html"
                                className="nav-link"
                                
                              >
                                Home - Background Video
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="https://html.awaikenthemes.com/novaride/dark/index-3.html"
                                className="nav-link"
                                
                              >
                                Home - Background Slider
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                     <li className="nav-item">
                      <Link to="/about" className="nav-link" >
                        About Us
                      </Link>
                    </li> 
                    <li className="nav-item">
                      <Link to="/service" className="nav-link" >
                        Services
                      </Link>
                    </li>
                    <li className="nav-item submenu">
                      <Link to="/" className="nav-link" >
                        Cars
                      </Link>
                      <ul>
                        <li className="nav-item">
                          <Link to="Cars.jsx" className="nav-link" >
                            Car Lists
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="car-single.jsx" className="nav-link" >
                            Car Details
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="car-type.jsx" className="nav-link" >
                            Cars Type
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item submenu">
                      <Link to="/" className="nav-link" >
                        Pages
                      </Link>
                      <ul>
                        <li className="nav-item">
                          <Link to="service-single.jsx" className="nav-link" >
                            Service Details
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="blog.jsx" className="nav-link" >
                            Blog
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link To="blog-single.jsx" className="nav-link" >
                            Blog Details
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="drivers.jsx" className="nav-link" >
                            Drivers
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="driver-single.jsx" className="nav-link" >
                            Driver Details
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="pricing.jsx" className="nav-link" >
                            Pricing
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="image-gallery.jsx" className="nav-link" >
                            Image Gallery
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="video-gallery.jsx" className="nav-link" >
                            Video Gallery
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="testimonials.jsx" className="nav-link" >
                            Testimonials
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="faqs.jsx" className="nav-link" >
                            FAQ's
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="404.jsx" className="nav-link" >
                            404
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link to="contact.jsx" className="nav-link" >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="header-btn d-inline-flex">
                  <Link to="/" className="btn-default">
                    book a rental
                  </Link>
                </div>
              </div>
              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>

      {/* Page Header */}

      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">
                  About Us
                  
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      about us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}

      <div className="about-us page-about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <div className="about-img-1">
                  <figure className="reveal">
                    <img src="assets/images/about-img-1.jpg" alt="" />
                  </figure>
                </div>

                <div className="about-img-2">
                  <figure className="reveal">
                    <img src="assets/images/about-img-2.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">about us</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Your trusted partner in reliable car rental
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">
                    Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga
                    Dolor Saerror Sed Earum A Magni Soluta Quam Minus Dolor
                    Dolor
                  </p>
                </div>

                <div className="about-content-body">
                  <div
                    className="about-trusted-booking wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon-box">
                      <img
                        src="assets/images/icon-about-trusted-1.svg"
                        alt=""
                      />
                    </div>
                    <div className="trusted-booking-content">
                      <h3>easy booking process</h3>
                      <p>
                        We Have Optimized The Booking Process So That Our
                        Clients Can Experience The Easiest And The Safest
                        Service
                      </p>
                    </div>
                  </div>

                  <div
                    className="about-trusted-booking wow fadeInUp"
                    data-wow-delay="0.75s"
                  >
                    <div className="icon-box">
                      <img
                        src="assets/images/icon-about-trusted-2.svg"
                        alt=""
                      />
                    </div>
                    <div className="trusted-booking-content">
                      <h3>convenient pick-up & return process</h3>
                      <p>
                        We Have Optimized The Booking Process So That Our
                        Clients Can Experience The Easiest And The Safest
                        Service
                      </p>
                    </div>
                  </div>
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
                <h3 className="wow fadeInUp">executive partners</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Trusted by leading brands
                </h2>
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

      {/* Vision Mission Section Start */}

      <div className="vision-mission">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">vision mission</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Driving excellence and innovation in car rental services
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="our-projects-nav wow fadeInUp" data-wow-delay="0.25s">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#vision"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      our vision
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#mission"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      our mission
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#approach"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      our approach
                    </button>
                  </li>
                </ul>
              </div>
              <div className="vision-mission-box tab-content" id="myTabContent">
                <div
                  className="our-vision-item tab-pane fade show active"
                  id="vision"
                  role="tabpanel"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="vision-mission-content">
                        <div className="section-title">
                          <h3 className="wow fadeInUp">our vision</h3>
                          <h2 className="text-anime-style-3" data-cursor="-opaque">
                            Pioneering excellence in car rental services
                          </h2>
                          <p className="wow fadeInUp" data-wow-delay="0.25s">
                            We aim to continually innovate and integrate the
                            latest technology into our services. From easy
                            online bookings to advanced vehicle tracking
                            systems, our goal is to make the car rental process
                            seamless and efficient for our customers. Quality is
                            at the heart of everything we do. We maintain a
                            diverse fleet of well-maintained vehicles that meet
                            the highest standards of safety and comfort.
                          </p>
                        </div>

                        <div
                          className="vision-mission-list wow fadeInUp"
                          data-wow-delay="0.5s"
                        >
                          <ul>
                            <li>Our customers are our top priority</li>
                            <li>Quality is at the heart of everything we do</li>
                            <li>
                              every vehicle leaves care looking its absolute
                              best
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="vision-image">
                        <figure className="image-anime reveal">
                          <img src="assets/images/our-vision-img.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="our-vision-item tab-pane fade"
                  id="mission"
                  role="tabpanel"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="vision-mission-content">
                        <div className="section-title">
                          <h3>our mission</h3>
                          <h2 data-cursor="-opaque">
                            Pioneering excellence in car rental services
                          </h2>
                          <p>
                            We aim to continually innovate and integrate the
                            latest technology into our services. From easy
                            online bookings to advanced vehicle tracking
                            systems, our goal is to make the car rental process
                            seamless and efficient for our customers. Quality is
                            at the heart of everything we do. We maintain a
                            diverse fleet of well-maintained vehicles that meet
                            the highest standards of safety and comfort.
                          </p>
                        </div>

                        <div className="vision-mission-list">
                          <ul>
                            <li>Our customers are our top priority</li>
                            <li>Quality is at the heart of everything we do</li>
                            <li>
                              every vehicle leaves care looking its absolute
                              best
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="vision-image">
                        <figure className="image-anime reveal">
                          <img src="assets/images/our-mission-img.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="our-mission-item tab-pane fade"
                  id="approach"
                  role="tabpanel"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="vision-mission-content">
                        <div className="section-title">
                          <h3>our approach</h3>
                          <h2 data-cursor="-opaque">
                            Pioneering excellence in car rental services
                          </h2>
                          <p>
                            We aim to continually innovate and integrate the
                            latest technology into our services. From easy
                            online bookings to advanced vehicle tracking
                            systems, our goal is to make the car rental process
                            seamless and efficient for our customers. Quality is
                            at the heart of everything we do. We maintain a
                            diverse fleet of well-maintained vehicles that meet
                            the highest standards of safety and comfort.
                          </p>
                        </div>

                        <div className="vision-mission-list">
                          <ul>
                            <li>Our customers are our top priority</li>
                            <li>Quality is at the heart of everything we do</li>
                            <li>
                              every vehicle leaves care looking its absolute
                              best
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="vision-image">
                        <figure className="image-anime reveal">
                          <img
                            src="assets/images/our-approach-img.jpg"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Video Section Start */}
    <div className="our-video bg-section">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h3 className="wow fadeInUp">watch our video</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Discover what sets us apart in the car rental industry</h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-5">
                    <div className="customer-counter-item">
                        <div className="customer-counter-image">
                            <img src="assets/images/video-counter-img-1.jpg" alt=""/>
                        </div>
                        
                        <div className="satisfied-customer-counter">
                            <h3><span className="counter">3100</span>+</h3>
                            <p>satisfied customer</p>
                        </div>
                        
                        <div className="satisfied-customer-image">
                            <img src="assets/images/satisfied-customer-img.png" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8 col-md-7">
                    <div className="video-image-box">
                        <div className="video-image" data-cursor-text="Play">
                            <figure>
                                <Link to="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                                    <img src="assets/images/video-counter-img-2.jpg" alt=""/>
                                </Link>                                
                            </figure>
                        </div>
                       
                        <div className="video-image-play-button" data-cursor-text="Play">
                            <Link to="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                                <i className="fa-solid fa-play"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Why Choose Us Section Start */}
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
   
     
    {/* Our Team Start */}
    <div className="our-team bg-section">
        <div className="container">
            <div className="row align-items-center section-row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h3 className="wow fadeInUp">our experienced drivers</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Ensuring your safety and comfort on every journey</h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="team-member-item wow fadeInUp">
                        <div className="team-image">
                            <figure className="image-anime">
                                <img src="assets/images/team-1.jpg" alt=""/>
                            </figure>
                
                            <div className="team-social-icon">
                                <ul>
                                    <li><Link to="/" className="social-icon"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                    <li><Link to="/" className="social-icon"><i className="fa-brands fa-youtube"></i></Link></li>
                                    <li><Link to="/" class="social-icon"><i className="fa-brands fa-instagram"></i></Link></li>
                                    <li><Link to="/" className="social-icon"><i className="fa-brands fa-x-twitter"></i></Link></li>
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
                    <div className="team-member-item wow fadeInUp" data-wow-delay="0.25s">
                        <div className="team-image">
                            <figure className="image-anime">
                                <img src="assets/images/team-2.jpg" alt=""/>
                            </figure>
                
                            <div className="team-social-icon">
                                <ul>
                                    <li><Link to="/" className="social-icon"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                    <li><Link to="/" className="social-icon"><i className="fa-brands fa-youtube"></i></Link></li>
                                    <li><Link to="/" className="social-icon"><i className="fa-brands fa-instagram"></i></Link></li>
                                    <li><Link to="/" className="social-icon"><i className="fa-brands fa-x-twitter"></i></Link></li>
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
                    <div className="team-member-item wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-image">
                            <figure className="image-anime">
                                <img src="assets/images/team-3.jpg" alt=""/>
                            </figure>
                
                            <div className="team-social-icon">
                                <ul>
                                    <li><Link to="/" className="social-icon"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                    <li><Link to="/" className="social-icon"><i className="fa-brands fa-youtube"></i></Link></li>
                                    <li><Link to="/" className="social-icon"><i className="fa-brands fa-instagram"></i></Link></li>
                                    <li><Link to="/" className="social-icon"><i className="fa-brands fa-x-twitter"></i></Link></li>
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
                    <div className="team-member-item wow fadeInUp" data-wow-delay="0.75s">
                        <div className="team-image">
                            <figure className="image-anime">
                                <img src="assets/images/team-4.jpg" alt=""/>
                            </figure>
                
                            <div className="team-social-icon">
                                <ul>
                                    <li><Link to ="/" className="social-icon"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                    <li><Link to ="/" className="social-icon"><i className="fa-brands fa-youtube"></i></Link></li>
                                    <li><Link to ="/" className="social-icon"><i className="fa-brands fa-instagram"></i></Link></li>
                                    <li><Link to ="/" className="social-icon"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="team-content">
                            <h3>davis casey</h3>
                            <p>travel specialist</p>
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

            {/* Footer Copyright Section Start */}
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
                                <li><Link to="/"><i class="fa-brands fa-youtube"></i></Link></li>
                                <li><Link to="/"><i class="fa-brands fa-facebook-f"></i></Link></li>
                                <li><Link to="/"><i class="fa-brands fa-x-twitter"></i></Link></li>
                                <li><Link to="/"><i class="fa-brands fa-instagram"></i></Link></li>
                                <li><Link to="/"><i class="fa-brands fa-linkedin-in"></i></Link></li>
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
};

export default About;
