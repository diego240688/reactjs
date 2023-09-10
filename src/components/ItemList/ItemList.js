import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css'; 

const ItemList = ({ Productos }) => {
  return (
    <div className="item-list">
      {Productos && Productos.map(producto => (
        <div key={producto.id} className="item">
          <h3>{producto.titulo}</h3>
          <Link to={`/detalle/${producto.genero}/${normalizeNombre(producto.titulo)}`}>
            <button>Ver Detalle</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

const normalizeNombre = (nombre) => {
  return nombre.toLowerCase().replace(/ /g, '-');
};

export default ItemList;


