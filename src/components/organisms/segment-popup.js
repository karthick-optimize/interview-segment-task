import { useState } from "react";
import { PopupContainer, SaveButton } from "./style";
import SegmentPopupHeader from "../molecules/segment-popup-header/segment-popup-header";
import SegmentPopupContent from "../molecules/segment-popup-content/segment-popup-content";

const SegmentPopup = ({ onSave }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section>
      <SaveButton onClick={() => setShowPopup(true)}>Save Segment</SaveButton>
      <PopupContainer showPopup={showPopup}>
        <SegmentPopupHeader onClick={() => setShowPopup(false)} />
        <SegmentPopupContent onSave={onSave} setShowPopup={setShowPopup} />
      </PopupContainer>
    </section>
  );
};

export default SegmentPopup;
