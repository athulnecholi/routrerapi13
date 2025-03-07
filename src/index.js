import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import Home from "./App";
import ProductDetails from "./ProductDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
