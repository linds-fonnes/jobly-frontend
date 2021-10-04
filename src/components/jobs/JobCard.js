import React, { useState } from "react";

function JobCard({ id, title, salary, equity, companyName }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{companyName}</p>
        {salary && (
          <p>
            <small>Salary: {salary}</small>
          </p>
        )}
        {equity && (
          <p>
            <small>Equity: {equity}</small>
          </p>
        )}
      </div>
    </div>
  );
}

export default JobCard;
