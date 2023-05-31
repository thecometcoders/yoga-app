import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //background: linear-gradient(
  //  200deg,
  //  rgba(255, 207, 61, 0.3) 31.16%,
  //  rgba(0, 176, 56, 0.4) 100%
  //);

  background-image: radial-gradient(
      farthest-side at bottom left,
      rgba(0, 176, 56, 0.5),
      transparent 1800px
    ),
    radial-gradient(
      farthest-corner at top right,
      rgba(255, 207, 61, 0.5),
      transparent 1800px
    );

  padding: 100px 150px;
  align-items: flex-start;
  justify-content: left;
  text-align: left;
`;

export const Item = styled.div`
  width: 100%;
  padding-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;
