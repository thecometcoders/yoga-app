import HomeHero from "../../components/home-hero/home-hero.styles";

import HomeHeroBanner from "../../components/home-hero-banner/home-hero-banner.component";
import Navbar from "../../components/navbar/navbar.component";
import MuxPlayerList from "../../components/mux-player-list/mux-player-list";
import Newsletter from "../../components/newsletter/newsletter.component";

function Home() {
  return (
    <div className="App">
      <HomeHero>
        <Navbar />
        <HomeHeroBanner />
      </HomeHero>

      <div className="FeaturedVideos">
        <MuxPlayerList />
      </div>

      <Newsletter />
    </div>
  );
}

export default Home;
