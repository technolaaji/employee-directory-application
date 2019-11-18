import { css } from "emotion";

export const signDiv = css`
  width: 100vw;
  height: 90vh;
  display: grid;
  place-content: center center;
`;

export const formDiv = css`
  width: 400px;
  height: 400px;
  background-color: lightgray;
`;

export const formSection = css`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-gap: 10px;
  margin: 0 20px;
`;

export const header = css`
  font-size: 20px;
  font-family: "Merriweather", serif;
  text-align: center;
  padding: 10px 0;
`;

export const label = css`
  font-size: 15px;
  font-family: "Roboto", sans-serif;
`;

export const input = css`
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  height: 20px;
`;

export const button = css`
  background-color: black;
  color: white;
  font-size: 20px;
  border: none;
  padding-top: 10px;
`;
