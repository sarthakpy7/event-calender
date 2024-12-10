// src/components/EventModal.jsx
import React, { useState } from "react";

const EventModal = ({ date, onSave, onClose, events }) => {
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("personal");

  const handleSave = () => {
    if (!eventName || !startTime || !endTime) {
      alert("Please fill all required fields!");
      return;
    }

    const newEvent = {
      id: Date.now(),
      name: eventName,
      date: date.toISOString().split("T")[0],
      startTime,
      endTime,
      description,
      category,
    };

    onSave(newEvent);
    onClose();
  };

  return (
    <div className="modal">
      <h2>Add Event for {date.toDateString()}</h2>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <input
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="other">Other</option>
      </select>
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EventModal;
