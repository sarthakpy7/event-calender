// src/components/ExportButton.jsx
import React from "react";

const ExportButton = ({ events }) => {
  const handleExport = () => {
    const blob = new Blob([JSON.stringify(events, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "events.json";
    link.click();
  };

  return <button onClick={handleExport}>Export Events</button>;
};

export default ExportButton;
