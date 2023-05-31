import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";

// Styling for Desktop menu
export const Logo = styled(LogoSvg)`
  /* Logo/white/next */
  width: 120.24px;
  height: 105.74px;

  /* Inside auto layout */
  flex: none;
  flex-grow: 0;
`;

export const Container = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5vw 5vw;

  /* Inside auto layout */
  flex: none;
  flex-grow: 1;

  /* Font styling */
  font-family: montserrat-bold-700;
  font-size: 16px;
  color: white;
`;

export const LeftMenu = styled.div`
  /* Frame 1 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px;
  margin-right: auto;
  gap: 35px;

  /*width: 306px;*/
  /*height: 20px;*/

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const RightMenu = styled.div`
  /* Frame 1 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  margin-left: auto;

  gap: 35px;

  /*width: 292px;*/
  /*height: 20px;*/

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

// Styling for the Mobile Menu
export const MobileMenuButton = styled.span`
  //display: block!important;
  //float: right;
  background-color: #080808;
  color: #fff;
  padding: 6px 7px;
  border-radius: 5px;
  //margin: 27px auto 0;
  cursor: pointer;
  //position: relative;
  //z-index: 10037
`;

export const Overlay = styled.div`
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0); /* Black fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
`;

export const CloseButton = styled.a`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
  color: #07a8ff;
`;

export const OverlayContent = styled.div`
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
`;

export const OverlayLinks = styled.a`
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
`;
