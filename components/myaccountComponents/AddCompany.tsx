import axios from 'axios';
import { useState } from 'react';
import { useAlert } from 'react-alert';
import Modal from 'react-modal';
import { getToken, validity } from '../../util/token';

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
const AddCompany = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const alert = useAlert();
    const [formData, updateData] = useState({
        description: '',
        email: '',
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

    const valueSubmit = (e: any) => {
        e.preventDefault();
        axios
            .post('/private/company/create', formData, config)
            .then(() => {
                closeModal();
                alert.show('Company added successfully!');
            })
            .catch(() => {
                alert.show('something wrong happened, try again later');
            });
    };
    return (
        <div className="card" onClick={openModal}>
            <div className="card-body">
                <h5 className="card-title">Add an Company 🏗️</h5>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form className="form-signin" onSubmit={valueSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Add Company</h1>
                    <label className="sr-only">Name</label>
                    <input
                        onChange={valueUpdater}
                        value={formData.name}
                        type="text"
                        name="name"
                        id="inputEmail"
                        className="form-control my-2"
                        placeholder="Name"
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
                    <label className="sr-only">Email</label>
                    <input
                        onChange={valueUpdater}
                        value={formData.email}
                        type="email"
                        name="email"
                        id="inputEmail"
                        className="form-control my-2"
                        placeholder="Email"
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
    );
};

export default AddCompany;
