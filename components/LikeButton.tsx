import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { getToken, validity } from '../util/token';
const config = {
    headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
    },
};
const LikeButton = (props: any) => {
    const alert = useAlert();
    const router = useRouter();
    const [status, updateStatus] = useState(false);
    const likeThat = () => {
        if (validity()) {
            if (status) {
                axios
                    .post(
                        '/private/like/unlike',
                        {
                            type: props.type,
                            who: props.who,
                        },
                        config
                    )
                    .then(() => {
                        updateStatus(false);
                    });
            } else {
                axios
                    .post(
                        '/private/like/like',
                        {
                            type: props.type,
                            who: props.who,
                        },
                        config
                    )
                    .then(() => {
                        updateStatus(true);
                    });
            }
        } else {
            router.replace('/login');
        }
    };
    useEffect(() => {
        if (validity()) {
            axios
                .post(
                    '/private/like/check',
                    {
                        type: props.type,
                        who: props.who,
                    },
                    config
                )
                .then(res => {
                    updateStatus(res.data.status);
                });
        }
    }, []);
    return (
        <>
            {status ? (
                <i
                    onClick={likeThat}
                    style={{ color: 'red', fontSize: 20 }}
                    className="fas fa-heart"
                ></i>
            ) : (
                <i
                    onClick={likeThat}
                    style={{ color: 'white', fontSize: 20 }}
                    className="far fa-heart"
                ></i>
            )}
        </>
    );
};

export default LikeButton;
