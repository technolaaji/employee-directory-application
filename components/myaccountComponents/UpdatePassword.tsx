import axios from 'axios';
import { useState } from 'react';
import { useAlert } from 'react-alert';
import Modal from 'react-modal';
import {
    deleteToken,
    generateToken,
    getToken,
    validity,
} from '../../util/token';

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
const UpdatePassword = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const alert = useAlert();
    const [formData, updateData] = useState({
        password: '',
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
            .put('/auth/update/password', formData, config)
            .then(res => {
                alert.show('Password updated successfully!');
                closeModal();
            })
            .catch(() => {
                alert.show('something wrong happened, try again later');
            });
    };
    return (
        <div className="card" onClick={openModal}>
            <div className="card-body">
                <h5 className="card-title">Update my password 🤐</h5>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form className="form-signin" onSubmit={valueSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">
                        Update Password
                    </h1>
                    <p style={{ width: '200px' }}>
                        type in your new password to be updated!
                    </p>
                    <label className="sr-only">Email</label>
                    <input
                        onChange={valueUpdater}
                        value={formData.password}
                        type="password"
                        name="password"
                        id="inputEmail"
                        className="form-control my-2"
                        placeholder="New Password"
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

export default UpdatePassword;
