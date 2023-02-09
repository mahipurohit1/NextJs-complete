import fs from "fs";
import path from "path";
import { useState } from "react";
function feedbackPage(props) {
  const [feedback, setFeedback] = useState();
  const showDetailHandler = (id) => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => setFeedback(data.feedback));
  };
  return (
    <>
      {feedback && feedback.email}
      <ul>
        {props.data.map((item) => {
          return (
            <li key={item.id}>
              {" "}
              {item.feedback}{" "}
              <button onClick={showDetailHandler.bind(null, item.id)}>
                {" "}
                show details{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default feedbackPage;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "feedback.json");
  const fileData = fs.readFileSync(filePath);
  const fileDataArray = JSON.parse(fileData);
  return {
    props: {
      data: fileDataArray,
    },
  };
}
