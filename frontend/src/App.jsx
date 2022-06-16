import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductFilter from "./components/ProductFilter";
import GlobalStyle from "./styles/Global";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Hero />
      <ProductFilter />
      <Footer />
    </div>
  );
}

export default App;
