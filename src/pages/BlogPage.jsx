import Navigation from "../layouts/Navigation";
import Footer from "../layouts/Footer";
import { Outlet } from "react-router-dom";

export default function BlogPage() {
  return (
    <div className="blogPage">
      <Navigation />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
