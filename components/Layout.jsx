import Header from './Header';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavbarText } from '../styles/NavbarStyle';
const Layout = props => (
    <>
        <Header />
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand>Employee Directory App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <p className={NavbarText}>Sign up</p>
                    <p className={NavbarText}>Log in</p>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        {props.children}
    </>
);

export default Layout;
