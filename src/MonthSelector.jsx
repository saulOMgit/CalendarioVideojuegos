export const MonthSelector = ({startDate,endDate,incrementMonth, decrementMonth,setStartDate,setEndDate}) => {
  
  return (
    <div className="btn-toolbar" role="toolbar">
        <div className="btn-group me-2" role="group">
          <label>Fecha de inicio:</label>
          <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
          <label>Fecha de fin:</label>
          <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
        </div>
        <div className="btn-group " role="group">
          <button className="btn btn-dark" onClick={decrementMonth}>⏪</button>          

          <button className="btn btn-dark" onClick={incrementMonth}>⏩</button>          
        </div>
    </div>
  )
}
