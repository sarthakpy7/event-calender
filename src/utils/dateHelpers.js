// src/utils/dateHelpers.js
export const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) days.push(null); // Empty days
    for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
  
    return days;
  };
  
  export const isToday = (date) => {
    const today = new Date();
    return (
      date &&
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };
  
  export const formatDate = (date) => {
    if (!date) return "";
    return date.toISOString().split("T")[0];
  };
  