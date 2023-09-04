import React from "react";
import { useState } from "react";

function TimeFunc() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div className="col mb-3">
        <select
          value={selectedOption}
          name="time"
          id="time"
          className="form-select"
          onChange={handleOptionChange}
        >
          <option defaultValue>Select Time</option>
          <option value="none">None</option>
          <option value="local-time">Local Time</option>
          <option value="activity-time">
            Time Until Custom Status Are Set
          </option>
          <option value="custom-time" id="cts">
            Custom Time
          </option>
        </select>
      </div>
      {selectedOption === "custom-time" && (
        <div className="col">
          <input
            type="date"
            className="form-control"
            name="custom-time"
            id="custom-time"
          />
        </div>
      )}
    </>
  );
}

export default TimeFunc;
