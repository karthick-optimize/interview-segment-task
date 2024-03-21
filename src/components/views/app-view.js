import SegmentPopup from "../organisms/segment-popup";
import { Container, Heading } from "./style";

const AppView = ({ handleSave }) => {
  return (
    <Container className="App">
      <Heading className="create-segment">View Audience</Heading>
      <SegmentPopup onSave={handleSave} />
    </Container>
  );
};

export default AppView;
