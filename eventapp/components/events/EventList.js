import React from "react";
import Event from "./Event";

function EventList(props) {
  return (
    <div>
      {props.events.map((item) => {
        return <Event key={item.id} event={item} isFilter={props.isFilter} />;
      })}
    </div>
  );
}

export default EventList;
