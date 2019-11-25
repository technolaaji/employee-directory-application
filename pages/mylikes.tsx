import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { mainDiv, mainHeader, likesCont } from '../styles/MyAccountStyle';
import { validity, getToken } from '../util/token';
import EmployeeLooper from '../components/mylikesComponents/EmployeeLooper';
import CompanyLooper from '../components/mylikesComponents/CompanyLooper';

const config = {
    headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
    },
};
const MyLikes = () => {
    const router = useRouter();
    const [searchType, updateType] = useState('');
    const [payload, updatePayload] = useState([]);
    useEffect(() => {
        if (!validity()) {
            router.replace('/');
        }
    });
    useEffect(() => {
        fetchData();
    }, [searchType]);
    const valueChanger = (e: any) => {
        updateType(e.target.value);
        updatePayload([]);
    };
    const fetchData = () => {
        axios
            .post(
                '/private/like/type',
                {
                    type: searchType,
                },
                config
            )
            .then(res => {
                updatePayload(res.data.payload);
            });
    };
    return (
        <Layout>
            <div className="container">
                <div className={mainDiv}>
                    <h1 className={mainHeader}>My Likes 😍</h1>
                    <div>
                        <select
                            onChange={valueChanger}
                            className="custom-select"
                            id="inlineFormCustomSelect"
                        >
                            <option value="none">Select</option>
                            <option value="employee">Employee</option>
                            <option value="company">Company</option>
                        </select>
                    </div>
                    <div className="card-columns mt-5">
                        {payload.map((item: any) => {
                            if (searchType === 'employee') {
                                return <EmployeeLooper id={item.who} />;
                            } else if (searchType === 'company') {
                                return <CompanyLooper id={item.who} />;
                            }
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MyLikes;
