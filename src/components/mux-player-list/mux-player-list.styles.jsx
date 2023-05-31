import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-image: radial-gradient(
      farthest-side at bottom left,
      rgba(0, 176, 56, 0.5),
      transparent 90vw
    ),
    radial-gradient(
      farthest-corner at top right,
      rgba(255, 207, 61, 0.5),
      transparent 90vw
    );

  padding: 5% 5%;
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
