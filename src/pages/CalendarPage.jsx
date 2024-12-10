// src/pages/CalendarPage.jsx
import React, { useState } from "react";
import CalendarGrid from "../components/CalendarGrid";
import EventModal from "../components/EventModal";
import EventList from "../components/EventList";
import { useLocalStorage } from "../hooks/useLocalStorage";
import ExportButton from "../components/ExportButton";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useLocalStorage("events", []);

  const handleDayClick = (date) => setSelectedDate(date);

  const handleSaveEvent = (event) => setEvents([...events, event]);

  const handleDeleteEvent = (id) =>
    setEvents(events.filter((event) => event.id !== id));

  return (
    <div>
      <h1>Event Calendar</h1>
      <CalendarGrid
        currentDate={currentDate}
        onDayClick={handleDayClick}
        selectedDate={selectedDate}
      />
      {selectedDate && (
        <EventModal
          date={selectedDate}
          onSave={handleSaveEvent}
          onClose={() => setSelectedDate(null)}
        />
      )}
      <EventList
        events={events.filter(
          (event) => event.date === selectedDate?.toISOString().split("T")[0]
        )}
        onDelete={handleDeleteEvent}
      />
      <ExportButton events={events} />
    </div>
  );
};

export default CalendarPage;
