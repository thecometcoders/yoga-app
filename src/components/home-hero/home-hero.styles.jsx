import styled from "styled-components";

import img from "../../assets/banner_image.jpg";

const HomeHero = styled.div`
  background-image: url(${img});

  /* Sizing */
  width: 100vw;
  height: 100vh;

  /* Text styles */
  text-align: center;

  /* Background */
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-position: right -200px bottom;
  }
`;

export default HomeHero;
