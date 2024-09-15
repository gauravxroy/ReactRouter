import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Header /> {/*Header will be rendered always  */}
      <Outlet /> {/*Outlet will be rendered as per routes  */}
      <Footer /> {/*Footer will be rendered always  */}
    </>
  );
}

export default Layout;
// This layout privide a template for all routes which render the where it specifies the specific components as template and layout , and outlet is a router components used to rendered the contant on path changes
