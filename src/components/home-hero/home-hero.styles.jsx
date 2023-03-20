import styled from "styled-components";

import img from '../../assets/banner_image.jpg'

const HomeHero = styled.div`
  background-image: url(${img});

  /* Sizing */
  width: 100vw;
  height: 100vh;

  ///* Flexbox stuff */
  //display: flex;
  //justify-content: center;
  //align-items: center;

  /* Text styles */
  text-align: center;

  /* */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  //background-attachment: fixed;
  `;

export default HomeHero