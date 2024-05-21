import { useEffect, useState } from "react";

export const Game = ({ gamesData }) => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    // Limpiar el estado juegos al cambiar los datos del juego
    setJuegos([]);
    
    const juegosFiltrados = async () => {
      const juegosObtenidos = [];
      for (let game of gamesData) {
        let juegoConcreto = `https://api.rawg.io/api/games/${game.id}?key=67be245b46da47f08f089bff10459252`;
        const response = await fetch(juegoConcreto);
        if (!response.ok) {
          throw new Error('Error al realizar la solicitud a la API: ' + response.status);
        }
        const data = await response.json();
        console.log('popo', data.name); // Suponiendo que 'name' es una propiedad válida en la respuesta JSON
        juegosObtenidos.push(data);
      }
      // Agregar los juegos obtenidos al estado
      setJuegos(juegos => [...juegos, ...juegosObtenidos]);
    };

    // Llamar a la función que realiza la solicitud
    juegosFiltrados();
  }, [gamesData]); // Se ejecutará cada vez que cambien los datos del juego

  console.log(juegos);


  return (
    <>
      {juegos ? (
        <div className="App dark-mode">
        {/* components card horizontal */}
        {juegos.map(juego => (
          <div className="card mt-3" key={juego.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={juego.background_image} alt={juego.name} className="img-fluid rounded-start full-height-image"/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{juego.name}</h5>
                  <p className="card-text"><small className="text-muted"><i class="bi bi-microsoft"></i> <i className="bi bi-playstation"></i></small></p>

                  <p className="card-text">{juego.description}</p>
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
  )
}


//prueba

//   return (
//     <>
//       {juegos ? (
//         <div>
//           {juegos.map(juego => (
//             <div key={juego.id} className="card">
//               <img src={juego.background_image} alt={juego.name} className="card-img-top" />
//               <div className="card-body">
//                 <h5 className="card-title">{juego.name}</h5>
//                 <p className="card-text">{juego.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Cargando...</p>
//       )}
//     </>
//   )
// }


