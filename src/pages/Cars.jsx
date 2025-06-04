import React from "react";
import { Link } from "react-router-dom";
const Cars = () => {
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
                            <h1 className="text-anime-style-3" data-cursor="-opaque">Our Fleets</h1>
                            <nav className="wow fadeInUp">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">fleets</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Page Fleets Start*/}
    <div className="page-fleets">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="fleets-sidebar wow fadeInUp">
                        <div className="fleets-search-box">
                            <form id="fleetsForm" action="#" method="POST">
                                <div className="form-group">
                                    <input type="text" name="search" className="form-control"  id="search" placeholder="Search..." required/>
                                    <button type="submit" className="section-icon-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                            </form>
                        </div>

                        <div className="fleets-sidebar-list-box">
                            <div className="fleets-sidebar-list">
                                <div className="fleets-list-title">
                                    <h3>categories</h3>
                                </div>

                                <ul>
                                    <li className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkbox1"/>
                                        <label className="form-check-label" for="checkbox1">sport cars</label>
                                    </li>

                                    <li className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkbox2"/>
                                        <label className="form-check-label" for="checkbox2">electric car</label>
                                    </li>

                                    <li className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkbox3"/>
                                        <label className="form-check-label" for="checkbox3">Convertible</label>
                                    </li>

                                    <li className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkbox4"/>
                                        <label className="form-check-label" for="checkbox4">luxury cars</label>
                                    </li>

                                    <li className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkbox5"/>
                                        <label className="form-check-label" for="checkbox5">sedan</label>
                                    </li>

                                    <li className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkbox6"/>
                                        <label className="form-check-label" for="checkbox6">coupe cars</label>
                                    </li>
                                </ul>
                            </div>
                      
                            <div className="fleets-sidebar-list">
                                <div className="fleets-list-title">
                                    <h3>pickup location</h3>
                                </div>

                                <ul>
                                    <li className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkbox7"/>
                                        <label className="form-check-label" for="checkbox7">abu dhabi</label>
                                    </li>

                                    <li className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkbox8"/>
                                        <label className="form-check-label" for="checkbox8">alain</label>
                                    </li>

                                    <li className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkbox9"/>
                                        <label className="form-check-label" for="checkbox9">dubai</label>
                                    </li>

                                    <li className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkbox10"/>
                                        <label className="form-check-label" for="checkbox10">sharjah</label>
                                    </li>
                                </ul>
                            </div>
                 
                            <div className="fleets-sidebar-list">
                                <div className="fleets-list-title">
                                    <h3>dropoff location</h3>
                                </div>

                                <ul>
                                    <li className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkbox11"/>
                                        <label className="form-check-label" for="checkbox11">abu dhabi</label>
                                    </li>

                                    <li className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkbox12"/>
                                        <label className="form-check-label" for="checkbox12">alain</label>
                                    </li>

                                    <li className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkbox13"/>
                                        <label className="form-check-label" for="checkbox13">dubai</label>
                                    </li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </div>
                
                <div className="col-lg-9">
                    <div className="fleets-collection-box">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="perfect-fleet-item fleets-collection-item wow fadeInUp">
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
                                                <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className="col-lg-4 col-md-6">
                                <div className="perfect-fleet-item fleets-collection-item wow fadeInUp" data-wow-delay="0.2s">
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
    
                            <div className="col-lg-4 col-md-6">
                                <div className="perfect-fleet-item fleets-collection-item wow fadeInUp" data-wow-delay="0.4s">
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
                                                <Link to="#" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className="col-lg-4 col-md-6">
                                <div className="perfect-fleet-item fleets-collection-item wow fadeInUp" data-wow-delay="0.6s">
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
    
                            <div className="col-lg-4 col-md-6">
                                <div className="perfect-fleet-item fleets-collection-item wow fadeInUp" data-wow-delay="0.8s">
                                    <div className="image-box">
                                        <img src="assets/images/perfect-fleet-img-5.png" alt=""/>
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
                                                <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className="col-lg-4 col-md-6">
                                <div className="perfect-fleet-item fleets-collection-item wow fadeInUp" data-wow-delay="1s">
                                    <div className="image-box">
                                        <img src="assets/images/perfect-fleet-img-6.png" alt=""/>
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
                                                <Link to="/" class="section-icon-btn"><img src="assets/images/arrow-white.svg" alt=""/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className="col-lg-4 col-md-6">
                                <div className="perfect-fleet-item fleets-collection-item wow fadeInUp" data-wow-delay="1.2s">
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
    
                            <div className="col-lg-4 col-md-6">
                                <div className="perfect-fleet-item fleets-collection-item wow fadeInUp" data-wow-delay="1.4s">
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

                            <div className="col-lg-4 col-md-6">
                                <div className="perfect-fleet-item fleets-collection-item wow fadeInUp" data-wow-delay="1.4s">
                                    <div className="image-box">
                                        <img src="assets/images/perfect-fleet-img-2.png" alt=""/>
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

                            <div className="col-lg-12">
                                <div className="fleets-pagination wow fadeInUp" data-wow-delay="0.5s">
                                    <ul className="pagination">
                                        <li><Link to="/"><i className="fa-solid fa-arrow-left-long"></i></Link></li>
                                        <li className="active"><Link to="#">1</Link></li>
                                        <li><Link to="#">2</Link></li>
                                        <li><Link to="#">3</Link></li>
                                        <li><Link to="#"><i className="fa-solid fa-arrow-right-long"></i></Link></li>
                                    </ul>
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

export default Cars;