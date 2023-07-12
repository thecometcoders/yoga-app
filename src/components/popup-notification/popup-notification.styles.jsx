import styled, { keyframes } from "styled-components";
import { ReactComponent as CheckLogo } from "../../assets/checkmark-circle-outline.svg";
import { ReactComponent as Close } from "../../assets/close-outline.svg";

const fadeIn = keyframes` from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }`;

const slideDown = keyframes` from {
    height: 0;
  }
  to {
    height: auto;
  }`;

export const NotificationOff = styled.div`
  position: absolute;
  transform: scale(0);
  z-index: 1;
  transition: 0.5s ease, height 0.2s ease;
  animation: ${fadeIn} 0.5s ease, ${slideDown} 0.5s ease;
`;

// Show Notification
export const NotificationOn = styled.div`
  position: absolute;
  top: 240px;
  right: 580px;

  /* Tablets  */
  @media only screen and (min-width: 576px) and (max-width: 867px) {
    position: absolute;
    top: 180px;
    width: 250px;
    right: 250px;
  }

  /* Movil Device */
  @media only screen and (max-width: 575px) {
    position: absolute;
    top: 140px;
    width: 350px;
    right: 55px;
  }
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23%;
  border-radius: 24px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(157, 154, 154, 0.5);
  overflow: hidden;
  //   Keeps the popup hidden
  transform: scale(1);
  z-index: 1;
  /* transition: 0.5s ease, height 0.2s ease; */
  animation: ${fadeIn} 0.5s ease, ${slideDown} 0.5s ease;

  h3 {
    color: rgba(202, 50, 219, 0.7);
    margin-top: 0px;
  }
`;

export const LogoContainer = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  background-color: rgba(202, 50, 219, 0.7);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(157, 154, 154, 0.5);
  border-bottom-left-radius: 20px;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    box-shadow: 0 0 30px rgba(157, 154, 154, 0.5);
  }
`;

export const CloseLogo = styled(Close)`
  margin-top: 7px;
  max-width: 30px;
  color: rgba(246, 236, 236, 0.577);
`;

export const CheckCircle = styled(CheckLogo)`
  max-width: 60px;
  width: 100%;
  color: rgba(202, 50, 219, 0.7);
  margin-top: 20px;
`;
