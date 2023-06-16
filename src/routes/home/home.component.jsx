import HomeHero from "../../components/home-hero/home-hero.styles";

import HomeHeroBanner from "../../components/home-hero-banner/home-hero-banner.component";
import Navbar from "../../components/navbar/navbar.component";
import MuxPlayerList from "../../components/mux-player-list/mux-player-list";
import Newsletter from "../../components/newsletter/newsletter.component";
import Poses from "../../components/poses/poses.component";
import { FeaturedAudios, SectionContainer } from "./home.styles";
import Footer from "../../components/Footer/footer.component";

function Home() {
  return (
    <div>
      <HomeHero>
        <Navbar />
        <HomeHeroBanner />
      </HomeHero>

      <FeaturedAudios>
        <MuxPlayerList />
      </FeaturedAudios>

      <Newsletter />

      <SectionContainer>
        <Poses />
        <Footer />
      </SectionContainer>
    </div>
  );
}

export default Home;
