import Hero from "./components/Hero";
import ProductFilter from "./components/ProductFilter";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Announce from "./Pages/Announce";
import Shopping from "./Pages/Shopping";
import Layout from "./components/Layout";


function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/announce" element={<Announce/>}/>
            <Route path="/shopping" element={<Shopping/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes> 
    </BrowserRouter>
  );
}

export default App;

/*<Hero />
          <ProductFilter /> */