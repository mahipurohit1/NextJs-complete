import EventList from "@/components/events/EventList";
import FilterEvent from "@/components/events/FilterEvent";
import React from "react";
import { getAllEvents } from "../dummy-data";

function AllEvents() {
  const events = getAllEvents();
  return (
    <div>
      <FilterEvent></FilterEvent>
      <EventList events={events} />
    </div>
  );
}

export default AllEvents;
