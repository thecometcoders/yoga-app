import { P, H1, Container } from "./home-hero-banner.styles";

const HomeHeroBanner = () => {
  return (
    <Container>
      <H1>A Yogis Companion App.</H1>
      <P>
        Welcome! YogiComet is a companion app for Yogi's. You can find Audio
        classes and a library of yoga poses to help you in your yoga journey. If
        you find this app useful to you and your practice please consider
        donating it is ran by volunteers.
      </P>
    </Container>
  );
};

export default HomeHeroBanner;
