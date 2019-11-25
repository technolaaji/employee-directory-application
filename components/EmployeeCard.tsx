import { likeIcon } from '../styles/SearchStyle';
import LikeButton from './LikeButton';
const EmployeeCard = (props: {
    firstName?: string;
    lastName?: string;
    description?: string;
    image?: string;
    who?: string;
}) => (
    <div className="card">
        <div className={likeIcon}>
            <LikeButton who={props.who} type="employee" />
        </div>
        <img
            src={props.image}
            className="card-img-top"
            alt="..."
            style={{ maxHeight: '200px' }}
        />
        <div className="card-body">
            <h5 className="card-title">
                {props.firstName} {props.lastName}
            </h5>
            <p className="card-text">{props.description}</p>
            <button className="btn btn-primary">More Details</button>
        </div>
    </div>
);

export default EmployeeCard;
