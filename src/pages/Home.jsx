import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

const handleSearch = () => {
    const pickupAgency = document.querySelector('select[name="pickupAgency"]')?.value;
    const returnAgency = document.querySelector('select[name="returnAgency"]')?.value;
    const pickupDate = document.querySelector('input[name="pickup_date"]')?.value;
    const pickupTime = document.querySelector('input[name="pickup_time"]')?.value;
    const returnDate = document.querySelector('input[name="return_date"]')?.value;
    const returnTime = document.querySelector('input[name="return_time"]')?.value;

    if (!pickupAgency || !returnAgency || !pickupDate || !pickupTime || !returnDate || !returnTime) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const pickupDateTime = `${pickupDate}T${pickupTime}`;
    const returnDateTime = `${returnDate}T${returnTime}`;

    navigate(`/car2?pickupAgency=${pickupAgency}&returnAgency=${returnAgency}&pickupDateTime=${pickupDateTime}&returnDateTime=${returnDateTime}`);
  };





    useEffect(() => {
        axios.get('http://localhost:5000/api/voitures')
            .then(res => setCars(res.data))
            .catch(err => console.error('Erreur de chargement :', err));
    }, []);

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
                                        <li className="nav-item"><Link to="/" className="nav-link">Acceuil</Link></li>
                                        <li className="nav-item"><Link to="/about" className="nav-link">A propos de nous</Link></li>
                                        <li className="nav-item"><Link to="/service" className="nav-link">Services</Link></li>
                                        <li className="nav-item"><Link to="/cars" className="nav-link">Voitures</Link>
                                            {/* <ul>
                                                <li className="nav-item"><Link to="/cars" className="nav-link">Car Lists</Link></li>
                                                <li className="nav-item"><Link to="/car-single" className="nav-link">Car Details</Link></li>
                                                <li className="nav-item"><Link to="/car-type" className="nav-link">Cars Type</Link></li>
                                            </ul> */}
                                        </li>
                                        {/* <li className="nav-item submenu"><Link to="/" className="nav-link">Pages</Link>
                                            <ul>
                                                <li className="nav-item"><Link to="/service-single" className="nav-link">Service Details</Link></li>
                                                <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
                                                <li className="nav-item"><Link to="/blog-single" className="nav-link">Blog Details</Link></li>
                                                <li className="nav-item"><Link to="/drivers" className="nav-link">Drivers</Link></li>
                                                <li className="nav-item"><Link to="/driver-single" className="nav-link">Driver Details</Link></li>
                                                <li className="nav-item"><Link to="/pricing" className="nav-link">Pricing</Link></li>
                                                <li className="nav-item"><Link to="/image-gallery" className="nav-link">Image Gallery</Link></li>
                                                <li className="nav-item"><Link to="/video-gallery" className="nav-link">Video Gallery</Link></li>
                                                <li className="nav-item"><Link to="/testimonials" className="nav-link">Testimonials</Link></li>
                                                <li className="nav-item"><Link to="/faqs" className="nav-link">FAQ's</Link></li>
                                                <li className="nav-item"><Link to="/404" className="nav-link">404</Link></li>
                                            </ul>
                                        </li> */}
                                        <li className="nav-item"><Link to="/Contact" className="nav-link">Contactez-nous</Link></li>
                                    </ul>
                                </div>
                                <div className="header-btn d-inline-flex">
                                    <Link to="/" className="btn-default">Inscription</Link>
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
                                        <h1 className="text-anime-style-3" data-cursor="-opaque">Agence de location des voitures en tunisie</h1>
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
                                            {/* <div className="rent-details-item">
                                                <div className="icon-box">
                                                    <img src="images/icon-rent-details-1.svg" alt="" />
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
                                            </div> */}

                                            <div className="rent-details-item">
                                                <div className="icon-box">
                                                    <img src="assets/images/icon-rent-details-2.svg" alt="" />
                                                </div>
                                                <div className="rent-details-content">
                                                    <h3>Lieu de prise en charge</h3>
                                                    <select
                                                        className="rent-details-form form-select"
                                                        name="pickupAgency"
                                                        defaultValue=""
                                                    >
                                                        <option value="" disabled>Sélectionnez une agence</option>
                                                        <option value="Tunis : Aéroport Tunis-Carthage">Tunis : Aéroport Tunis-Carthage</option>
                                                        <option value="Monastir : Aéroport Habib Bourguiba">Monastir : Aéroport Habib Bourguiba</option>
                                                        <option value="Sfax : Aéroport Sfax">Sfax : Aéroport Sfax</option>
                                                        <option value="Djerba : Aéroport Djerba Mellita">Djerba : Aéroport Djerba Mellita</option>
                                                        <option value="Bizerte ville">Bizerte ville</option>
                                                        <option value="Sousse ville">Sousse ville</option>
                                                    </select>

                                                </div>
                                            </div>

                                            <div className="rent-details-item">
                                                <div className="icon-box">
                                                    <img src="assets/images/icon-rent-details-3.svg" alt="icon calendrier" />
                                                </div>
                                                <div className="rent-details-content">
                                                    <h3>Date & Heure de prise en charge</h3>
                                                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                                        <input
                                                            type="date"
                                                            name="pickup_date"
                                                            className="rent-details-form"
                                                            required
                                                        />
                                                        <input
                                                            type="time"
                                                            name="pickup_time"
                                                            className="rent-details-form"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="rent-details-item">
                                                <div className="icon-box">
                                                    <img src="assets/images/icon-rent-details-4.svg" alt="" />
                                                </div>
                                                <div className="rent-details-content">
                                                    <h3>Lieu de restitution</h3>
                                                    <select
                                                        className="rent-details-form form-select"
                                                        name="returnAgency"
                                                        defaultValue=""
                                                    >
                                                        <option value="" disabled>Selectionnez une agence</option>
                                                        <option value="Tunis : Aéroport Tunis-Carthage">Tunis : Aéroport Tunis-Carthage</option>
                                                        <option value="Monastir : Aéroport Habib Bourguiba">Monastir : Aéroport Habib Bourguiba</option>
                                                        <option value="Sfax : Aéroport Sfax">Sfax : Aéroport Sfax</option>
                                                        <option value="Djerba : Aéroport Djerba Mellita">Djerba : Aéroport Djerba Mellita</option>
                                                        <option value="Bizerte ville">Bizerte ville</option>
                                                        <option value="Sousse ville">Sousse ville</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="rent-details-item">
                                                <div className="icon-box">
                                                    <img src="assets/images/icon-rent-details-3.svg" alt="icon calendrier" />
                                                </div>
                                                <div className="rent-details-content">
                                                    <h3>Date & Heure de prise en charge</h3>
                                                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                                        <input
                                                            type="date"
                                                            name="return_date"
                                                            className="rent-details-form"
                                                            required
                                                        />
                                                        <input
                                                            type="time"
                                                            name="return_time"
                                                            className="rent-details-form"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="rent-details-item rent-details-search"  onClick={handleSearch}>
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
                                        <img src="/assets/images/about-img-1.jpg" alt="" />
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
                                    <h3 className="wow fadeInUp">A propos de nous</h3>
                                    <h2 className="text-anime-style-3" data-cursor="-opaque">Your trusted partner in reliable car rental</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.25s">Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga Dolor Saerror Sed Earum A Magni Soluta Quam Minus Dolor Dolor</p>
                                </div>

                                <div className="about-content-body">
                                    <div className="about-trusted-booking wow fadeInUp" data-wow-delay="0.5s">
                                        <div className="icon-box">
                                            <img src="assets/images/icon-about-trusted-1.svg" alt="" />
                                        </div>
                                        <div className="trusted-booking-content">
                                            <h3>easy booking process</h3>
                                            <p>We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service</p>
                                        </div>
                                    </div>

                                    <div className="about-trusted-booking wow fadeInUp" data-wow-delay="0.75s">
                                        <div className="icon-box">
                                            <img src="assets/images/icon-about-trusted-2.svg" alt="" />
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
                                <h3 className="wow fadeInUp">Nos services</h3>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Découvrez notre large gamme de services de location</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item wow fadeInUp">
                                <div className="icon-box">
                                    <img src="assets/images/icon-service-1.svg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h3>Location de voiture avec chauffeur</h3>
                                    <p>Enhance your rental experience with additional options.</p>
                                </div>
                                <div className="service-footer">
                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="service-item wow fadeInUp" data-wow-delay="0.25s">
                                <div className="icon-box">
                                    <img src="assets/images/icon-service-2.svg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h3>Location de voitures d'affaires</h3>
                                    <p>Enhance your rental experience with additional options.</p>
                                </div>
                                <div className="service-footer">
                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="service-item wow fadeInUp" data-wow-delay="0.5s">
                                <div className="icon-box">
                                    <img src="assets/images/icon-service-3.svg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h3>Transfert aéroport</h3>
                                    <p>Enhance your rental experience with additional options.</p>
                                </div>
                                <div className="service-footer">
                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="service-item wow fadeInUp" data-wow-delay="0.75s">
                                <div className="icon-box">
                                    <img src="assets/images/icon-service-4.svg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h3>Services de chauffeur</h3>
                                    <p>Enhance your rental experience with additional options.</p>
                                </div>
                                <div className="service-footer">
                                    <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="services-box-footer wow fadeInUp" data-wow-delay="1s">
                                <p>Découvrez notre gamme de services de location de voitures conçus pour répondre à tous vos besoins de voyage. D'une flotte diversifiée à des formules de location flexibles.</p>
                                <Link to="/service" className="btn-default">Voir tous les services</Link>
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
                                <h3 className="wow fadeInUp">Découvrez nos véhicules</h3>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Réservez votre voiture</h2>
                            </div>
                        </div>
                    </div>

                    {/*  <div className="row">
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
                            </div>
                            <div className="car-details-btn">
                                <div className="car-button-prev"></div>
				                <div className="car-button-next"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

                    <div className="row">
                        <div className="col-lg-12">

                            <div className="car-details-slider">
                                <Swiper
                                    modules={[Navigation]}
                                    navigation={{
                                        nextEl: '.car-button-next',
                                        prevEl: '.car-button-prev'
                                    }}
                                    spaceBetween={30}
                                    slidesPerView={3}
                                    loop={true}
                                >
                                    {cars.map((car, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="perfect-fleet-item">
                                                <div className="image-box">
                                                    <img src={car.image} alt={car.marque} />
                                                </div>
                                                <div className="perfect-fleet-content">
                                                    <div className="perfect-fleet-title">
                                                        <h3>{car.marque}</h3>
                                                        <h2>{car.modele}</h2>
                                                    </div>
                                                    <div className="perfect-fleet-body">
                                                        <ul>
                                                            {car.caracteristiques.map((carac, i) => (
                                                                <li key={i}>
                                                                    <img src={carac.icon} alt="" /> {carac.label}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="perfect-fleet-footer">
                                                        <div className="perfect-fleet-pricing">
                                                            <h2>{car.prixParJour}dt<span>/jour</span></h2>
                                                        </div>
                                                        <div className="perfect-fleet-btn">
                                                            <Link to={`/car-single/${car.id}`} className="section-icon-btn">
                                                                <img src="assets/images/arrow-white.svg" alt="" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                    {/* 
                        <SwiperSlide>
                        <div className="perfect-fleet-item">
                            <div className="image-box">
                                <img src="assets/images/perfect-fleet-img-2.png" alt="" />
                            </div>
                            <div className="perfect-fleet-content">
                                <div className="perfect-fleet-title">
                                    <h3>luxury car</h3>
                                    <h2>Audi RS7 Car 2016</h2>
                                </div>
                                <div className="perfect-fleet-body">
                                    <ul>
                                        <li><img src="assets/images/icon-fleet-list-1.svg" alt="" />4 passenger</li>
                                        <li><img src="assets/images/icon-fleet-list-2.svg" alt="" />4 door</li>
                                        <li><img src="assets/images/icon-fleet-list-3.svg" alt="" />bags</li>
                                        <li><img src="assets/images/icon-fleet-list-4.svg" alt="" />auto</li>
                                    </ul>
                                </div>
                                <div className="perfect-fleet-footer">
                                    <div className="perfect-fleet-pricing">
                                        <h2>$320<span>/day</span></h2>
                                    </div>
                                    <div className="perfect-fleet-btn">
                                        <Link to="/" className="section-icon-btn">
                                        <img src="assets/images/arrow-white.svg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
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

                        </SwiperSlide>
                        <SwiperSlide>
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
                        </SwiperSlide> */}

                                </Swiper>

                                {/* Boutons de navigation */}
                                <div className="car-details-btn">
                                    <div className="car-button-prev"></div>
                                    <div className="car-button-next"></div>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>

            {/* Luxury Collection Section Start */}
            {/* <div className="luxury-collection">
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-lg-12">
                            <div className="luxury-collection-box">
                                <div className="luxury-collection-item wow fadeInUp">
                                    <div className="luxury-collection-image" data-cursor-text="View">
                                        <Link to="/">
                                            <figure>
                                                <img src="assets/images/luxury-collection-img-1.jpg" alt="" />
                                            </figure>
                                        </Link>
                                    </div>

                                    <div className="luxury-collection-title">
                                        <h2>sport car</h2>
                                    </div>

                                    <div className="luxury-collection-btn">
                                        <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt="" /></Link>
                                    </div>

                                </div>

                                <div className="luxury-collection-item wow fadeInUp" data-wow-delay="0.25s">
                                    <div className="luxury-collection-image" data-cursor-text="View">
                                        <Link to="/">
                                            <figure>
                                                <img src="assets/images/luxury-collection-img-2.jpg" alt="" />
                                            </figure>
                                        </Link>
                                    </div>

                                    <div className="luxury-collection-title">
                                        <h2>convertible car</h2>
                                    </div>

                                    <div className="luxury-collection-btn">
                                        <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt="" /></Link>
                                    </div>
                                </div>

                                <div className="luxury-collection-item wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="luxury-collection-image" data-cursor-text="View">
                                        <Link to="/">
                                            <figure>
                                                <img src="assets/images/luxury-collection-img-3.jpg" alt="" />
                                            </figure>
                                        </Link>
                                    </div>

                                    <div className="luxury-collection-title">
                                        <h2>sedan car</h2>
                                    </div>

                                    <div className="luxury-collection-btn">
                                        <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt="" /></Link>
                                    </div>
                                </div>

                                <div className="luxury-collection-item wow fadeInUp" data-wow-delay="0.75s">
                                    <div className="luxury-collection-image" data-cursor-text="View">
                                        <Link to="/">
                                            <figure>
                                                <img src="assets/images/luxury-collection-img-4.jpg" alt="" />
                                            </figure>
                                        </Link>
                                    </div>

                                    <div className="luxury-collection-title">
                                        <h2>luxury car</h2>
                                    </div>

                                    <div className="luxury-collection-btn">
                                        <Link to="/" className="section-icon-btn"><img src="assets/images/arrow-white.svg" alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* How It Work Section Start */}
            <div className="how-it-work">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="how-work-content">
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">how it work</h3>
                                    <h2 className="text-anime-style-3" data-cursor="-opaque">Streamlined processes for a hassle-free experience</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.25s">Our streamlined process ensures a seamless car rental experience from start to finish. With easy online booking, flexible pick-up and drop-off options.</p>
                                </div>

                                <div className="how-work-accordion" id="workaccordion">

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                                        <div className="icon-box">
                                            <img src="assets/images/icon-how-it-work-1.svg" alt="" />
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
                                            <img src="assets/images/icon-how-it-work-2.svg" alt="" />
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
                                            <img src="assets/images/icon-how-it-work-3.svg" alt="" />
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
                                        <img src="assets/images/about-img-1.jpg" alt="" />
                                    </figure>
                                </div>

                                <div className="trusted-client">
                                    <div className="trusted-client-content">
                                        <h3><span className="counter">5</span>m+ Trusted world wide global clients</h3>
                                    </div>
                                    <div className="trusted-client--image">
                                        <img src="assets/images/trusted-client-img.png" alt="" />
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
                            <div className="intro-video-box">
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
                                                    <img src="assets/images/client-logo-1.svg" alt="/" />
                                                </div>
                                            </div>

                                            <div className="swiper-slide">
                                                <div className="company-logo">
                                                    <img src="assets/images/client-logo-2.svg" alt="" />
                                                </div>
                                            </div>

                                            <div className="swiper-slide">
                                                <div className="company-logo">
                                                    <img src="assets/images/client-logo-3.svg" alt="" />
                                                </div>
                                            </div>

                                            <div className="swiper-slide">
                                                <div className="company-logo">
                                                    <img src="assets/images/client-logo-4.svg" alt="" />
                                                </div>
                                            </div>

                                            <div className="swiper-slide">
                                                <div className="company-logo">
                                                    <img src="assets/images/client-logo-5.svg" alt="" />
                                                </div>
                                            </div>

                                            <div className="swiper-slide">
                                                <div className="company-logo">
                                                    <img src="assets/images/client-logo-6.svg" alt="" />
                                                </div>
                                            </div>

                                            <div className="swiper-slide">
                                                <div className="company-logo">
                                                    <img src="assets/images/client-logo-5.svg" alt="" />
                                                </div>
                                            </div>

                                            <div className="swiper-slide">
                                                <div className="company-logo">
                                                    <img src="assets/images/client-logo-4.svg" alt="" />
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
                                <h3 className="wow fadeInUp">Pourquoi nous choisir</h3>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Une qualité et un service inégalés pour vos besoins</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 order-lg-1 order-md-1 order-1">
                            <div className="why-choose-item wow fadeInUp">
                                <div className="icon-box">
                                    <img src="assets/images/icon-why-choose-1.svg" alt="" />
                                </div>
                                <div className="why-choose-content">
                                    <h3>Vastes options de flotte</h3>
                                    <p>Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa</p>
                                </div>
                            </div>

                            <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                                <div className="icon-box">
                                    <img src="assets/images/icon-why-choose-2.svg" alt="" />
                                </div>
                                <div className="why-choose-content">
                                    <h3>Service client exceptionnel</h3>
                                    <p>Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 order-lg-2 order-md-3 order-2">
                            <div className="why-choose-image">
                                <figure className="reveal">
                                    <img src="assets/images/why-choose-img.jpg" alt="" />
                                </figure>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 order-lg-3 order-md-2 order-3">
                            <div className="why-choose-item wow fadeInUp">
                                <div className="icon-box">
                                    <img src="assets/images/icon-why-choose-3.svg" alt="" />
                                </div>
                                <div className="why-choose-content">
                                    <h3>Emplacements pratiques</h3>
                                    <p>Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa</p>
                                </div>
                            </div>

                            <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                                <div className="icon-box">
                                    <img src="assets/images/icon-why-choose-4.svg" alt="" />
                                </div>
                                <div className="why-choose-content">
                                    <h3>Fiabilité et sécurité</h3>
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
                                        <img src="assets/images/our-faqs-img-1.jpg" alt="" />
                                    </figure>
                                </div>

                                <div className="faqs-img-2">
                                    <figure className="image-anime">
                                        <img src="assets/images/our-faqs-img-2.jpg" alt="" />
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
                                                            <img src="assets/images/author-1.jpg" alt="" />
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
                                                            <img src="assets/images/author-2.jpg" alt="" />
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
                                                            <img src="assets/images/author-3.jpg" alt="" />
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
                                                            <img src="assets/images/author-4.jpg" alt="" />
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
                                    <Link to="/" className="btn-default">contact us</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-5">
                            <div className="cat-box-image">
                                <figure>
                                    <img src="assets/images/cta-car-img.png" alt="" />
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
                                        <Link to="/" className="image-anime" data-cursor-text="View">
                                            <img src="assets/images/post-1.jpg" alt="" />
                                        </Link>
                                    </figure>
                                </div>


                                <div className="highlighted-article-body">
                                    <div className="article-meta">
                                        <ul>
                                            <li><Link to="/"><i className="fa-solid fa-calendar-days"></i> sep 19, 2024</Link></li>
                                        </ul>
                                    </div>

                                    <div className="highlighted-article-content">
                                        <h3><Link to="/">Road Trip Essentials: What to Pack for a Smooth Journey</Link></h3>
                                        <Link to="/" className="section-icon-btn">
                                            <img src="assets/images/arrow-white.svg" alt="" />
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
                                            <img src="assets/images/post-2.jpg" alt="" />
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
                                        <Link to="/" className="read-story-btn">read story</Link>
                                    </div>
                                </div>
                            </div>


                            <div className="article-post wow fadeInUp" data-wow-delay="0.25s">
                                <div className="article-featured-img">
                                    <figure>
                                        <Link to="/" className="image-anime" data-cursor-text="View">
                                            <img src="assets/images/post-3.jpg" alt="" />
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
                                        <Link to="/" className="read-story-btn">read story</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="article-post wow fadeInUp" data-wow-delay="0.5s">
                                <div className="article-featured-img">
                                    <figure>
                                        <Link to="/" className="image-anime" data-cursor-text="View">
                                            <img src="assets/images/post-4.jpg" alt="" />
                                        </Link>
                                    </figure>
                                </div>

                                <div className="article-post-body">
                                    <div className="article-meta">
                                        <ul>
                                            <li><Link to="/"><i className="fa-solid fa-calendar-days"></i> sep 22, 2024</Link></li>
                                        </ul>
                                    </div>

                                    <div className="article-post-content">
                                        <h3><Link to="/">Exploring the City: Best Urban Destinations for a Weekend Getaway</Link></h3>
                                        <Link to="/" className="read-story-btn">read story</Link>
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
                                    <img src="assets/images/footer-logo.svg" alt="" />
                                </div>

                                <div className="about-footer-content">
                                    <p>Experience the ease and convenience of renting a car with Novaride. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="footer-links footer-menu">
                                <h3>Liens rapides</h3>
                                <ul>
                                    <li><Link to="/">Acceuil</Link></li>
                                    <li><Link to="/about">A propos</Link></li>
                                    <li><Link to="/cars">Voitures</Link></li>
                                    <li><Link to="/service">services</Link></li>
                                    <li><Link to="/contact">Nous contacter</Link></li>
                                </ul>
                            </div>
                        </div>





                        <div className="col-lg-3 col-md-4">
                            <div className="footer-links footer-quick-links">
                                <h3>Location en ville</h3>
                                <ul>
                                    <li><Link to="/">Tunis</Link></li>
                                    <li><Link to="/">Sousse</Link></li>
                                    <li><Link to="/">Mahdia</Link></li>
                                    <li><Link to="/">Djerba</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="footer-links footer-quick-links">
                                <h3>Location aéroport</h3>
                                <ul>
                                    <li><Link to="/">Aéroport Tunis Carthage</Link></li>
                                    <li><Link to="/">Aéroport Habib Bourguiba</Link></li>
                                    <li><Link to="/">Aéroport Sfax</Link></li>
                                    <li><Link to="/">Aéroport Djerba Mellita</Link></li>
                                </ul>
                            </div>
                        </div>





                    </div>

                    {/* <div className="footer-copyright">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-lg-4 col-md-4 text-start">
                                            <div className="footer-copyright-text">
                                                <p>© 2025 Novaride. All rights reserved.</p>
                                            </div>
                                        </div>
            
                                        <div className="footer-links footer-quick-links">
                                            <ul className="legal-links-horizontal">
                                                <li><Link to="/">termes & conditions</Link></li>
                                                <li><Link to="/">politique de confidentialité</Link></li>
                                            </ul>
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
                                </div> */}

                    <div className="footer-copyright">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-7">
                                <div className="footer-copyright-text">
                                    <p>© 2025 Novaride. All rights reserved.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-5">
                                <div className="footer-social-links">
                                    <ul>
                                        <li><Link to="/"><i className="fa-brands fa-youtube"></i></Link></li>
                                        <li><Link to="/"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                        <li><Link to="/"><i className="fa-brands fa-twitter"></i></Link></li>
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

