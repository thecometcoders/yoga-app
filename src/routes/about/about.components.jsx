import Navbar from "../../components/navbar/navbar.component";

import {
  AboutHero,
  HeroContainer,
  H1,
  P,
  Button,
  AboutContainer,
  AboutContainerHeader,
  Bar,
  AboutContainerImageSectionLeft,
  ImageLeft,
  TextRight,
  ImageLeftBorder,
  AboutContainerImageSectionRight,
  ImageRightBorder,
  ImageRight,
  TextLeft,
  ValuesContainer,
  SvgContainer,
  SvgCard,
  FooterSection,
  AboutContainerQuote,
  LeftQuote,
  RightQuote,
} from "./about.styles";

import mindfulness from "../../assets/mindfulness.svg";
import grounded from "../../assets/grounded.svg";
import authenticity from "../../assets/authenticity.svg";
import curiosity from "../../assets/curiosity.svg";
import clarity from "../../assets/clarity.svg";
import right from "../../assets/quote.svg";
import left from "../../assets/quote1.svg";

import Footer from "../../components/Footer/footer.component";

const About = () => {
  return (
    <>
      <AboutHero>
        <Navbar />
        <HeroContainer>
          <H1>Meet Gabby</H1>
          <P>Yoga Instructor</P>
          <Button> Sign Up For Free Audio Classes</Button>
        </HeroContainer>
      </AboutHero>

      <AboutContainer>
        <AboutContainerHeader>
          <p>Are you ready to find balance?</p>
          <h1>I'm Gabby Aguilar</h1>
          <Bar />
        </AboutContainerHeader>
        <AboutContainerImageSectionLeft>
          <ImageLeftBorder>
            <ImageLeft />
          </ImageLeftBorder>
          <TextRight>
            Born in Venezuela, Gabby and her family moved to the US when she was
            3 years old and grew up in Las Vegas. With a penchant for physical
            activity, she’s always done some sort of sport or movement, whether
            it’s dance, long distance running, boxing, bouldering or yoga. She
            first experienced yoga when she was 14 through an Ashtanga book.
            Since then, she’s been practicing off and on for over two decades
            and is a US Gold Medalist for the 2021 Yoga Olympics.
          </TextRight>
        </AboutContainerImageSectionLeft>

        <AboutContainerQuote>
          <LeftQuote>
            <img src={left} />
          </LeftQuote>
          <p>
            See yourself as the perfect creation that you are, but at the same
            time, recognize with sincere honesty, the areas of your life that
            are out of balance and get to work to improve and grow.
          </p>
          <p>— Dashama Konah Gordon</p>
          <RightQuote>
            <img src={right} />
          </RightQuote>
        </AboutContainerQuote>

        <AboutContainerImageSectionRight>
          <TextLeft>
            Born in Venezuela, Gabby and her family moved to the US when she was
            3 years old and grew up in Las Vegas. With a penchant for physical
            activity, she’s always done some sort of sport or movement, whether
            it’s dance, long distance running, boxing, bouldering or yoga. She
            first experienced yoga when she was 14 through an Ashtanga book.
            Since then, she’s been practicing off and on for over two decades
            and is a US Gold Medalist for the 2021 Yoga Olympics.
          </TextLeft>
          <ImageRightBorder>
            <ImageRight />
          </ImageRightBorder>
        </AboutContainerImageSectionRight>

        <HeroContainer>
          <H1>My Values</H1>
          <Bar />
        </HeroContainer>
        <SvgContainer>
          <SvgCard>
            <img src={mindfulness} />
            <P>Mindfulness</P>
          </SvgCard>
          <SvgCard>
            <img src={grounded} />
            <P>Grounded</P>
          </SvgCard>
          <SvgCard>
            <img src={authenticity} />
            <P>Authenticity</P>
          </SvgCard>
          <SvgCard>
            <img src={curiosity} />
            <P>Curiosity</P>
          </SvgCard>
          <SvgCard>
            <img src={clarity} />
            <P>Clarity</P>
          </SvgCard>
        </SvgContainer>
      </AboutContainer>

      <FooterSection>
        <Footer />
      </FooterSection>
    </>
  );
};

export default About;
