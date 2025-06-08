import React from "react";

import { Link } from "react-router-dom";

const CarSingle = () => {
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
                      <Link to="/cars" className="nav-link" >
                        Cars
                      </Link>
                      <ul>
                        <li className="nav-item">
                          <Link to="/Cars" className="nav-link" >
                            Car Lists
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/car-single" className="nav-link" >
                            Car Details
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/car-type" className="nav-link" >
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
                          <Link to="/service-single" className="nav-link" >
                            Service Details
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/blog" className="nav-link" >
                            Blog
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link To="/blog-single" className="nav-link" >
                            Blog Details
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/drivers" className="nav-link" >
                            Drivers
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/driver-single" className="nav-link" >
                            Driver Details
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/pricing" className="nav-link" >
                            Pricing
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/image-gallery" className="nav-link" >
                            Image Gallery
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/video-gallery" className="nav-link" >
                            Video Gallery
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/testimonials" className="nav-link" >
                            Testimonials
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/faqs" className="nav-link" >
                            FAQ's
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/404" className="nav-link" >
                            404
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link" >
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
                BMW M2 Car 2017
                  
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/">car</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                    luxury car
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Feets Single Start */}
     <div className="page-fleets-single">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="fleets-single-sidebar">
                        <div className="fleets-single-sidebar-box wow fadeInUp">
                            <div className="fleets-single-sidebar-pricing">
                                <h2>$280<span>/rent par day</span></h2>
                            </div>
                            
                            <div className="fleets-single-sidebar-list">
                                <ul>
                                    <li><img src="assets/images/icon-fleets-single-sidebar-list-1.svg" alt=""/>Passengers <span>4</span></li>
                                    <li><img src="assets/images/icon-fleets-single-sidebar-list-2.svg" alt=""/>Luggage <span>5</span></li>
                                    <li><img src="assets/images/icon-fleets-single-sidebar-list-3.svg" alt=""/>Doors <span>4</span></li>
                                    <li><img src="assets/images/icon-fleets-single-sidebar-list-4.svg" alt=""/>Transmission <span>auto</span></li>
                                    <li><img src="assets/images/icon-fleets-single-sidebar-list-5.svg" alt=""/>Air Condition <span>yes</span></li>
                                    <li><img src="assets/images/icon-fleets-single-sidebar-list-6.svg" alt=""/>Age (years) <span>5</span></li>
                                </ul>
                            </div>
                            
                            <div className="fleets-single-sidebar-btn">
                                <Link to="#bookingform" className="btn-default popup-with-form">book now</Link>
                                <span>or</span>
                                <Link to="#" className="wp-btn"><i className="fa-brands fa-whatsapp"></i></Link>                                
                            </div>
                        </div>

                        <div className="booking-form-box">
                            <form id="bookingform" className="white-popup-block mfp-hide booking-form">
                                <div className="section-title">
                                    <h2>Reserve your vehicle today!</h2>
                                    <p>Fill out the form below to reserve your vehicle. Complete the necessary details to ensure a smooth rental experience.</p>
                                </div>                                
                                <fieldset>
                                    <div className="row">
                                        <div className="booking-form-group col-md-6 mb-4">
                                            <input type="text" name="name" className="booking-form-control" id="name" placeholder="Full Name" required/>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="booking-form-group col-md-6 mb-4">
                                            <input type="email" name ="email" className="booking-form-control" id="email" placeholder="Enter Your Email" required/>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="booking-form-group col-md-6 mb-4">
                                            <input type="text" name="phone" className="booking-form-control" id="phone" placeholder="Enter Your Number" required/>
                                            <div className="help-block with-errors"></div>
                                        </div>                                        

                                        <div className="booking-form-group col-md-6 mb-4">
                                            <select name="cartype" className="booking-form-control form-select" id="cartype" required>
                                                <option value="" disabled selected>Choose Car Type</option>
                                                <option value="sport_car">sport car</option>
                                                <option value="convertible_car">convertible car</option>
                                                <option value="sedan_car">sedan car</option>
                                                <option value="luxury_car">luxury car</option>
                                                <option value="electric_car">electric car</option>
                                                <option value="coupe_car">coupe car</option>
                                            </select>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="booking-form-group col-md-6 mb-4">
                                            <select name="location" className="booking-form-control form-select" id="pickuplocation" required>
                                                <option value="" disabled selected>Pick Up Location</option>
                                                <option value="abu_dhabi">abu dhabi</option>
                                                <option value="alain">alain</option>
                                                <option value="dubai">dubai</option>
                                                <option value="sharjah">sharjah</option>
                                            </select>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="booking-form-group col-md-6 mb-4">
                                            <input type="text" name="date" placeholder="PickUp Date" claclassNamess="booking-form-control datepicker" id="pickupdate" required/>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="booking-form-group col-md-6 mb-4">
                                            <select name="droplocation" className="booking-form-control form-select" id="droplocation" required>
                                                <option value="" disabled selected>Drop Off Location</option>
                                                <option value="abu_dhabi">abu dhabi</option>
                                                <option value="alain">alain</option>
                                                <option value="sharjah">sharjah</option>
                                            </select>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="booking-form-group col-md-6 mb-4">
                                            <input type="text" name="date" class="booking-form-control datepicker" id="returndate" placeholder="Return Date" required/>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="booking-form-group col-md-12 mb-4">
                                            <textarea name="msg" className="booking-form-control" id="msg" rows="3" placeholder="Write Your Message" required></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="col-md-12 booking-form-group">
                                            <button type="submit" className="btn-default">rent now</button>
                                            <div id="msgSubmit" className="h3 hidden"></div>
                                        </div>
                                    </div>                                    
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8">
                    <div className="fleets-single-content">
                        <div className="fleets-single-slider">
                            <div className="swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="fleets-slider-image">
                                            <figure className="image-anime">
                                                <img src="assets/images/fleets-slider-img-1.jpg" alt=""/>
                                            </figure>
                                        </div>
                                    </div>
                                    
                                    <div className="swiper-slide">
                                        <div className="fleets-slider-image">
                                            <figure className="image-anime">
                                                <img src="assets/images/fleets-slider-img-1.jpg" alt=""/>
                                            </figure>
                                        </div>
                                    </div>
                                    
                                    <div className="swiper-slide">
                                        <div className="fleets-slider-image">
                                            <figure className="image-anime">
                                                <img src="assets/images/fleets-slider-img-1.jpg" alt=""/>
                                            </figure>
                                        </div>
                                    </div>
                                    
                                    <div className="swiper-slide">
                                        <div className="fleets-slider-image">
                                            <figure className="image-anime">
                                                <img src="assets/images/fleets-slider-img-1.jpg" alt=""/>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                        
                        <div className="fleets-benefits wow fadeInUp">
                        
                            <div className="fleets-benefits-item">
                                <div className="icon-box">
                                    <img src="assets/images/icon-fleets-benefits-1.svg" alt=""/>
                                </div>
                                <div className="fleets-benefits-content">
                                    <h3>Unlimi ted KMs</h3>
                                    <p>Endless Km with no extra charge </p>
                                </div>
                            </div>
                            
                            <div className="fleets-benefits-item">
                                <div className="icon-box">
                                    <img src="assets/images/icon-fleets-benefits-2.svg" alt=""/>
                                </div>
                                <div className="fleets-benefits-content">
                                    <h3>Unlimi ted KMs</h3>
                                    <p>Endless Km with no extra charge </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="fleets-information">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">general information</h3>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Know about our car service</h2>
                                <p className="wow fadeInUp" data-wow-delay="0.25s">Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation porttitor orci sit amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen morbinetion consesua the risus consequation the porttiton.</p>
                            </div>
                            
                            <div className="fleets-information-list wow fadeInUp" data-wow-delay="0.5s">
                                <ul>
                                    <li>24/7 Roadside Assistance</li>
                                    <li>Free Cancellation & Return</li>
                                    <li>Rent Now Pay When You Arrive</li>
                                </ul>
                            </div>
                        </div>
                      
                        <div className="fleets-amenities">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">amenities</h3>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Premium amenities and features</h2>
                            </div>
                            
                            <div className="fleets-amenities-list wow fadeInUp" data-wow-delay="0.25s">
                                <ul>
                                    <li>music system</li>
                                    <li>toolkit</li>
                                    <li>abs system</li>
                                    <li>bluetooth</li>
                                    <li>full boot space</li>
                                    <li>usb charger</li>
                                    <li>aux input</li>
                                    <li>spare tyre</li>
                                    <li>power steering</li>
                                    <li>power windows</li>
                                </ul>
                            </div>
                        </div>

                        <div className="rental-conditions-faqs">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">rental conditions</h3>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Policies and agreement</h2>
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
                               
                                <div className="accordion-item wow fadeInUp" data-wow-delay="1s">
                                    <h2 className="accordion-header" id="rentalheading5">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#rentalcollapse5" aria-expanded="false" aria-controls="rentalcollapse5">
                                            Smoking and Pet Policies
                                        </button>
                                    </h2>
                                    <div id="rentalcollapse5" className="accordion-collapse collapse" aria-labelledby="rentalheading5"
                                        data-bs-parent="#rentalaccordion">
                                        <div className="accordion-body">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="accordion-item wow fadeInUp" data-wow-delay="1.25s">
                                    <h2 className="accordion-header" id="rentalheading6">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#rentalcollapse6" aria-expanded="false" aria-controls="rentalcollapse6">
                                            The minimum age Requirements
                                        </button>
                                    </h2>
                                    <div id="rentalcollapse6" className="accordion-collapse collapse" aria-labelledby="rentalheading6"
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

export default CarSingle;