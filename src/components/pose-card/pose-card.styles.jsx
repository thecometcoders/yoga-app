import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 300px;
  margin-left: clamp(20px, 30px, 100px);
  margin-right: clamp(20px, 30px, 100px);
`;

export const Img = styled.img`
  flex-grow: 1;
  justify-content: space-around;
  border-radius: 20px;
  display: block;
  max-width: 300px;
`;

export const ImgBorder = styled.div`
  background: linear-gradient(
    110.46deg,
    rgba(255, 255, 255, 0.5) 1.37%,
    rgba(255, 255, 255, 0) 52.74%,
    rgba(255, 255, 255, 0.5) 100%
  );
  background-blend-mode: lighten;
  border-radius: 20px;
  padding: 1px;
`;

export const Title = styled.div`
  padding: 20px;
  color: white;
`;
