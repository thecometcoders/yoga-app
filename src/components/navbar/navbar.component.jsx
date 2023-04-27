import {
  CloseButton,
  Container,
  LeftMenu,
  Logo,
  MobileMenuButton,
  Overlay,
  OverlayContent, OverlayLinks,
  RightMenu
} from "./navbar.styles";
import {useEffect, useState} from "react";
import {FiAlignRight} from "react-icons/fi";

const mobileNavBreakpoint = 768;

const Navbar = () => {

  // Boolean for determining whether the screen is mobile or desktop based on a breakpoint
  const [mobileMenuActive, setMobileMenuActive] = useState(false)

  // Function for determining current screen size and modifying boolean
  const handleResize = () => {
    if (window.innerWidth < mobileNavBreakpoint ) {
      setMobileMenuActive(true)
    } else {
      setMobileMenuActive(false)
    }
  }

  // Function which only runs on first render, creates a listener for changes in screen size
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[])

  // Applies styling
  const openMobileNav = () => {
    document.getElementById("myNav").style.width = "100%";
  }

  const closeMobileNav = () => {
    document.getElementById("myNav").style.width = "0%";
  }

  return(

    <Container>

      {mobileMenuActive ?
        <>
          <Overlay id="myNav">
            <CloseButton onClick={closeMobileNav}>&times;</CloseButton>
            <OverlayContent>
              <OverlayLinks href="#">About</OverlayLinks>
              <OverlayLinks href="#">Services</OverlayLinks>
              <OverlayLinks href="#">Clients</OverlayLinks>
              <OverlayLinks href="#">Contact</OverlayLinks>
            </OverlayContent>
          </Overlay>
          <MobileMenuButton onClick={openMobileNav}> <FiAlignRight fontSize={27}/>   </MobileMenuButton>
        </>
        :
        <>
          <LeftMenu>
            <p>About</p>
            <p>Yoga poses</p>
            <p>Videos</p>
          </LeftMenu>
          <Logo/>
          <RightMenu>
            <p>Blog</p>
            <p>Newsletter</p>
            <p>Log In</p>
          </RightMenu>
        </>
      }


    </Container>
  )

}

export default Navbar;