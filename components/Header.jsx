import Head from 'next/head';

const Header = () => (
    <React.Fragment>
        <Head>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Playfair+Display:900&display=swap"
                rel="stylesheet"
            ></link>
        </Head>
    </React.Fragment>
);
export default Header;
