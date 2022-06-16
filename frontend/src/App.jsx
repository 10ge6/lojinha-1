import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductFilter from "./components/ProductFilter";
import GlobalStyle from "./styles/Global";
import ProductSection from "./components/ProductSection";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Hero />
      <ProductFilter />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
