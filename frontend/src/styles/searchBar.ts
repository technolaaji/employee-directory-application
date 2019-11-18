import { css } from "emotion";

export const searchDiv = css`
  width: 80%;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 100px;
  padding: 50px 30px;
  margin: 0 auto;
  grid-gap: 10px;
`;

export const inputTag = css`
  font-size: 20px;
  border-radius: 1px solid grey;
  font-family: "Roboto", sans-serif;
`;

export const searchButton = css`
  background-color: black;
  color: white;
  font-size: 20px;
  border: none;
`;
