import EventList from "@/components/events/EventList";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { getFilteredEvents } from "../dummy-data";

function FilteredEvent() {
  const router = useRouter();
  const data = router.query.slug;
  // if (!data) {
  //   return <p>Loading...</p>;
  // }
  if (data.length > 2) {
    return (
      <div className="flex">
        <h1>Page Not Found ... </h1>
        <Link href={"/events"}>
          <button className="btn">Go Back !! </button>
        </Link>
      </div>
    );
  }
  const year = data[0];
  const month = data[1];
  const dataObj = {
    month: +month,
    year: +year,
  };

  const events = getFilteredEvents(dataObj);
  const date = new Date(+year, +month);
  const monthLong = date.toLocaleString("en-us", { month: "long" });
  if (events.length === 0) {
    return (
      <div className="flex">
        <h1>no Events founds...</h1>
        <Link href={"/events"}>
          <button className="btn">Search other </button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1 className="flex">{`Events in ${monthLong} ${year}`}</h1>
      <EventList events={events} isFilter={true}></EventList>
    </div>
  );
}

export default FilteredEvent;
