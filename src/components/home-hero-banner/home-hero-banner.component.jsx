import {H1, P, Container, StyledBox, GradientContainer, GradientText} from './home-hero-banner.styles'

const HomeHeroBanner = () => {
  return(
    <Container>
      <H1>
        A Yogis Companion App.
      </H1>
      <P>
        Free Audio classes led by Gabby in a meditative yoga. Your companion for yoga when outside the studio.
      </P>
      <GradientContainer>
        <GradientText>
          <p>Sign up, we don't spam</p>
        </GradientText>
      </GradientContainer>
    </Container>
  )
}

export default HomeHeroBanner;
