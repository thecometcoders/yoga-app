import PoseCard from "../pose-card/pose-card.component";

import pose from "../../assets/pose.jpg";

import { CardContainer, H1, SectionContainer } from "./poses.styles";

const Poses = () => {
  return (
    <SectionContainer>
      <H1>Pose Library</H1>

      <CardContainer>
        <PoseCard src={pose} pose={"Balance Pose"} />
        <PoseCard src={pose} pose={"Triangle Pose"} />
        <PoseCard src={pose} pose={"Sphinx Pose"} />
        <PoseCard src={pose} pose={"Half Moon Pose"} />
      </CardContainer>
    </SectionContainer>
  );
};

export default Poses;
