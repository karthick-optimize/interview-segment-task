import { useState } from "react";
import Input from "../../atoms/input";
import {
  PopupContent,
  GreenButton,
  WhiteButton,
  AddButton,
  RemoveButton,
  Submit,
} from "./style";
import { schemaOptions } from "../../utils/constants";

const SegmentPopupContent = ({ onSave, setShowPopup }) => {
  const [segmentName, setSegmentName] = useState("");
  const [selectedSchema, setSelectedSchema] = useState([]);
  const [newSchema, setNewSchema] = useState("");

  const handleAddSchema = () => {
    if (newSchema) {
      const selectedOption = schemaOptions.find(
        (option) => option.value === newSchema
      );
      setSelectedSchema([...selectedSchema, selectedOption]);
      setNewSchema("");
    }
  };

  const handleSave = () => {
    const schemaNames = selectedSchema.map((item) => ({
      [item.value]: item.label,
    }));
    onSave({ segment_name: segmentName, schema: schemaNames });
    setSegmentName("");
    setSelectedSchema([]);
    setShowPopup(false);
  };

  return (
    <>
      <PopupContent>
        <p>Enter the Name of the segment</p>
        <Input
          type="text"
          placeholder="Name of the segment"
          value={segmentName}
          className="segment-name"
          onChange={(e) => setSegmentName(e.target.value)}
        />
        <p>To save your segment, you need to add schemas to build the query </p>
        <section className="traits">
          <p>
            <span className="user-dot"></span>-User Traits
          </p>
          <p className="group-traits">
            <span className="guest-dot"></span>-Group Traits
          </p>
        </section>
        <section className="blue-box">
          {selectedSchema.map((item, index) => (
            <section key={index} className="schema-item">
              <span
                className={item.color === "red" ? "guest-dot" : "user-dot"}
              ></span>
              <select
                value={item.value}
                onChange={(e) => {
                  const updatedSchemas = [...selectedSchema];
                  updatedSchemas[index] = schemaOptions.find(
                    (option) => option.value === e.target.value
                  );
                  setSelectedSchema(updatedSchemas);
                }}
              >
                {schemaOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <RemoveButton
                onClick={() => {
                  const updatedSchemas = [...selectedSchema];
                  updatedSchemas.splice(index, 1);
                  setSelectedSchema(updatedSchemas);
                }}
              ></RemoveButton>
            </section>
          ))}
        </section>
        <section className="add-schema">
          <span className="add-segment-dot"></span>
          <select
            className="schema-dropdown"
            value={newSchema}
            onChange={(e) => setNewSchema(e.target.value)}
          >
            <option>Add Schema to segment</option>
            {schemaOptions
              .filter(
                (option) =>
                  !selectedSchema.find((item) => item.value === option.value)
              )
              .map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
          <RemoveButton></RemoveButton>
        </section>
        <AddButton onClick={handleAddSchema}>+ Add new schema</AddButton>
        <br />
      </PopupContent>
      <Submit>
        <section>
          <GreenButton onClick={handleSave}>Save the segment</GreenButton>
          <WhiteButton onClick={() => setShowPopup(false)}>Cancel</WhiteButton>
        </section>
      </Submit>
    </>
  );
};

export default SegmentPopupContent;
