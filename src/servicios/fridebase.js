// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC9I2vb6MrIdxpfMBxnG6NkFooUWQSFOyk",
    authDomain: "react-app-ecomer.firebaseapp.com",
    projectId: "react-app-ecomer",
    storageBucket: "react-app-ecomer.appspot.com",
    messagingSenderId: "522244339357",
    appId: "1:522244339357:web:1e0fa0bcbde2238dc58674",
    measurementId: "G-P8BVKFZQDK"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getData() {
  const productsRef = collection(db, "productos");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map((item) => {
    return { ...item.data(), id: item.id };
  });

  return docsData;
}

export { getData }; // Exporta la función correctamente






