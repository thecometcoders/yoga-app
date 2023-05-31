import MuxAudio from "@mux/mux-player-react";
import { Container, Item } from "./mux-player-list.styles";

export default function MuxPlayerList() {
  return (
    <Container>
      <h1>Yoga Audios</h1>
      <p>
        Experience a practice that is reinforcing and supportive of wherever you
        choose to focus your energy. To enjoy these audios all you need is a
        quite place to practice, a yoga mat and speaker.
      </p>
      <Item>
        <MuxAudio
          primaryColor={"#ffffff"}
          secondaryColor={"rgba(255, 255, 255, 0.1)"}
          title={"This is the title"}
          playbackId={"AKeCXTzf4bGfFd01023JAn671dI9y02P91bVMb5CMx2pcs"}
          streamType={"on-demand"}
          audio={true}
          metadata={{ video_id: "videoId20", video_title: "Title: Audio Only" }}
        />
      </Item>
      {/*<Item>*/}
      {/*  <MuxPlayer*/}
      {/*    title={"This is the title"}*/}
      {/*    playbackId={"AKeCXTzf4bGfFd01023JAn671dI9y02P91bVMb5CMx2pcs"}*/}
      {/*    streamType={"on-demand"}*/}
      {/*    audio={true}*/}
      {/*    metadata={{ video_id: "videoId20", video_title: "Title: Audio Only" }}*/}
      {/*  />*/}
      {/*</Item>*/}
      {/*<Item>*/}
      {/*  <MuxPlayer*/}
      {/*    title={"This is the title"}*/}
      {/*    playbackId={"AKeCXTzf4bGfFd01023JAn671dI9y02P91bVMb5CMx2pcs"}*/}
      {/*    streamType={"on-demand"}*/}
      {/*    audio={true}*/}
      {/*    metadata={{ video_id: "videoId20", video_title: "Title: Audio Only" }}*/}
      {/*  />*/}
      {/*</Item>*/}
    </Container>
  );
}
