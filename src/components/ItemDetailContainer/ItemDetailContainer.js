import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { CartContext } from '../context/CartContext';
import { getData } from '../../servicios/firebase'; // Asegúrate de ajustar la ruta correcta

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { categoria, nombre } = useParams();
  const { onAddItem } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productosData = await getData();

        // Encuentra el producto por su nombre y categoría
        const productoEncontrado = productosData.find(
          (prod) => prod.genero === categoria && prod.titulo === nombre
        );

        if (productoEncontrado) {
          setProducto(productoEncontrado);
        } else {
          console.log('Producto no encontrado');
        }
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProduct();
  }, [categoria, nombre]);

  return (
    <div>
      {producto ? (
        <ItemDetail
          id={producto.id}
          titulo={producto.titulo}
          genero={producto.genero}
          stock={producto.stock}
          descripcion={producto.descripcion}
          precio={producto.precio}
        />
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
