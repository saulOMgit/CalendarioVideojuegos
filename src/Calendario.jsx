import { useEffect, useState } from 'react'

export const Calendario = () => {
  const [gamesData, setGamesData] = useState(null);
  const [startDate, setStartDate] = useState('2004-03-01');
  const [endDate, setEndDate] = useState('2024-03-31');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games?key=67be245b46da47f08f089bff10459252&dates=${startDate},${endDate}`);
        if (!response.ok) {
          throw new Error('Error al realizar la solicitud a la API: ' + response.status);
        }
        const {results} = await response.json();
        setGamesData(results);
        // console.log(`N:${data.count}`);
      } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
      }
    };

    fetchData();
  }, [startDate, endDate]);



  // Handler para actualizar las fechas de inicio y fin
  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  // Handler para aumentar el mes
  const incrementMonth = () => {
    const newStartDate = new Date(startDate);
    const newEndDate = new Date(endDate);
    newStartDate.setMonth(newStartDate.getMonth() + 1);
    newEndDate.setMonth(newEndDate.getMonth() + 1);
    setStartDate(newStartDate.toISOString().slice(0, 10));
    setEndDate(newEndDate.toISOString().slice(0, 10));
  };

  // Mostrar los juegos filtrados
  // const filteredGames = filterGamesByDateRange(startDate, endDate);

  return (
    <div>
      <h1>Juegos</h1>
      <div>
        <label>Fecha de inicio:</label>
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        <label>Fecha de fin:</label>
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
        <button onClick={() => handleDateChange(startDate, endDate)}>Actualizar búsqueda</button>
        <button onClick={incrementMonth}>Incrementar mes</button>
      </div>
      {gamesData ? (
        <ul>
          {/* Mapear los juegos filtrados y mostrarlos */}
          {gamesData.map(game => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}