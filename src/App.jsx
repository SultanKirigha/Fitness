import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";

import ScrollToTop from "./components/common/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import Programs from "./pages/Programs.jsx";
import Trainers from "./pages/Trainers.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Events from "./pages/Events.jsx";
import Shop from "./pages/Shop.jsx";

import "./index.css";

function App() {
  return (
    <Layout>
      {/* This will run on every route change */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/events" element={<Events />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
