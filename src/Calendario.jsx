import { useState } from 'react';
import { getDates } from './helpers/getDates';
import { Game } from './Game';
import { MonthSelector } from './MonthSelector';
import { Footer } from './Footer';

export const Calendario = () => {
  const [firstDay, lastDay] = getDates();
  const [startDate, setStartDate] = useState(firstDay);
  const [endDate, setEndDate] = useState(lastDay);

  // Handler para aumentar el mes
  const incrementMonth = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setMonth(newStartDate.getMonth() + 1);
    newStartDate.setDate(1); // Primer día del mes
    
    const newEndDate = new Date(newStartDate);
    newEndDate.setMonth(newEndDate.getMonth() + 1);
    newEndDate.setDate(0); // Último día del mes anterior
    
    setStartDate(newStartDate.toISOString().slice(0, 10));
    setEndDate(newEndDate.toISOString().slice(0, 10));
  };

  // Handler para disminuir el mes
  const decrementMonth = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setMonth(newStartDate.getMonth() - 1);
    newStartDate.setDate(1); // Primer día del mes
    
    const newEndDate = new Date(newStartDate);
    newEndDate.setMonth(newEndDate.getMonth() + 1);
    newEndDate.setDate(0); // Último día del mes anterior
    
    setStartDate(newStartDate.toISOString().slice(0, 10));
    setEndDate(newEndDate.toISOString().slice(0, 10));
  };

  // Función para capitalizar la primera letra de una cadena
  const primeraLetraMayus = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Obtener nombre del mes y año
  const mesFormateado = primeraLetraMayus(new Date(startDate).toLocaleString('es-ES', { month: 'long' }));
  const anyoFormateado = new Date(startDate).getFullYear();


  return (
    <div className='container dark-mode'>
      <h1>Lanzamiento Juegos - {mesFormateado} {anyoFormateado}</h1>
      <MonthSelector
        startDate={startDate}
        endDate={endDate}
        incrementMonth={incrementMonth}
        decrementMonth={decrementMonth}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <Game startDate={startDate} endDate={endDate} />
      <Footer/>
    </div>
  );
};
