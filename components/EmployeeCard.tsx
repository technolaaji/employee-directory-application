import { likeIcon } from '../styles/SearchStyle';
const EmployeeCard = (props: {
    firstName?: string;
    lastName?: string;
    description?: string;
    image?: string;
}) => (
    <div className="card">
        <div className={likeIcon}>
            <i className="fa fa-heart"></i>
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
