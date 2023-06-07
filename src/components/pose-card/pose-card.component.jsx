import { Img, Card, Title, ImgBorder } from "./pose-card.styles";

const PoseCard = (props) => {
  return (
    <Card>
      <ImgBorder>
        <Img src={props.src} alt="Just an example alt tag" />
      </ImgBorder>
      <Title>{props.pose}</Title>
    </Card>
  );
};

export default PoseCard;
