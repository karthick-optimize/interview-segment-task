import styled from "styled-components";
import Button from "../atoms/button";

export const PopupContainer = styled.section`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showPopup ? "0" : "-50%")};
  width: 40%;
  height: 100vh;
  background-color: white;
  transition: right 0.3s ease-in-out;
  z-index: 3;
`;

export const SaveButton = styled(Button)`
  margin: 40px 0 0 80px;
  padding: 8px 12px;
  background-color: rgb(153, 153, 153);
  border: 2px solid white;
  color: white;
`;
