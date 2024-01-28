import { Link } from "react-router-dom";

const EVENTS = [
  { id: "e-1", title: "Event-1" },
  { id: "e-2", title: "Event-2" },
  { id: "e-3", title: "Event-3" },
];

function EventsPage() {
  return (
    <>
      <div>
        <h1>This Events Page.</h1>
        <ul>
          {EVENTS.map((event) => (
            <li key={event.id}>
              <Link to={`${event.id}`}>{event.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default EventsPage;
