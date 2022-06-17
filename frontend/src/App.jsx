import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductFilter from "./components/ProductFilter";
import GlobalStyle from "./styles/Global";
import {BrowserRouter, Outlet, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Announce from "./Pages/Announce";
import Shopping from "./Pages/Shopping";
import Layout from "./components/Layout";


function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/Products" element={<Products/>}/>
            <Route path="/Announce" element={<Announce/>}/>
            <Route path="/Shopping" element={<Shopping/>}/>
          </Route>
        </Routes> 
    </BrowserRouter>
  );
}

export default App;

/*<Hero />
          <ProductFilter /> */