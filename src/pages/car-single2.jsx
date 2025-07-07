import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CarSingle2 = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/voitures');
        const data = await response.json();
        const foundCar = data.find((item) => item.id === parseInt(id));
        setCar(foundCar);
      } catch (error) {
        console.error('Erreur lors du chargement :', error);
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
    <div className="preloader">
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon">
            <img src="assets/images/loader.svg" alt="Chargement" />
          </div>
        </div>
      </div>

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

export default CarSingle2;
