import React from "react";

function EventDetail(props) {
  const date = new Date(props.event.date).toLocaleString("en-us", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div>
      <div className={"card"} style={{ margin: "20px auto" }}>
        <div className="flex">
          <img src={`/${props.event.image}`} alt="" />
        </div>
        <div style={{ margin: "10px 0" }}>
          <h2 style={{ margin: "10px 0" }}>{props.event.title}</h2>
          <p style={{ margin: "10px 0" }}>{date}</p>
          <address style={{ margin: "10px 0" }}>{props.event.location}</address>
          <p style={{ margin: "10px 0" }}>{props.event.description}</p>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
