import { saveSegment } from "../services/segment-api-service";

const SegmentController = {
  saveSegment: async (data) => {
    try {
      const response = await saveSegment(data);
      if (response.ok) {
        console.log("Segment saved successfully:", data);
        return response.data; 
      } else {
        console.error("Failed to save segment:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving segment:", error);
    }
  },
};

export default SegmentController;