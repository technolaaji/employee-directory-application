import { css } from "emotion";

export const searchDiv = css`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  grid-template-rows: repeat(2, 280px);
  grid-gap: 1rem;
  grid-auto-flow: dense;
  padding: 30px 0;
`;
