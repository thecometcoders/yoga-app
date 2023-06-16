import Navbar from "../../components/navbar/navbar.component";
import {
  AboutHero,
  Button,
  H1,
  HeroContainer,
  P,
  SectionContainer,
} from "./audio-classes.styles";
import MuxPlayerList from "../../components/mux-player-list/mux-player-list";
import Footer from "../../components/Footer/footer.component";

const AudioClasses = () => {
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
        <MuxPlayerList />
        <Footer />
      </SectionContainer>
    </>
  );
};

export default AudioClasses;
