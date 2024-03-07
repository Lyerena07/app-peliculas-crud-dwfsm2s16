import {db} from "../firebase/firebase";
import{collection,addDoc} from "firebase/firestore";

const PeliculasPage = () => {
 
    const crearPelicula = () =>{
     const pelicula ={
     nombre: "LoveRossi",
     categoria: "Amor",
     imagen:"https://m.media-amazon.com/images/S/pv-target-images/af0dabe5b09a46d8351b13c104ba9f414c8ebb9cdfc1c86e07d5cc372dae0d06.jpg"
     };

     const tabla = collection(db,"peliculas");
     addDoc(tabla,pelicula)

    };

  return (
    <>
    <button type="button" className="btn btn-success" onClick={crearPelicula}>Crear pelicula</button >
    </>
  )
}

export default PeliculasPage;