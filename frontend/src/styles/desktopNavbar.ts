import { css } from "emotion";

export const gridDiv = css`
  display: grid;
  grid-template-columns: 1fr 250px;
  grid-gap: 10px;
  height: 50px;
  width: 100%;
`;

export const linkDiv = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-content: center center;
  text-align: center;
`;
export const headerText = css`
  font-size: 20px;
  font-family: "Merriweather", serif;
  padding-left: 20px;
`;

export const linkText = css`
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
`;
