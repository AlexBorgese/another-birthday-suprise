import React from 'react';

export default ({ startTime, endTime }) => (
    <div className="time-display">
        <p>Start Date!:</p>
        <p>{ startTime.toString() || 'pick a date!' }</p>
        <p>End Date!:</p>
        <p>{ endTime.toString() }</p>
    </div>
);
