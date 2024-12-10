// src/components/CalendarGrid.jsx
import React from "react";
import { getDaysInMonth, isToday } from "../utils/dateHelpers";

const CalendarGrid = ({ currentDate, onDayClick, selectedDate }) => {
  const days = getDaysInMonth(currentDate);

  return (
    <div>
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-bold">{day}</div>
        ))}
        {days.map((day, index) => (
          <div
            key={index}
            className={`p-2 border text-center cursor-pointer ${
              isToday(day) ? "bg-blue-300" : ""
            } ${day?.toDateString() === selectedDate?.toDateString() ? "bg-green-300" : ""}`}
            onClick={() => onDayClick(day)}
          >
            {day ? day.getDate() : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
