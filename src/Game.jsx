import React, { useEffect, useState } from "react";
import { FirebaseDb } from "./firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const Game = ({  }) => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      console.log("Fetching games..."); // Log inicial
      try {
        // Obtener una referencia a la colección principal "juego"
        const mainCollectionRef = collection(FirebaseDb, "juegos");
        
        // Obtener los documentos de la colección principal
        const querySnapshot = await getDocs(mainCollectionRef);
        const gamesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("Games fetched: ", gamesList); // Log después de obtener los documentos
        setJuegos(gamesList);
      } catch (error) {
        console.error("Error fetching games: ", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <>
      {juegos.length > 0 ? (
        <div className="App dark-mode">
          {juegos.map(juego => (
            <div className="card mt-3" key={juego.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={juego.background_image} alt={juego.name} className="img-fluid rounded-start full-height-image" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{juego.titulo}</h5>
                    <p className="card-text">
                      <small className="text-muted">
                        <i className="bi bi-microsoft"></i> <i className="bi bi-playstation"></i>
                      </small>
                    </p>
                    <p className="card-text">{juego.descripcion}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};
