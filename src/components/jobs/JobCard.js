import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../UserContext";
import "../styles/JobCard.css";

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
    <div className="JobCard card my-3">
      <div className="card-body">
        <h1 className="card-title fs-3 my-2 text-capitalize">{title}</h1>
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
        <button
          className="btn btn-info float-end fw-bold"
          onClick={handleApply}
          disabled={applied}
        >
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
}

export default JobCard;
