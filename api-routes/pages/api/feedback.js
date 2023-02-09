import fs from "fs";
import path from "path";
const handler = (req, res) => {
  if (req.method === "POST") {
    const { email, feedback } = req.body;

    const data = {
      id: Math.random().toString(),
      email,
      feedback,
    };
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const fileDataArray = JSON.parse(fileData);
    fileDataArray.push(data);
    fs.writeFileSync(filePath, JSON.stringify(fileDataArray));
    res.status(201).json({ message: "Success", feedback });
  } else {
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const fileDataArray = JSON.parse(fileData);
    res.status(200).json({ data: fileDataArray });
  }
};
export default handler;
