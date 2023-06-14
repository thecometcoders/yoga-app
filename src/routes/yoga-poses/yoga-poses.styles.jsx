import styled from "styled-components";
import img from "../../assets/yogapose.jpg";

export const YogaPosesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionContainer = styled.div`
  padding: 10vw;
`;

export const BodyContainer = styled.div`
  background-image: radial-gradient(
      farthest-side at top center,
      rgba(0, 176, 56, 0.35),
      transparent 90vw
    ),
    radial-gradient(
      farthest-corner at bottom center,
      rgba(255, 207, 61, 0.35),
      transparent 90vw
    );
`;

export const PoseLibrary = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px 10px;
`;

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

export const SearchBox = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  gap: 10px;

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(25px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
  height: 51px;
  width: 283.7861022949219px;
  left: 479.32763671875px;
  top: 218px;

  color: white;
  font-weight: bold;
`;
