import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Introduction from "./components/Introduction";
import Statistic from "./components/Statistic";
import Schedule from "./components/Schedule";
import ListDoctor from "./components/ListDoctor";
import Footer from "./components/Footer";
import Doctor from "./pages/doctor";
import Services from "./pages/services";
import AboutUs from "./pages/aboutus";
import Login from "./pages/login";
import Register from "./pages/register";
import Appointment from "./pages/appointment";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
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

        {/* Private Routes */}
        <Route path="/Dashboard" element={<ProtectedRoute />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function ProtectedRoute() {
  return (
    // Wrap Header and Sidebar within a single parent element
    <>
      <Header />
      <Sidebar />
    </>
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

export default App;
