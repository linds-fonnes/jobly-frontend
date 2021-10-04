import React, { useState, useEffect } from "react";
import JoblyApi from "../../api";
import Loading from "../Loader";
import CompanyCard from "./CompanyCard";
import SearchBar from "../SearchBar";

function Companies() {
  const [companies, setCompanies] = useState(null);

  useEffect(function getCompanies() {
    search();
  }, []);

  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return <Loading />;

  return (
    <div>
      <SearchBar term={search} />
      {companies.length ? (
        <div>
          {companies.map((company) => (
            <CompanyCard
              key={company.handle}
              handle={company.handle}
              name={company.name}
              description={company.description}
              logoUrl={company.logoUrl}
            />
          ))}
        </div>
      ) : (
        <p> No results found </p>
      )}
    </div>
  );
}

export default Companies;
