import TopHeader from "./top-header";
import Navigation from "./navigation";
import MobileNavigation from "./mobile-navigation";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <>
      <TopHeader />
      <Navigation />
      <MobileNavigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
