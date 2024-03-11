import {db} from "../firebase/firebase";
import{collection,addDoc, getDocs,doc,getDoc,updateDoc,deleteDoc} from "firebase/firestore";

const PeliculasPage = () => {
 
    const crearPelicula =  async() =>{
      const pelicula ={
     nombre: "Bambi",
     categoria: "Animada",
     imagen:"https://getwallpapers.com/wallpaper/full/b/d/7/761596-bambi-wallpaper-1920x1080-photos.jpg"
     };

     const tabla = collection(db,"peliculas");
      await addDoc(tabla,pelicula)
      await obtenerPeliculas();

    };

    const obtenerPeliculas = async () => {
      const resp = await getDocs(collection(db, "peliculas"));
      const peliculas = resp.docs.map((pelicula) => {
        return {
          id: pelicula.id,
          ...pelicula.data(),
        };
      });

      console.log(peliculas);
};

const obtenerPelicula = async () =>{
const documento = doc(db,"peliculas", "8uDZPsYmYu1yNLXDXp6u");
const resp = await getDoc(documento);
const pelicula = {

  id: resp.id,
  ...resp.data(),
}
console.log(pelicula);
};

const actualizarPelicula = async () => {
  const pelicula = {
    nombre: "Bambi 2",
    categoria: "Animada",
    imagen:"https://getwallpapers.com/wallpaper/full/b/d/7/761596-bambi-wallpaper-1920x1080-photos.jpg",
  };

  const documento = doc(db, "peliculas", "8uDZPsYmYu1yNLXDXp6u");
  await updateDoc(documento, pelicula);
  await obtenerPelicula();
};

const eliminarPelicula = async () => {
  const documento = doc(db, "peliculas", "8uDZPsYmYu1yNLXDXp6u");
  await deleteDoc(documento);
  await obtenerPeliculas();
};
  return (
    <>
    <button type="button" className="btn btn-success" onClick={crearPelicula}
    >Crear pelicula</button >
    <button type="button" className="btn btn-info" onClick={obtenerPeliculas}
    >Obtener peliculas</button >
    <button type="button" className="btn btn-secondary" onClick={obtenerPelicula}
    >Obtener pelicula</button >
    <button type="button" className="btn btn-warning" onClick={actualizarPelicula}
    >Actualizar pelicula</button >
     <button type="button" className="btn btn-danger"onClick={eliminarPelicula}
    >Eliminar Pelicula </button>
    </>
  )
};

export default PeliculasPage;