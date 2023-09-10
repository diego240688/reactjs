import React, { useState, useEffect } from 'react';
import './Item.css';
import ItemDetail from '../ItemDetail/ItemDetail'; 
import { Link } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Importa las funciones de Firestore

const Item = ({ id, titulo, genero, stock, descripcion, precio }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const db = getFirestore();
        const productoDocRef = doc(db, 'productos', id); // Supongamos que 'id' es el ID del producto en Firestore
        const productoDoc = await getDoc(productoDocRef);

        if (productoDoc.exists()) {
          const data = productoDoc.data();
          setProducto(data);
        } else {
          console.log('Producto no encontrado');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    if (showDetail && !producto) {
      fetchProductDetail();
    }
  }, [showDetail, id, producto]);

  const handleShowDetail = () => {
    setShowDetail(true);
  };

  return (
    <article className="item">
      <header>
        <h2>{titulo}</h2>
      </header>
      <section>
        {/* Puedes mostrar otros detalles aquí */}
        <p>Precio: ${precio}</p>
        <p>Stock: {stock}</p>
      </section>
      <footer>
        <button onClick={handleShowDetail}>Ver Detalle</button>
      </footer>
      {showDetail && producto && (
        <ItemDetail
          id={id}
          titulo={producto.titulo}
          genero={producto.genero}
          stock={producto.stock}
          descripcion={producto.descripcion}
          precio={producto.precio}
        />
      )}
    </article>
  );
};

export default Item;
