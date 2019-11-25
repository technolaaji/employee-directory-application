import fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { mainCont } from '../styles/SearchStyle';
import EmployeeCard from './EmployeeCard';

const SearchSection = () => {
    const [searchType, updateType] = useState('employee');
    const [payload, payloadUpdater] = useState([]);
    const [searchValue, updateSearch] = useState('');
    const valueChanger = (e: any) => {
        updateType(e.target.value);
    };
    const searchChanger = (e: any) => {
        updateSearch(e.target.value);
    };
    const searchFetcher = async (e: any) => {
        e.preventDefault();
        if (searchType === 'employee') {
            const res = await fetch('/public/employee/search', {
                body: JSON.stringify({ search: searchValue }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                mode: 'cors',
            });
            const data = await res.json();
            payloadUpdater(data);
        } else {
            const res = await fetch('/public/company/search', {
                body: JSON.stringify({ search: searchValue }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                mode: 'cors',
            });
            const data = await res.json();
            payloadUpdater(data);
        }
    };
    return (
        <>
            <Container className={mainCont}>
                <h1 className="my-2">
                    search for the best {searchType}{' '}
                    {searchType === 'employee' ? '👷‍♂️' : '🏗️'}
                </h1>
                <form onSubmit={searchFetcher}>
                    <div className="form-row align-items-center">
                        <div className="col-sm-9 my-5">
                            <input
                                type="text"
                                className="form-control"
                                id="inlineFormInputName"
                                placeholder=""
                                value={searchValue}
                                onChange={searchChanger}
                            />
                        </div>
                        <select
                            onChange={valueChanger}
                            className="custom-select col-sm-2"
                            id="inlineFormCustomSelect"
                        >
                            <option value="employee">Employee</option>
                            <option value="company">Company</option>
                        </select>
                        <div className="col-auto my-1">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </Container>
            <Container className="my-2">
                <div className="card-columns">
                    {payload !== null &&
                        payload.map((item: any, index: number) => {
                            return (
                                <EmployeeCard
                                    key={index}
                                    firstName={item.firstName}
                                    lastName={item.lastName}
                                    image={item.picture}
                                    description={item.description}
                                    who={item._id}
                                />
                            );
                        })}
                </div>
            </Container>
        </>
    );
};

export default SearchSection;
