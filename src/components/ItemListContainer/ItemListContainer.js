import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import {getData} from '../../servicios/fridebase';
import ItemList from '../ItemList/ItemList';
import'../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({ greeting, genre }) => {
  const [Productos, setProductos] = useState([]);

  useEffect(() => {
    getData()
      .then(response => {
        if (genre) {
          const filteredProductos = response.filter(producto => producto.genero === genre);
          setProductos(filteredProductos);
        } else {
          setProductos(response);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [genre]);

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <ItemList Productos={Productos} />
    </div>
  );
};

export default ItemListContainer;


