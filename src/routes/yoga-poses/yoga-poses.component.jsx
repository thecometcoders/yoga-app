import Navbar from "../../components/navbar/navbar.component";
import {
  AboutHero,
  BodyContainer,
  Button,
  H1,
  HeroContainer,
  P,
  PoseLibrary,
  SearchBox,
  SectionContainer,
  YogaPosesContainer,
} from "./yoga-poses.styles";
import PoseCard from "../../components/pose-card/pose-card.component";
import pose from "../../assets/pose.jpg";
import { useEffect, useState } from "react";
import data from "../../assets/data.json";
import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import Footer from "../../components/Footer/footer.component";

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
          <Footer />
        </BodyContainer>
      </YogaPosesContainer>
    </>
  );
};

export default YogaPoses;
