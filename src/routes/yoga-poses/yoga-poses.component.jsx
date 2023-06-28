import Navbar from "../../components/navbar/navbar.component";
import {
  AboutHero,
  BodyContainer,
  Button,
  H1,
  HeroContainer,
  MustSignIn,
  P,
  PoseLibrary,
  SearchBox,
  SectionContainer,
  YogaPosesContainer,
} from "./yoga-poses.styles";
import PoseCard from "../../components/pose-card/pose-card.component";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer/footer.component";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const YogaPoses = () => {
  const [yogaPoses, setYogaPoses] = useState([]);
  const [filteredYogaPoses, setFilteredYogaPoses] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const loadPoses = async () => {
      const result = await axios(
        `https://yoga-api-nzy4.onrender.com/v1/poses` //Endpoint and parameter or base Url
      );
      setYogaPoses(result);
    };
    loadPoses();
  }, []);

  useEffect(() => {
    const filteredData = yogaPoses.data?.filter((yogaPose) => {
      return yogaPose.english_name.toLowerCase().includes(searchField);
    });
    setFilteredYogaPoses(filteredData);
  }, [yogaPoses, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const { currentUser } = useContext(UserContext);

  return (
    <>
      <YogaPosesContainer>
        <AboutHero>
          <Navbar />
          <HeroContainer>
            <H1>Yoga Poses</H1>
            <P>A Detailed Yoga Pose library</P>
          </HeroContainer>
        </AboutHero>

        <BodyContainer>
          {currentUser ? (
            <>
              <SectionContainer>
                <SearchBox
                  onChange={(e) => onSearchChange(e)}
                  placeholder={"Search"}
                />

                <PoseLibrary>
                  {filteredYogaPoses?.map((yogaPose) => {
                    return (
                      <PoseCard
                        src={yogaPose.url_png}
                        pose={yogaPose.english_name}
                      />
                    );
                  })}
                </PoseLibrary>
              </SectionContainer>
            </>
          ) : (
            <MustSignIn>Must Sign In to View </MustSignIn>
          )}
          <Footer />
        </BodyContainer>
      </YogaPosesContainer>
    </>
  );
};

export default YogaPoses;
