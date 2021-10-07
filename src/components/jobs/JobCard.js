import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../UserContext";

function JobCard({ id, title, salary, equity, companyName }) {
  const { appliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  useEffect(() => {
    setApplied(appliedToJob(id));
  }, [id, appliedToJob]);

  async function handleApply(evt) {
    if (appliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

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
        <button onClick={handleApply} disabled={applied}>
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
}

export default JobCard;
