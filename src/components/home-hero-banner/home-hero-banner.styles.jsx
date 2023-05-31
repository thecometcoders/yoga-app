import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 5vw;
  margin-top: 0;
  margin-bottom: 0.5em;
`;

export const P = styled.p`
  font-size: 2vw;
  max-width: 50%;
  @media (max-width: 768px) {
    font-size: 4vw;
    text-align: justify;
    max-width: 100%;
  }
`;

export const Container = styled.div`
  padding: 5% 5%;
  align-items: flex-start;
  justify-content: left;
  text-align: left;
  display: flex;
  flex-direction: column;
  color: white;
`;
