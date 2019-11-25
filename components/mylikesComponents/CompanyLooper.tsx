import axios from 'axios';
import { useEffect, useState } from 'react';
import { getToken, validity } from '../../util/token';
import CompanyCard from '../CompanyCard';
const config = {
    headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
    },
};
const CompanyLooper = (props: { id: string }) => {
    const [data, setData] = useState({
        _id: '',
        description: '',
        email: '',
        name: '',
        picture: '',
    });
    useEffect(() => {
        axios
            .post(
                '/private/company/id',
                {
                    id: props.id,
                },
                config
            )
            .then(res => {
                console.log(res.data.payload);
                setData(res.data.payload);
            });
    }, []);
    return (
        <>
            <CompanyCard
                name={data.name}
                image={data.picture}
                description={data.description}
                who={props.id}
                email={data.email}
            />
        </>
    );
};

export default CompanyLooper;
