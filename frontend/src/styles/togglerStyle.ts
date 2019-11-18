import { css } from "emotion";

export const toggleDiv = css`
  width: 80%;
  height: 50px;
  display: grid;
  grid-template-columns: 100px 100px 150px;
  padding: 5px 30px;
  margin: 0 auto;
  grid-gap: 10px;
  place-content: center center;
`;

export const inputTag = css`
  font-size: 20px;
  border-radius: 1px solid grey;
  font-family: "Roboto", sans-serif;
  height: 50px;
  text-align: center;
`;

export const toggleButton = css`
  background-color: grey;
  color: white;
  font-size: 20px;
  border: none;
  height: 50px;
`;

export const toggleButtonSelected = css`
  background-color: black;
  color: white;
  font-size: 20px;
  border: none;
  height: 50px;
`;
