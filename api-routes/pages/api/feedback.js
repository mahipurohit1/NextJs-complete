import fs from "fs";
import path from "path";
const handler = (req, res) => {
  if (req.method === "POST") {
    const { email, feedback } = req.body;

    const data = {
      email,
      feedback,
    };
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const fileDataArray = JSON.parse(fileData);
    fileDataArray.push(data);
    console.log(fileDataArray);
    fs.writeFileSync(filePath, JSON.stringify(fileDataArray));
    res.status(201).json({ message: "Success", feedback });
  } else {
    res.status(200).json({ message: "its works!!" });
  }
};
export default handler;
