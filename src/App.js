import AppView from "./components/views/app-view";
import SegmentController from "./components/controllers/segment-controller";

const App = () => {
  const handleSave = async (data) => {
    try {
      const response = await SegmentController.saveSegment(data);
      console.log("Segment saved successfully:", response);
    } catch (error) {
      console.error("Error saving segment:", error);
    }
  };

  return <AppView handleSave={handleSave} />;
};

export default App;
