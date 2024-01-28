import { useParams, Link } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>This is Events Details Page.</h1>
      {params.id}
      <Link to=".." relative="path">
        Go Back
      </Link>
    </>
  );
}

export default EventDetailPage;
