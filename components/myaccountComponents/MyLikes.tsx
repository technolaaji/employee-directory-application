import { useRouter } from 'next/router';

const MyLikes = () => {
    const router = useRouter();

    const routeToMyLikes = () => {
        router.replace('/mylikes');
    };
    return (
        <div className="card" onClick={routeToMyLikes}>
            <div className="card-body">
                <h5 className="card-title">My Likes 😍</h5>
            </div>
        </div>
    );
};

export default MyLikes;
