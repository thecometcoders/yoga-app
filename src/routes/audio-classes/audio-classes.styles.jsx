import styled from "styled-components";
import img from "../../assets/audio-classes.jpg";

export const AboutHero = styled.div`
  background-image: url(${img});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  margin-bottom: 0px;

  font-variant: small-caps;
  color: #ffffff;
`;

export const P = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  margin-top: 10px;
  font-variant: small-caps;
  color: #ffffff;
`;

export const Button = styled.button`
  background: linear-gradient(
    105.08deg,
    rgba(201, 51, 219, 0.4) 31.29%,
    rgba(69, 52, 196, 0.4) 73.74%
  );

  border-radius: 10px;
  border-color: rgba(201, 51, 219, 0.71);
  border-style: solid;
  border-width: 3px;
  padding: 20px;

  color: white;
  font-weight: bold;
  text-align: center;
  display: inline-block;
`;

export const SectionContainer = styled.div`
  background-image: radial-gradient(
      farthest-side at top center,
      rgba(0, 176, 56, 0.5),
      transparent 90vw
    ),
    radial-gradient(
      farthest-corner at top right,
      rgba(255, 207, 61, 0.5),
      transparent 90vw
    );
`;
