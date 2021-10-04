import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../../api";
import Loading from "../Loader";
import JobCardList from "../jobs/JobCardList";

function CompanyDetails() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(
    function () {
      async function getCompany() {
        setCompany(await JoblyApi.getCompany(handle));
      }

      getCompany();
    },
    [handle]
  );

  if (!company) return <Loading />;

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetails;
