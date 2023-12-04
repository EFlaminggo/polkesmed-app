import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Introduction from "./components/Introduction";
import Statistic from "./components/Statistic";
import Schedule from "./components/Schedule";
import ListDoctor from "./components/ListDoctor";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <Featured />
        <Introduction />
        <Statistic />
        <Schedule />
        <ListDoctor />
        <Footer />
      </>
    );
  }
}

export default App;
