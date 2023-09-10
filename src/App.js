import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/context/CartContext';
import CartPage from './components/CartWidget/CartPage'; 




const App = () => {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos!" />} />
          <Route path="/novela" element={<ItemListContainer greeting="Novelas" genre="Novela" />} />
          <Route path="/ciencia-ficcion" element={<ItemListContainer greeting="Ciencia Ficción" genre="Ciencia Ficción" />} />
          <Route path="/fantasia" element={<ItemListContainer greeting="Fantasía" genre="Fantasía" />} />
          <Route path="/detalle/:categoria/:nombre" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartPage />} />
         


        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
