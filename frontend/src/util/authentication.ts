export const createToken = (token_data: string) => {
    localStorage.setItem('eda_token', token_data);
};

export const getToken = () => {
    return localStorage.getItem('eda_token');
};

export const deleteToken = () => {
    localStorage.removeItem('eda_token');
    window.location.reload();
};

export const checkAuth = () => {
    let token = localStorage.getItem('eda_token');

    if (token !== undefined && token !== null && token.length !== 0) {
        return true;
    }
    return false;
};
