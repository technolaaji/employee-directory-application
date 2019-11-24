import fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { mainCont } from '../styles/SearchStyle';

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
                            <option selected value="employee">
                                Employee
                            </option>
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
                    {/* <div className="card">
                        <img
                            src="https://picsum.photos/200/300"
                            className="card-img-top"
                            alt="..."
                            style={{ maxHeight: '200px' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </p>
                            <p className="card-text">
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </p>
                        </div>
                    </div> */}
                </div>
            </Container>
        </>
    );
};

export default SearchSection;
