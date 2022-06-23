import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Announce from './pages/Announce';
import Shopping from './pages/Shopping';
import Error from './pages/Error';
import Layout from './components/Layout';
import Search from './pages/Search';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<Home />} />
               <Route path='/products' element={<Products />} />
               <Route path='/announce' element={<Announce />} />
               <Route path='/shopping' element={<Shopping />} />
               <Route path='/search' element={<Search />} />
               <Route path='*' element={<Error />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;

/*<Hero />
          <ProductFilter /> */
