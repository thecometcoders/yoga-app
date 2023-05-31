import styled from "styled-components";
import img from "../../assets/banner2.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-image: url(${img});

  /* Sizing */
  width: 100vw;
  height: 200px;

  /* Text styles */
  text-align: center;

  /* Background */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;
