import styled from "styled-components";

import img from '../../assets/banner_image.jpg'

const HomeHero = styled.div`
  background-image: url(${img});

  /* Sizing */
  width: 100vw;
  height: 100vh;

  /* Text styles */
  text-align: center;

  /* Background */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  `;

export default HomeHero