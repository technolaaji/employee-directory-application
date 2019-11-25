import axios from 'axios';
import { useEffect, useState } from 'react';
import { getToken, validity } from '../../util/token';
import EmployeeCard from '../EmployeeCard';
const config = {
    headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
    },
};
const EmployeeLooper = (props: { id: string }) => {
    const [data, setData] = useState({
        _id: '',
        description: '',
        email: '',
        firstName: '',
        jobTitle: '',
        lastName: '',
        picture: '',
    });
    useEffect(() => {
        axios
            .post(
                '/private/employee/id',
                {
                    id: props.id,
                },
                config
            )
            .then(res => {
                setData(res.data.payload);
            });
    }, []);
    return (
        <>
            <EmployeeCard
                firstName={data.firstName}
                lastName={data.lastName}
                image={data.picture}
                description={data.description}
                who={props.id}
                job={data.jobTitle}
                email={data.email}
            />
        </>
    );
};

export default EmployeeLooper;
