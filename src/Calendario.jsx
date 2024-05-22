import { useEffect, useState } from 'react';
import { getDates } from './helpers/getDates';
import { Game } from './Game';
import { MonthSelector } from './MonthSelector';

export const Calendario = () => {

  const [firstDay,lastDay]=getDates();

  // const [gamesData, setGamesData] = useState(null);
  const [startDate, setStartDate] = useState(firstDay);
  const [endDate, setEndDate] = useState(lastDay);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let allResults = [];
  //       let nextPage = `https://api.rawg.io/api/games?key=67be245b46da47f08f089bff10459252&dates=${startDate},${endDate}&ordering=released`;
  
  //       // Loop para obtener todas las páginas de resultados
  //       while (nextPage) {
  //         const response = await fetch(nextPage);
  //         if (!response.ok) {
  //           throw new Error('Error al realizar la solicitud a la API: ' + response.status);
  //         }
  //         const { results, next } = await response.json();
  //         allResults = [...allResults, ...results];
  //         nextPage = next;
  //       }
  
  //       // Filtrar juegos con added mayor que 0
  //       const filteredGamesData = allResults.filter(game => game.added > 0);
  
  //       setGamesData(filteredGamesData);
  //       console.log(`Número total de resultados: ${filteredGamesData.length}`);
  //     } catch (error) {
  //       console.error('Hubo un problema con la solicitud:', error);
  //     }
  //   };
  
  //   fetchData();
  // }, [startDate, endDate]);
  

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

  return (
    <div className='container dark-mode'>
      <h1>Juegos</h1>
      <MonthSelector 
          startDate={startDate} 
          endDate={endDate} 
          incrementMonth={incrementMonth} 
          handleDateChange={handleDateChange} 
          setStartDate={setStartDate} 
          setEndDate={setEndDate}
      />
       
        <Game/>
       {/* {gamesData ? (   
        <Game gamesData={gamesData} />
        ): (
          <p>Cargando...</p>
        )} */}
    </div>
  );
};
