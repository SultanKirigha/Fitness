import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";

import Home from "./pages/Home.jsx";
import Programs from "./pages/Programs.jsx";
import Trainers from "./pages/Trainers.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Events from "./pages/Events.jsx";


function App() {
  return (
    <div className="min-h-screen bg-transparent text-inherit transition-colors duration-300 app-shell">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />   {/* ← add this */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
