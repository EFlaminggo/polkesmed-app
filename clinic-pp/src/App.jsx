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
import Dashboard from "./pages/protected/dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
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

export default App;
