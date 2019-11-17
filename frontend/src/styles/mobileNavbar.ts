import { css } from 'emotion'

export const gridDiv = css`
    display: grid;
    grid-template-columns: 1fr 50px;
    grid-gap: 10px;
    height: 50px;
    width: 100%;
`;

export const headerText = css`
    font-size: 18px;
    font-family: 'Merriweather', serif;
    padding-left: 20px;
`
export const linkText = css`
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    padding-left: 10px;
`
export const burgerDiv = css`
    display: grid;
    place-content: center center;
    font-size: 16px;
`
export const dropdownDiv = css`
    height: 150px;
    width: 100%;
    margin-top: 10px;
    background-color: #eaeaea;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
`