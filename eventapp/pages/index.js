import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "./dummy-data";

export default function Home() {
  const events = getFeaturedEvents();
  console.log(events);
  return (
    <div className="container">
      <EventList events={events}></EventList>
    </div>
  );
}
