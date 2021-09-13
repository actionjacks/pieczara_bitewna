import TopHeader from "./top-header";
import Navigation from "./navigation";
import MobileNavigation from "./mobile-navigation";

function Layout({ children }) {
  return (
    <>
      <TopHeader />
      <Navigation />
      {/* <MobileNavigation /> */}
      <main>{children}</main>
    </>
  );
}
export default Layout;
