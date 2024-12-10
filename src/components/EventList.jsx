// src/components/EventList.jsx
import React from "react";

const EventList = ({ events, onDelete }) => {
  return (
    <div>
      <h3>Events:</h3>
      {events.length === 0 ? (
        <p>No events scheduled for this day.</p>
      ) : (
        events.map((event) => (
          <div key={event.id} className="event-item">
            <p>
              <strong>{event.name}</strong> ({event.startTime} - {event.endTime})
            </p>
            <p>{event.description}</p>
            <button onClick={() => onDelete(event.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default EventList;
