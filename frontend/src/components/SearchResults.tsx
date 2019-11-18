import React from 'react';
import { searchDiv } from '../styles/searchResultsStyle';
import CompanyCard from './CompanyCard';
import EmployeeCard from './EmployeeCard';

export default function SearchResults(props: {
    status: string;
    data: Array<any>;
}) {
    return (
        <div className={searchDiv}>
            {props.status === 'company'
                ? props.data.map(item => {
                      return (
                          <CompanyCard
                              key={item._id}
                              name={item.name}
                              location={item.location}
                              country={item.country}
                              phone={item.phone}
                          />
                      );
                  })
                : props.data.map(item => {
                      return (
                          <EmployeeCard
                              key={item._id}
                              first={item.firstName}
                              middle={item.middleName}
                              last={item.lastName}
                              location={item.location}
                              job={item.jobTitle}
                              image={item.picture}
                          />
                      );
                  })}
        </div>
    );
}
