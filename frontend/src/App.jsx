import { Routes, Route } from "react-router-dom";

import HomePage from "./landing-page/Home/HomePage";
import Signup from "./landing-page/Signup/Signup";
import AboutPage from "./landing-page/About/AboutPage";
import ProductsPage from "./landing-page/Products/ProductsPage";
import PricingPage from "./landing-page/Pricing/PricingPage";
import SupportPage from "./landing-page/Support/SupportPage";
import Navbar from "./landing-page/Navbar";
import Footer from "./landing-page/Footer";
import NotFound from "./landing-page/NotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
