import styled from "styled-components";
import Button from "../../atoms/button";

export const PopupContent = styled.section`
  padding: 0 16px;

  .segment-name {
    width: 90%;
    padding: 8px;
  }

  .blue-box {
    margin-top: 16px;
    border: 2px solid rgb(111, 168, 220);
    padding: 8px;
  }

  select {
    width: 100%;
    margin-top: 8px;
    padding: 8px;
  }

  .schema-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
  }

  .schema-item select {
    margin-right: 8px;
  }

  .traits {
    display: flex;
    justify-content: flex-end;
  }

  .group-traits {
    margin-left: 20px;
  }
  .user-dot {
    background-color: green;
    margin-right: 10px;
  }
  .guest-dot {
    background-color: red;
    margin-right: 10px;
  }
  .user-dot,
  .guest-dot {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    display: inline-block;
  }

  .add-schema {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .add-segment-dot {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: rgb(226, 228, 230);
  }
  .schema-dropdown {
    width: 84%;
  }
`;

export const SaveButton = styled(Button)`
  background-color: rgb(65, 180, 148);
  border: 1px solid white;
  color: white;
  padding: 6px;
  cursor: pointer;
`;

export const CancelButton = styled(Button)`
  background-color: white;
  border: 1px solid white;
  color: red;
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;
`;

export const AddButton = styled(Button)`
  border: 2px solid white;
  color: rgb(114, 202, 180);
  text-decoration: underline;
  cursor: pointer;
  background: white;
  margin-top: 16px;
`;

export const RemoveButton = styled(Button)`
  border-radius: 2px;
  width: 20px;
  border: 1px solid rgb(101, 122, 147);
  background: rgb(101, 122, 147);
  cursor: pointer;
`;

export const Submit = styled.section`
  bottom: 0;
  background: rgb(226, 228, 230);
  position: fixed;
  height: 20px;
  padding: 20px;
  width: 100%;
`;
