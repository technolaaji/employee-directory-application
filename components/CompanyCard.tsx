import axios from 'axios';
import { useState } from 'react';
import { useAlert } from 'react-alert';
import Modal from 'react-modal';
import { likeIcon } from '../styles/SearchStyle';
import { getToken, validity } from '../util/token';
import LikeButton from './LikeButton';
const config = {
    headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
    },
};
const customStyles = {
    content: {
        bottom: 'auto',
        left: '50%',
        marginRight: '-50%',
        right: 'auto',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
};
const CompanyCard = (props: {
    name?: string;
    description?: string;
    image?: string;
    who?: string;
    invoker?: any;
    email?: string;
}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const alert = useAlert();
    const [formData, updateData] = useState({
        description: '',
        email: props.email,
        name: '',
        picture: '',
    });
    const valueUpdater: any = (e: any) => {
        updateData({ ...formData, [e.target.name]: e.target.value });
    };
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }
    const deleteCard = () => {
        axios
            .post('/private/company/delete', formData, config)
            .then(() => {
                props.invoker();
            })
            .catch(() => {
                alert.show('something wrong happened, try again later');
            });
    };
    const valueSubmit = (e: any) => {
        e.preventDefault();
        axios
            .put('/private/company/update', formData, config)
            .then(() => {
                closeModal();
                props.invoker();
            })
            .catch(() => {
                alert.show('something wrong happened, try again later');
            });
    };
    return (
        <div className="card">
            <div className={likeIcon}>
                <LikeButton who={props.who} type="company" />
            </div>
            <img
                src={props.image}
                className="card-img-top"
                alt="..."
                style={{ maxHeight: '200px' }}
            />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <button className="btn btn-primary" onClick={openModal}>
                    Update
                </button>
                <button className="btn btn-danger mx-1" onClick={deleteCard}>
                    Delete
                </button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <form className="form-signin" onSubmit={valueSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">
                            Update employee
                        </h1>
                        <label className="sr-only">Name</label>
                        <input
                            onChange={valueUpdater}
                            value={formData.name}
                            type="text"
                            name="name"
                            id="inputEmail"
                            className="form-control my-2"
                            placeholder="First Name"
                        />
                        <label className="sr-only">Image Url</label>
                        <input
                            onChange={valueUpdater}
                            value={formData.picture}
                            type="text"
                            name="picture"
                            id="inputEmail"
                            className="form-control my-2"
                            placeholder="Image Url"
                        />

                        <label className="sr-only">Description</label>
                        <textarea
                            onChange={valueUpdater}
                            value={formData.description}
                            name="description"
                            id="inputEmail"
                            className="form-control my-2"
                            placeholder="Description"
                        />

                        <button
                            className="btn btn-lg btn-primary btn-block"
                            type="submit"
                        >
                            Update
                        </button>
                    </form>
                </Modal>
            </div>
        </div>
    );
};

export default CompanyCard;
