import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";

function Layout({ children }) {
  const { theme } = useTheme();

  const wrapperClasses =
    theme === "dark"
      ? "min-h-screen flex flex-col bg-dark text-white"
      : "min-h-screen flex flex-col bg-slate-50 text-slate-900";

  return (
    <div className={wrapperClasses}>
      <Navbar />
      <main className="flex-1 pt-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
