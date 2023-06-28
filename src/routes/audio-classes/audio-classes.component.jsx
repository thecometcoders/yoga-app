import Navbar from "../../components/navbar/navbar.component";
import {
  AboutHero,
  Button,
  H1,
  HeroContainer,
  P,
  SectionContainer,
  MustSignIn,
} from "./audio-classes.styles";
import MuxPlayerList from "../../components/mux-player-list/mux-player-list";
import Footer from "../../components/Footer/footer.component";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const AudioClasses = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <AboutHero>
        <Navbar />
        <HeroContainer>
          <H1>Audio Classes</H1>
          <P>Complete audio library</P>
        </HeroContainer>
      </AboutHero>

      <SectionContainer>
        {currentUser ? (
          <MuxPlayerList />
        ) : (
          <MustSignIn>Must Sign In to View </MustSignIn>
        )}
        <Footer />
      </SectionContainer>
    </>
  );
};

export default AudioClasses;
