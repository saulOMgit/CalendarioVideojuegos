import React, { useEffect, useState } from "react";
import { FirebaseDb } from "./firebase/config";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { format, setDefaultOptions, startOfDay, endOfDay } from "date-fns";
import es from 'date-fns/locale/es';

export const Game = ({ startDate, endDate }) => {
  const [juegos, setJuegos] = useState([]);
  setDefaultOptions({ locale: es });

  useEffect(() => {
    const fetchGames = async () => {
      console.log("Fetching games..."); // Log inicial
      try {
        // Convertir startDate y endDate a objetos Date y ajustar la hora
        const start = startOfDay(new Date(startDate));
        const end = endOfDay(new Date(endDate));

        // Obtener una referencia a la colección principal "juegos"
        const mainCollectionRef = collection(FirebaseDb, "juegos");

        // Crear una consulta para filtrar los documentos por fecha
        const q = query(
          mainCollectionRef,
          where("fecha", ">=", start),
          where("fecha", "<=", end),
          orderBy("fecha")
        );

        // Obtener los documentos de la colección principal
        const querySnapshot = await getDocs(q);
        const gamesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("Games fetched: ", gamesList); // Log después de obtener los documentos
        setJuegos(gamesList);
      } catch (error) {
        console.error("Error fetching games: ", error);
      }
    };

    fetchGames();
  }, [startDate, endDate]); // Re-fetch when startDate or endDate changes

  return (
    <>
      {juegos.length > 0 ? (
        <div className="App dark-mode">
          {juegos.map((juego, index) => {
            const fechaActual = format(juego.fecha.toDate(),"d 'de' MMMM yyyy");
            const fechaAnterior = index > 0 ? format(juegos[index - 1].fecha.toDate(),"d 'de' MMMM yyyy") : null;
            const mostrarFecha = fechaActual !== fechaAnterior;

            return (
              <React.Fragment key={juego.id}>
                {mostrarFecha && <h2>{fechaActual}</h2>}
                <div className="card mt-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={`${juego.imagen}.jpg`} alt={juego.name} className="img-fluid rounded-start full-height-image" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{juego.titulo}</h5>
                        <p className="card-text">
                          <small className="text-muted">
                            {Array.isArray(juego.plataformas) && juego.plataformas.includes("microsoft") && <i className="bi bi-microsoft"></i>}
                            {Array.isArray(juego.plataformas) && juego.plataformas.includes("playstation") && <i className="bi bi-playstation"></i>}
                            {Array.isArray(juego.plataformas) && juego.plataformas.includes("switch") && <i className="bi bi-nintendo-switch"></i>}
                            {Array.isArray(juego.plataformas) && juego.plataformas.includes("xbox") && <i className="bi bi-xbox"></i>}
                          </small>
                        </p>
                        <p className="card-text">{juego.descripcion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};
