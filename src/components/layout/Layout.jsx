// src/components/layout/Layout.jsx
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import UpcomingEventPopup from "../events/UpcomingEventPopup.jsx";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-slate-50">
      <Navbar />
      <main className="flex-1 pt-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto w-full">
        {children}
      </main>
      <Footer />

      {/* Global upcoming event popup */}
      <UpcomingEventPopup />
    </div>
  );
}

export default Layout;
