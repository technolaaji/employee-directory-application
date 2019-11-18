import React from "react";
import {
  cardDiv,
  headerSection,
  subTextSection
} from "../styles/companyCardStyle";

export default function CompanyCard(props: {
  name: string;
  location: string;
  country: string;
  phone: string;
}) {
  return (
    <div className={cardDiv}>
      <h1 className={headerSection}>{props.name}</h1>
      <p className={subTextSection}>{props.location}</p>
      <p className={subTextSection}>{props.country}</p>
      <p className={subTextSection}>{props.phone}</p>
    </div>
  );
}
