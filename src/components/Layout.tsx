import Sam from "@/components/Sam";
import Footer from "@components/Footer";
import Header from "@components/Header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Sam />
    </div>
  );
}

export default Layout;
