import React, { useState } from 'react';

export const MonthSelector = ({ startDate, endDate, incrementMonth, decrementMonth, setStartDate, setEndDate }) => {
  const [showDateSelectors, setShowDateSelectors] = useState(false);

  return (
    <div className="btn-toolbar mb-3" role="toolbar">
      <div className="btn-group me-2" role="group">
        <button 
          className="btn btn-dark ms-2" 
          onClick={() => setShowDateSelectors(!showDateSelectors)}
        >
          {showDateSelectors ? "Ocultar Fechas" : "Mostrar Fechas"}
        </button>
      </div>

      {showDateSelectors && (
        <div className="btn-group me-2" role="group">
          <label>Fecha de inicio:</label>
          <input 
            type="date" 
            value={startDate} 
            onChange={e => setStartDate(e.target.value)} 
          />
          <label>Fecha de fin:</label>
          <input 
            type="date" 
            value={endDate} 
            onChange={e => setEndDate(e.target.value)} 
          />
        </div>
      )}

      <div className="btn-group " role="group">
        <button className="btn btn-dark ms-2" onClick={decrementMonth}>⏪</button>          
        <button className="btn btn-dark ms-2" onClick={incrementMonth}>⏩</button>          
      </div>
    </div>
  );
};
