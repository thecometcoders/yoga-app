import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

// Styling for Desktop menu

export const Container = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  padding: 5vw 5vw;
  justify-content: space-between;

  /* Font styling */
  font-family: montserrat-bold-700;
  font-size: 16px;
  color: white;
`;

export const Logo = styled(LogoSvg)`
  /* Logo/white/next */
  width: 120.24px;
  height: 105.74px;
`;

export const LeftMenu = styled.div`
  /* Auto layout */
  display: flex;
  align-items: center;
  gap: 35px;
  flex: 1;
  margin-right: auto;
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  flex: 1;
  margin-left: auto;
  justify-content: flex-end;
`;

// Styling for the Mobile Menu
export const MobileMenuButton = styled.span`
  color: #fff;
  padding: 6px 7px;
  border-radius: 5px;
  cursor: pointer;
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

export const OverlayLink = styled(Link)`
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
`;

export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
