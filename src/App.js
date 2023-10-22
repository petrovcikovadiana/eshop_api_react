import React, { useState } from "react";
//import react router dom
import { HashRouter as Router, Route, Routes } from "react-router-dom";
//import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
//import components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal"; // Import the Modal component

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="product/:id/" element={<ProductDetails />} /> */}
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
