import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
