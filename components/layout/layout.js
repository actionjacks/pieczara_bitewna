import TopHeader from "./top-header";
import Navigation from "./navigation";

function Layout({ children }) {
  return (
    <>
      <TopHeader />
      <Navigation />
      <main>{children}</main>
    </>
  );
}
export default Layout;
