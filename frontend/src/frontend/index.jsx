import "bootstrap/dist/css/bootstrap.min.css";
import "../frontend/libraries/bootstrap/css/bootstrap.min.css";
import "../frontend/libraries/fontawesome/css/all.min.css";
import "../frontend/styles/main.css";
import "../frontend/libraries/jquery/jquery-3.7.1.min.js";
import "../frontend/libraries/bootstrap/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Doctor from "../pages/doctor";
import Services from "../pages/services";
import AboutUs from "../pages/aboutus";
import Login from "../pages/login";
import Register from "../pages/register";
import Appointment from "../pages/appointment";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Introduction from "../components/Introduction";
import Statistic from "../components/Statistic";
import Schedule from "../components/Schedule";
import ListDoctor from "../components/ListDoctor";

function Index() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />} />
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Appointment" element={<Appointment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function Layout() {
  return (
    <>
      <Hero />
      <Featured />
      <Introduction />
      <Statistic />
      <Schedule />
      <ListDoctor />
    </>
  );
}

export default Index;
