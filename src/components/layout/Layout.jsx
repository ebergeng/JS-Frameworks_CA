import Footer from "./Footer";
import Header from "./Header";

const LayOut = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default LayOut;
