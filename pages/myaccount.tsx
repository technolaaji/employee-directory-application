import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import AddCompany from '../components/myaccountComponents/AddCompany';
import AddEmployee from '../components/myaccountComponents/AddEmployee';
import MyLikes from '../components/myaccountComponents/MyLikes';
import UpdateEmail from '../components/myaccountComponents/UpdateEmail';
import UpdatePassword from '../components/myaccountComponents/UpdatePassword';
import { mainDiv, mainHeader } from '../styles/MyAccountStyle';
import { validity } from '../util/token';
const MyAccount = () => {
    const router = useRouter();
    useEffect(() => {
        if (!validity()) {
            router.replace('/');
        }
    });
    return (
        <Layout>
            <div className="container">
                <div className={mainDiv}>
                    <h1 className={mainHeader}>Hello there! 👋</h1>
                    <div
                        className="card-columns"
                        style={{ justifyContent: 'center' }}
                    >
                        <AddEmployee />
                        <AddCompany />
                        <UpdateEmail />
                        <UpdatePassword />
                        <MyLikes />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MyAccount;
