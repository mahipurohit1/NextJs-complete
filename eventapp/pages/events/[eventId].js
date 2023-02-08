import EventDetail from "@/components/events/EventDetail";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { getEventById } from "../dummy-data";

function EventDetails() {
  const router = useRouter();
  const id = router.query.eventId;
  // if (!id) {
  //   return <h1 className="center">loading...</h1>;
  // }
  const event = getEventById(id);

  if (!event) {
    return (
      <div className="flex">
        <h1>Page event Found ... </h1>
        <Link href={"/events"}>
          <button className="btn"> find here </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <EventDetail event={event}></EventDetail>
    </div>
  );
}

export default EventDetails;
