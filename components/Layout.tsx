import Link from 'next/link';
import { positions, Provider as AlertProvider, transitions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Nav, Navbar } from 'react-bootstrap';
import { NavbarText } from '../styles/NavbarStyle';
import { validity, deleteToken } from '../util/token';
import Header from './Header';
const options = {
    // you can also just use 'bottom center'
    offset: '30px',
    position: positions.TOP_CENTER,
    timeout: 5000,
    // you can also just use 'scale'
    transition: transitions.SCALE,
};
const Layout = (props: { children: any }) => (
    <>
        <AlertProvider template={AlertTemplate} {...options}>
            <Header />
            <Navbar bg="primary" variant="dark">
                <Link href="/">
                    <Navbar.Brand>Employee Directory App</Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        {validity() ? (
                            <Link href="/signup">
                                <p className={NavbarText}>my account</p>
                            </Link>
                        ) : (
                            <Link href="/signup">
                                <p className={NavbarText}>Sign up</p>
                            </Link>
                        )}
                        {validity() ? (
                            <p onClick={deleteToken} className={NavbarText}>
                                log out
                            </p>
                        ) : (
                            <Link href="/login">
                                <p className={NavbarText}>Log in</p>
                            </Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {props.children}
        </AlertProvider>
    </>
);

export default Layout;
