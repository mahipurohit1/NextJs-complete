import path from "path";
import fs from "fs";
function handler(req, res) {
  const id = req.query.feedbackId;
  const filePath = path.join(process.cwd(), "data", "feedback.json");
  const fileData = fs.readFileSync(filePath);
  const fileDataArray = JSON.parse(fileData);
  const selectedItem = fileDataArray.find((item) => item.id === id);
  res.status(200).json({ feedback: selectedItem });
}
export default handler;
