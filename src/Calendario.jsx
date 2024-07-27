import { useState } from 'react';
import { getDates } from './helpers/getDates';
import { Game } from './Game';
import { MonthSelector } from './MonthSelector';

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


  return (
    <div className='container dark-mode'>
      <h1>Juegos</h1>
      <MonthSelector
        startDate={startDate}
        endDate={endDate}
        incrementMonth={incrementMonth}
        decrementMonth={decrementMonth}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <Game startDate={startDate} endDate={endDate} />
    </div>
  );
};
