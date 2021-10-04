import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({ name, description, logoUrl, handle }) {
  return (
    <Link to={`/companies/${handle}`}>
      <div>
        <h1>
          {name}
          {logoUrl && <img src={logoUrl} alt={name} />}
        </h1>
        <p>
          <small>{description}</small>
        </p>
      </div>
    </Link>
  );
}

export default CompanyCard;
