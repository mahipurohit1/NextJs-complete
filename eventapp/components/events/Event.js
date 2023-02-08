import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Event(props) {
  const date = new Date(props.event.date).toLocaleString("en-us", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const router = useRouter();
  console.log(router.query);
  return (
    <div className="center">
      <div className={"flex card"}>
        <div>
          <img src={`/${props.event.image}`} alt="" />
        </div>
        <div>
          <h2>{props.event.title}</h2>
          <p>{date}</p>
          <address>{props.event.location}</address>
          <Link
            href={
              props.isFilter ? `${props.event.id}` : `events/${props.event.id}`
            }
          >
            <button className="btn">ExploreMore</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Event;
