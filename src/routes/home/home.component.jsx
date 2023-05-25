import HomeHero from "../../components/home-hero/home-hero.styles";

import HomeHeroBanner from "../../components/home-hero-banner/home-hero-banner.component";
import Navbar from "../../components/navbar/navbar.component";
import MuxPlayerList from "../../components/mux-player-list/mux-player-list";

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

      <div className="Newsletter"></div>

      <div className="LibraryPoses"></div>

      <div className="FindBalance">// Find balance banner // Footer</div>
    </div>
  );
}

export default Home;
