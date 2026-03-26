import { Outlet } from "react-router-dom";
import FloatingActions from "./FloatingActions";
import Footer from "./Footer";

function SiteLayout() {
  return (
    <div className="site-shell">
      <Outlet />
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default SiteLayout;
