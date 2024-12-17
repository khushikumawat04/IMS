import React, { useState, useEffect } from 'react';

const CalendarTable = () => {
  const [monthData, setMonthData] = useState([]);

  useEffect(() => {
    const generateMonthData = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth();

      const firstDayOfMonth = new Date(year, month, 1);
      const lastDayOfMonth = new Date(year, month + 1, 0);

      const dates = [];

      for (let date = new Date(firstDayOfMonth); date <= lastDayOfMonth; date.setDate(date.getDate() + 1)) {
        dates.push(new Date(date));
      }

      return dates;
    };

    const dates = generateMonthData();
    setMonthData(dates);
  }, []);

  return (
    <div>
      <h2>Calendar for Current Month</h2>
      <table className='tabledata'>
        <thead className='thead-dark'>
          <tr>
            {monthData.map((date, index) => (
              <th key={index} scope='col'>
                {date.toLocaleDateString()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {monthData.map((date, index) => (
              <td key={index}>{date.getDate()}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalendarTable;
