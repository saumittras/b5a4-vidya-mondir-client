import Footer from "@/components/components/Footer";
import Navbar from "@/components/components/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <div className="nav sm:flex hidden">
        <Navbar />
      </div>

      <main className="main">
        <Outlet />
      </main>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
