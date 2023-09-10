const Productos = [
  {
    id: 1,
    titulo: "El nombre del viento",
    imagenes: "imagen1.jpg",
    precio: 20.99,
    descripcion: "Una novela épica de fantasía escrita por Patrick Rothfuss.",
    genero: "Fantasía",
    stock: 10,
  },
  {
    id: 2,
    titulo: "Cien años de soledad",
    imagenes: "imagen2.jpg",
    precio: 18.50,
    descripcion: "Obra maestra del realismo mágico escrita por Gabriel García Márquez.",
    genero: "Novela",
    stock: 5,
  },
  {
    id: 3,
    titulo: "1984",
    imagenes: "imagen3.jpg",
    precio: 15.75,
    descripcion: "Una novela distópica escrita por George Orwell.",
    genero: "Ciencia Ficción",
    stock: 15,
  },
  {
    id: 4,
    titulo: "Orgullo y prejuicio",
    imagenes: "imagen4.jpg",
    precio: 12.99,
    descripcion: "Clásico de la literatura inglesa escrito por Jane Austen.",
    genero: "Novela",
    stock: 7,
  },
  {
    id: 5,
    titulo: "El hobbit",
    imagenes: "imagen5.jpg",
    precio: 22.00,
    descripcion: "Una novela de fantasía escrita por J.R.R. Tolkien.",
    genero: "Fantasía",
    stock: 12,
  },
  {
    id: 6,
    titulo: "Don Quijote de la Mancha",
    imagenes: "imagen6.jpg",
    precio: 17.80,
    descripcion: "Obra cumbre de la literatura española escrita por Miguel de Cervantes.",
    genero: "Novela",
    stock: 9,
  },
  {
    id: 7,
    titulo: "Harry Potter y la piedra filosofal",
    imagenes: "imagen7.jpg",
    precio: 19.95,
    descripcion: "El primer libro de la famosa saga escrita por J.K. Rowling.",
    genero: "Fantasía",
    stock: 14,
  },
  {
    id: 8,
    titulo: "Matar a un ruiseñor",
    imagenes: "imagen8.jpg",
    precio: 16.25,
    descripcion: "Una novela clásica de Harper Lee que aborda temas de justicia y racismo.",
    genero: "Novela",
    stock: 6,
  },
  {
    id: 9,
    titulo: "Las aventuras de Tom Sawyer",
    imagenes: "imagen9.jpg",
    precio: 14.50,
    descripcion: "Novela de aventuras escrita por Mark Twain.",
    genero: "Novela",
    stock: 11,
  },
  {
    id: 10,
    titulo: "Los pilares de la Tierra",
    imagenes: "imagen10.jpg",
    precio: 21.75,
    descripcion: "Épica historia escrita por Ken Follett que se desarrolla en la Edad Media.",
    genero: "Novela",
    stock: 8,
  },
];

export const getProductoid = (productoid) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Productos.find(prod => prod.id === parseInt(productoid)));
    }, 500);
  });
};

const normalizeNombre = (nombre) => {
  return nombre.toLowerCase().replace(/ /g, '-');
};

export const getProductByCategoriaNombre = (categoria, nombre) => {
  const nombreNormalizado = normalizeNombre(nombre);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Productos.find(prod => prod.genero === categoria && normalizeNombre(prod.titulo) === nombreNormalizado));
    }, 500);
  });
};

export const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Productos);
    }, 1000);
  });
};

export default Productos;
