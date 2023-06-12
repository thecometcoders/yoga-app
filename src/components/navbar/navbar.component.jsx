import {
  CloseButton,
  Container,
  LeftMenu,
  Logo,
  MobileMenuButton,
  NavbarLink,
  Overlay,
  OverlayContent,
  OverlayLink,
  RightMenu,
} from "./navbar.styles";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import { FiAlignRight } from "react-icons/fi";

const mobileNavBreakpoint = 768;

const Navbar = () => {
  // Boolean for determining whether the screen is mobile or desktop based on a breakpoint
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  // Function for determining current screen size and modifying boolean
  const handleResize = () => {
    if (window.innerWidth < mobileNavBreakpoint) {
      setMobileMenuActive(true);
    } else {
      setMobileMenuActive(false);
    }
  };

  // Function which only runs on first render, creates a listener for changes in screen size
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Applies styling
  const openMobileNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  const closeMobileNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  return (
    <>
      <Container>
        {mobileMenuActive ? (
          <>
            <Overlay id="myNav">
              <CloseButton onClick={closeMobileNav}>&times;</CloseButton>
              <OverlayContent>
                <OverlayLink to="/">Home</OverlayLink>
                <OverlayLink to="/audio-classes">Audio Classes</OverlayLink>
                <OverlayLink to="/yoga-poses">Yoga Poses</OverlayLink>
                <OverlayLink to="/about">About</OverlayLink>
                <OverlayLink to="/sign-in">Sign In</OverlayLink>
              </OverlayContent>
            </Overlay>
            <Link to={"/"}>
              <Logo />
            </Link>
            <MobileMenuButton onClick={openMobileNav}>
              {" "}
              <FiAlignRight fontSize={"500%"} />{" "}
            </MobileMenuButton>
          </>
        ) : (
          <>
            <LeftMenu>
              <NavbarLink to="/audio-classes">Audio Classes</NavbarLink>
              <NavbarLink to="/yoga-poses">Yoga Poses</NavbarLink>
            </LeftMenu>
            <Link to={"/"}>
              <Logo />
            </Link>
            <RightMenu>
              <NavbarLink to="/about">About</NavbarLink>
              <NavbarLink to="/sign-in">Sign In</NavbarLink>
            </RightMenu>
          </>
        )}
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
