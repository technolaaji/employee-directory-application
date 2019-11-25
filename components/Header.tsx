import Head from 'next/head';

const Header = () => (
    <>
        <Head>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
                crossOrigin="anonymous"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Playfair+Display:900&display=swap"
                rel="stylesheet"
            ></link>
        </Head>
    </>
);
export default Header;
