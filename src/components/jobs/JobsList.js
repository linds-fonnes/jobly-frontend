import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import JoblyApi from "../../api";
import Loading from "../Loader";
import JobCardList from "./JobCardList";
import "../styles/JobsList.css";

function JobsList() {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    search();
  }, []);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) return <Loading />;

  return (
    <div className="JobsList col-md-8">
      <SearchBar term={search} />
      {jobs.length ? <JobCardList jobs={jobs} /> : <p>No results found</p>}
    </div>
  );
}

export default JobsList;
