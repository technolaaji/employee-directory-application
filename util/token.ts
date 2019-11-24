import Cookie from 'js-cookie';

export const generateToken = (token: string) => {
    Cookie.set('eda_token', token, { expires: 7 });
};

export const getToken = () => {
    return Cookie.get('eda_token');
};

export const deleteToken = () => {
    Cookie.remove('eda_token');
    window.location.reload();
};

export const validity = () => {
    const token = Cookie.get('eda_token');
    if (token !== null && token !== undefined && token.length !== 0) {
        return true;
    } else {
        return false;
    }
};
