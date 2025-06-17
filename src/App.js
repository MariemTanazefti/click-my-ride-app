import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Cars from "./pages/Cars";
import CarSingle from "./pages/car-single";
import CarType from "./pages/car-type";
import ServiceSingle from "./pages/service-single";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/blog-single";
import Drivers from "./pages/Drivers";
import DriverSingle from "./pages/driver-single";
import Pricing from "./pages/Pricing";
import ImageGallery from "./pages/image-gallery";
import Testimonials from "./pages/testimonials";
import Faqs from "./pages/Faqs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/car-single" element={<CarSingle />} />
        <Route path="/car-type" element={<CarType />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service-single" element={<ServiceSingle />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-single" element={<BlogSingle />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/driver-single" element={<DriverSingle />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
        <Route path="/video-gallery" element={<ImageGallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faqs" element={<Faqs />} /> */

        


      </Routes>
    </Router>
  );
}

export default App;
