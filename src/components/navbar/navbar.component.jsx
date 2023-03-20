import {Container, Header, LeftMenu, Logo, RightMenu} from "./navbar.styles";

const Navbar = () => {

  return(
    <Container>

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
    </Container>
  )

}

export default Navbar;