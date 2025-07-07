import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
//import axios from 'axios';
import { useLocation } from 'react-router-dom';
const Car2 = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const pickupAgency = params.get('pickupAgency');
  const returnAgency = params.get('returnAgency');
  const pickupDate = params.get('pickupDateTime');
  const returnDate = params.get('returnDateTime');

  const [availableCars, setAvailableCars] = useState([]);

  useEffect(() => {
    console.log("useEffect triggered");
    console.log(" Params:", {
      pickupAgency,
      returnAgency,
      pickupDate,
      returnDate
    });

    const pickupDateTime = new Date(pickupDate);
    const returnDateTime = new Date(returnDate);

    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/voitures');
        const data = await response.json();

        console.log(" Données reçues du backend:", data);

        const results = data.filter((car) => {
          const carStart = new Date(car.disponibleDe);
          const carEnd = new Date(car.disponibleA);

          console.log("\n Analyse voiture:", car.marque, car.modele);
          console.log("  - car.agence:", car.agence);
          console.log("  - pickupAgency:", pickupAgency);
          console.log("  - carStart:", carStart);
          console.log("  - carEnd:", carEnd);
          console.log("  - pickupDateTime:", pickupDateTime);
          console.log("  - returnDateTime:", returnDateTime);

          const matchAgence = car.agence === pickupAgency;
          const matchPickup = pickupDateTime >= carStart;
          const matchReturn = returnDateTime <= carEnd;

          console.log("  matchAgence:", matchAgence);
          console.log("  matchPickup:", matchPickup);
          console.log("  matchReturn:", matchReturn);

          return matchAgence && matchPickup && matchReturn;
        });

        setAvailableCars(results);
      } catch (error) {
        console.error("Erreur lors du fetch:", error);
      }
    };

    fetchCars();
  }, [pickupAgency, returnAgency, pickupDate, returnDate]);

  return (

    <>
      {/* Preloader Start*/}
      <div className="preloader">
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon"><img src="assets/images/loader.svg" alt="" /></div>
        </div>
      </div>

      {/* Header Start */}
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
                    <li className="nav-item">< Link to="/" className="nav-link" >Acceuil</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link" >A propos de nous</Link></li>
                    <li className="nav-item"><Link to="/service" className="nav-link" >Services</Link></li>
                    <li className="nav-item submenu"><Link to="/cars" className="nav-link" >Voitures</Link>
                      <ul>
                        <li className="nav-item"><Link to="/cars" className="nav-link" >Car Lists</Link></li>
                        <li className="nav-item"><Link to="/car-single" className="nav-link" >Car Details</Link></li>
                        <li className="nav-item"><Link to="/car-type" className="nav-link" >Cars Type</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item"><Link to="/" className="nav-link" >Pages</Link>
                    </li>
                    <li className="nav-item"><Link to="/contact" className="nav-link" >Contactez-nous</Link></li>
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
                <h1 className="text-anime-style-3" data-cursor="-opaque">Voitures disponible</h1>
                {/* <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">fleets</li>
                  </ol>
                </nav> */}
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
                      <input type="text" name="search" className="form-control" id="search" placeholder="Search..." required />
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
                        <input className="form-check-input" type="checkbox" value="" id="checkbox1" />
                        <label className="form-check-label" htmlFor="checkbox1">sport cars</label>
                      </li>

                      <li className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkbox2" />
                        <label className="form-check-label" htmlFor="checkbox2">electric car</label>
                      </li>

                      <li className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkbox3" />
                        <label className="form-check-label" htmlFor="checkbox3">Convertible</label>
                      </li>

                      <li className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkbox4" />
                        <label className="form-check-label" htmlFor="checkbox4">luxury cars</label>
                      </li>

                      <li className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkbox5" />
                        <label className="form-check-label" htmlFor="checkbox5">sedan</label>
                      </li>

                      <li className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkbox6" />
                        <label className="form-check-label" htmlFor="checkbox6">coupe cars</label>
                      </li>
                    </ul>
                  </div>

                  <div className="fleets-sidebar-list">
                    <div className="fleets-list-title">
                      <h3>pickup location</h3>
                    </div>

                    <ul>
                      <li className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkbox7" />
                        <label className="form-check-label" htmlFor="checkbox7">abu dhabi</label>
                      </li>

                      <li className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkbox8" />
                        <label className="form-check-label" htmlFor="checkbox8">alain</label>
                      </li>

                      <li className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkbox9" />
                        <label className="form-check-label" htmlFor="checkbox9">dubai</label>
                      </li>

                      <li className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkbox10" />
                        <label className="form-check-label" htmlFor="checkbox10">sharjah</label>
                      </li>
                    </ul>
                  </div>

                  <div className="fleets-sidebar-list">
                    <div className="fleets-list-title">
                      <h3>dropoff location</h3>
                    </div>

                    <ul>
                      <li className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkbox11" />
                        <label className="form-check-label" htmlFor="checkbox11">abu dhabi</label>
                      </li>

                      <li className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkbox12" />
                        <label className="form-check-label" htmlFor="checkbox12">alain</label>
                      </li>

                      <li className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkbox13" />
                        <label className="form-check-label" htmlFor="checkbox13">dubai</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>





            <div className="col-lg-9">
              <div className="fleets-collection-box">
                <div className="row">

                  {availableCars.length === 0 ? (
                    <p style={{ color: 'red' }}>Aucune voiture disponible pour ces dates.</p>
                  ) : (
                    availableCars.map((car) => (

                      <div className="col-lg-4 col-md-6" key={car.id}>
                        <div className="perfect-fleet-item fleets-collection-item wow fadeInUp">
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
                                <Link to="/" className="section-icon-btn">
                                  <img src="assets/images/arrow-white.svg" alt="" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                    )))}



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
      </div>

      {/* Footer Start*/}
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
                                          <p>© 2024 Novaride. All rights reserved.</p>
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

export default Car2;