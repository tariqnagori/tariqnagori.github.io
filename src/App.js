import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import AdditionalInfo from "./components/AdditionalInfo";
import JoinUs from "./components/JoinUs";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/process" component={Process} />
        <Route path="/additional-info" component={AdditionalInfo} />
        <Route path="/join-us" component={JoinUs} />
        <Route path="/contact" component={Contact} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
