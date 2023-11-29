import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails(params) {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>{career.description}</p>
      </div>
    </div>
  );
}
