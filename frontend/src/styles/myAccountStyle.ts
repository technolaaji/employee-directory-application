import { css } from 'emotion';

export const myAccountDiv = css`
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-gap: 10px;
    height: 100vh;
    width: 100vw;
`;

export const navigation = css`
    display: grid;
    grid-template-rows: repeat(4, 50px);
    padding: 30px;
`;

export const link = css`
    cursor: pointer;
`;
