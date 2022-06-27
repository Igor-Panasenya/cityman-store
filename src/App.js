import React, {createContext} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/CartPage';
import Layout from "./components/Layout";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";

function App() {

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='categories/:title' element={<CategoryPage />} />
                <Route path='categories/:category/:id' element={<ProductPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='basket' element={<CartPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
