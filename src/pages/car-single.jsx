import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CarSingle = () => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
  const fetchCar = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/voitures");
      if (!response.ok) {
        throw new Error("Erreur HTTP: " + response.status);
      }
      const data = await response.json();
      console.log("Données reçues:", data);
      const foundCar = data.find((item) => item.id === parseInt(id));
      console.log("Voiture trouvée:", foundCar);
      setCar(foundCar);
    } catch (error) {
      console.error("Erreur lors du chargement :", error);
    } finally {
      setLoading(false);
    }
  };

  fetchCar();
}, [id]);


  if (loading) return <p>Chargement...</p>;
  if (!car) return <p>Voiture non trouvée.</p>;

  return (
    <>
      {/* Preloader */}
      <div className="preloader">
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon">
            <img src="assets/images/loader.svg" alt="Chargement" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link to="/" className="navbar-brand">
                <img src="assets/images/logo.svg" alt="Logo Novaride" />
              </Link>
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Accueil
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link">
                        À propos de nous
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/service" className="nav-link">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/cars" className="nav-link">
                        Voitures
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link">
                        Contactez-nous
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="header-btn d-inline-flex">
                  <Link to="/" className="btn-default">
                    Inscription
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
                  {car.marque} {car.modele} {car.annee}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Fleets Single Start */}
      <div className="page-fleets-single">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="fleets-single-sidebar">
                <div className="fleets-single-sidebar-box wow fadeInUp">
                  <div className="fleets-single-sidebar-pricing">
                    <h2>
                      {car.prixParJour}dt<span>/prix par jour</span>
                    </h2>
                  </div>
                  <div className="fleets-single-sidebar-list">
                    <ul>
                      {car.caracteristiques.map((carac, i) => (
                        <li key={i}>
                        <img src={carac.icon} alt="" /> {carac.label}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="fleets-single-sidebar-btn">
                    <Link to="#bookingform" className="btn-default popup-with-form">
                      Réserver
                    </Link>
                    <span>or</span>
                    <Link to="#" className="wp-btn">
                      <i className="fa-brands fa-whatsapp"></i>
                    </Link>
                  </div>
                </div>

                <div className="booking-form-box">
                  <form id="bookingform" className="white-popup-block mfp-hide booking-form">
                    <div className="section-title">
                      <h2>Reserve your vehicle today!</h2>
                      <p>
                        Fill out the form below to reserve your vehicle. Complete the necessary details to ensure a
                        smooth rental experience.
                      </p>
                    </div>
                    <fieldset>
                      <div className="row">
                        <div className="booking-form-group col-md-6 mb-4">
                          <input
                            type="text"
                            name="name"
                            className="booking-form-control"
                            id="name"
                            placeholder="Full Name"
                            required
                          />
                          <div className="help-block with-errors"></div>
                        </div>

                        <div className="booking-form-group col-md-6 mb-4">
                          <input
                            type="email"
                            name="email"
                            className="booking-form-control"
                            id="email"
                            placeholder="Enter Your Email"
                            required
                          />
                          <div className="help-block with-errors"></div>
                        </div>

                        <div className="booking-form-group col-md-6 mb-4">
                          <input
                            type="text"
                            name="phone"
                            className="booking-form-control"
                            id="phone"
                            placeholder="Enter Your Number"
                            required
                          />
                          <div className="help-block with-errors"></div>
                        </div>

                        <div className="booking-form-group col-md-6 mb-4">
                          <select
                            name="cartype"
                            className="booking-form-control form-select"
                            id="cartype"
                            defaultValue=""
                            required
                          >
                            <option value="" disabled>
                              Choose Car Type
                            </option>
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
                          <select
                            name="location"
                            className="booking-form-control form-select"
                            id="pickuplocation"
                            defaultValue=""
                            required
                          >
                            <option value="" disabled>
                              Pick Up Location
                            </option>
                            <option value="abu_dhabi">abu dhabi</option>
                            <option value="alain">alain</option>
                            <option value="dubai">dubai</option>
                            <option value="sharjah">sharjah</option>
                          </select>
                          <div className="help-block with-errors"></div>
                        </div>

                        <div className="booking-form-group col-md-6 mb-4">
                          <input
                            type="text"
                            name="date"
                            className="booking-form-control datepicker"
                            id="pickupdate"
                            placeholder="PickUp Date"
                            required
                          />
                          <div className="help-block with-errors"></div>
                        </div>

                        <div className="booking-form-group col-md-6 mb-4">
                          <select
                            name="droplocation"
                            className="booking-form-control form-select"
                            id="droplocation"
                            defaultValue=""
                            required
                          >
                            <option value="" disabled>
                              Drop Off Location
                            </option>
                            <option value="abu_dhabi">abu dhabi</option>
                            <option value="alain">alain</option>
                            <option value="sharjah">sharjah</option>
                          </select>
                          <div className="help-block with-errors"></div>
                        </div>

                        <div className="booking-form-group col-md-6 mb-4">
                          <input
                            type="text"
                            name="date"
                            className="booking-form-control datepicker"
                            id="returndate"
                            placeholder="Return Date"
                            required
                          />
                          <div className="help-block with-errors"></div>
                        </div>

                        <div className="booking-form-group col-md-12 mb-4">
                          <textarea
                            name="msg"
                            className="booking-form-control"
                            id="msg"
                            rows="3"
                            placeholder="Write Your Message"
                            required
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>

                        <div className="col-md-12 booking-form-group">
                          <button type="submit" className="btn-default">
                            rent now
                          </button>
                          <div id="msgSubmit" className="h3 hidden"></div>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-8">
              <div className="fleets-single-content">
                <div className="fleets-single-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="fleets-slider-image">
                          <figure className="image-anime">
                            <img src="assets/images/fleets-slider-img-1.jpg" alt="Car Slide 1" />
                          </figure>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="fleets-slider-image">
                          <figure className="image-anime">
                            <img src="assets/images/fleets-slider-img-2.jpg" alt="Car Slide 2" />
                          </figure>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="fleets-slider-image">
                          <figure className="image-anime">
                            <img src="assets/images/fleets-slider-img-3.jpg" alt="Car Slide 3" />
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
                      <img src="assets/images/icon-fleets-benefits-1.svg" alt="Unlimited KMs Icon" />
                    </div>
                    <div className="fleets-benefits-content">
                      <h3>Unlimited KMs</h3>
                      <p>Endless Km with no extra charge </p>
                    </div>
                  </div>

                  <div className="fleets-benefits-item">
                    <div className="icon-box">
                      <img src="assets/images/icon-fleets-benefits-2.svg" alt="Another Benefit Icon" />
                    </div>
                    <div className="fleets-benefits-content">
                      <h3>Unlimited KMs</h3>
                      <p>Endless Km with no extra charge </p>
                    </div>
                  </div>
                </div>

                <div className="fleets-information">
                  <div className="section-title">
                    <h3 className="wow fadeInUp">General Information</h3>
                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                      Know about our car service
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay="0.25s">
                      Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion
                      consation porttitor orci sit amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante
                      sollicitudin velen fermen morbinetion consesua the risus consequation the porttiton.
                    </p>
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
                    <h3 className="wow fadeInUp">Amenities</h3>
                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                      Premium amenities and features
                    </h2>
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
                    <h3 className="wow fadeInUp">Rental Conditions</h3>
                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                      Policies and agreement
                    </h2>
                  </div>

                  <div className="rental-condition-accordion" id="rentalaccordion">
                    <div className="accordion-item wow fadeInUp">
                      <h2 className="accordion-header" id="rentalheading1">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#rentalcollapse1"
                          aria-expanded="true"
                          aria-controls="rentalcollapse1"
                        >
                          Driver's License Requirements
                        </button>
                      </h2>
                      <div
                        id="rentalcollapse1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="rentalheading1"
                        data-bs-parent="#rentalaccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.25s">
                      <h2 className="accordion-header" id="rentalheading2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#rentalcollapse2"
                          aria-expanded="false"
                          aria-controls="rentalcollapse2"
                        >
                          Insurance and Coverage policy
                        </button>
                      </h2>
                      <div
                        id="rentalcollapse2"
                        className="accordion-collapse collapse"
                        aria-labelledby="rentalheading2"
                        data-bs-parent="#rentalaccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                      <h2 className="accordion-header" id="rentalheading3">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#rentalcollapse3"
                          aria-expanded="false"
                          aria-controls="rentalcollapse3"
                        >
                          Available payment Methods
                        </button>
                      </h2>
                      <div
                        id="rentalcollapse3"
                        className="accordion-collapse collapse"
                        aria-labelledby="rentalheading3"
                        data-bs-parent="#rentalaccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.75s">
                      <h2 className="accordion-header" id="rentalheading4">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#rentalcollapse4"
                          aria-expanded="false"
                          aria-controls="rentalcollapse4"
                        >
                          Cancellation and Modification policy
                        </button>
                      </h2>
                      <div
                        id="rentalcollapse4"
                        className="accordion-collapse collapse"
                        aria-labelledby="rentalheading4"
                        data-bs-parent="#rentalaccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item wow fadeInUp" data-wow-delay="1s">
                      <h2 className="accordion-header" id="rentalheading5">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#rentalcollapse5"
                          aria-expanded="false"
                          aria-controls="rentalcollapse5"
                        >
                          Rental Extensions and Late Return policy
                        </button>
                      </h2>
                      <div
                        id="rentalcollapse5"
                        className="accordion-collapse collapse"
                        aria-labelledby="rentalheading5"
                        data-bs-parent="#rentalaccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                          </p>
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
            <div className="col-lg-4 col-md-6 footer-widget footer-about">
              <div className="footer-logo">
                <img src="assets/images/logo.svg" alt="Logo" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae neque tempor consequat
                quis ut nisi. Sed ut convallis magna, eget varius lorem.
              </p>
              <ul className="footer-social">
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-widget footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="/about">À propos de nous</Link>
                </li>
                <li>
                  <Link to="/service">Services</Link>
                </li>
                <li>
                  <Link to="/cars">Voitures</Link>
                </li>
                <li>
                  <Link to="/contact">Contactez-nous</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-widget footer-contact">
              <h3>Contactez-nous</h3>
              <ul>
                <li>
                  <i className="fa-solid fa-location-dot"></i> 123 Main Street, City, Country
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i> +1 234 567 890
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i> info@example.com
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-widget footer-newsletter">
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter to get the latest updates and offers.</p>
              <form>
                <input
                  type="email"
                  name="email"
                  className="footer-newsletter-input"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="btn-default">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CarSingle;
