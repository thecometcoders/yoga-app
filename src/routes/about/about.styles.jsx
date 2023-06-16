import styled from "styled-components";

import img from "../../assets/banner3.jpg";
import img2 from "../../assets/about1.jpg";
import img3 from "../../assets/about2.jpg";
import img4 from "../../assets/about3.jpg";

export const AboutHero = styled.div`
  background-image: url(${img});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center bottom;
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

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-image: radial-gradient(
      farthest-side at top center,
      rgba(201, 51, 219, 0.35),
      transparent 90vw
    ),
    radial-gradient(
      farthest-corner at bottom center,
      rgba(69, 52, 196, 0.35),
      transparent 90vw
    );
`;

export const AboutContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Bar = styled.div`
  background: black;
  width: 363px;
  height: 2px;
  margin-bottom: 30px;

  background: linear-gradient(
    90deg,
    rgba(202, 50, 219, 0.7) 0%,
    rgba(68, 51, 196, 0.7) 100%
  );
`;

export const AboutContainerQuote = styled.div`
  //display: flex;
  //flex-direction: column;
  //justify-content: flex-end;
  width: 75vw;
  margin-left: auto;
  margin-right: auto;
`;

export const LeftQuote = styled.div`
  margin-bottom: -40px;
`;

export const RightQuote = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -40px;
`;

export const AboutContainerImageSectionLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

export const ImageLeft = styled.div`
  background-image: url(${img2});
  width: 50vw;
  height: 50vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 0px 20px 20px 0px;

  min-width: 400px;
  flex: 1;
`;

export const ImageLeftBorder = styled.div`
  background: linear-gradient(
    110.46deg,
    rgba(202, 50, 219, 0.7) 1.37%,
    rgba(68, 51, 196, 0.7) 100%
  );
  background-blend-mode: lighten;
  border-radius: 0px 20px 20px 0px;
  padding: 2px 2px 2px 0px;
`;

export const TextRight = styled.div`
  color: white;
  margin: 5vw;
  min-width: 286px;

  flex: 1;
`;

export const AboutContainerImageSectionRight = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  padding-top: 10vh;
  padding-bottom: 10vh;

  justify-content: flex-end;
`;

export const ImageRight = styled.div`
  background-image: url(${img3});
  width: 50vw;
  height: 50vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 20px 0px 0px 20px;

  min-width: 400px;
  flex: 1;
`;

export const ImageRightBorder = styled.div`
  background: linear-gradient(
    110.46deg,
    rgba(202, 50, 219, 0.7) 1.37%,
    rgba(68, 51, 196, 0.7) 100%
  );
  background-blend-mode: lighten;
  border-radius: 20px 0px 0px 20px;
  padding: 2px 0px 2px 2px;
`;

export const TextLeft = styled.div`
  color: white;
  margin: 5vw;
  min-width: 286px;

  flex: 1;
`;

export const SvgContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const SvgCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const FooterSection = styled.div`
  display: flex;
  //flex-direction: column;
  align-items: flex-end;

  background-image: url(${img4});
  width: 100vw;
  height: 200vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  min-width: 400px;
`;
