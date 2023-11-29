// Careers data loader function
export const careersLoader = async () => {
  const res = await fetch("http://localhost:3000/careers");
  if (!res.ok) {
    throw Error("Could not fetch the careers.");
  }
  return res.json();
};

// Career details loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/careers/${id}`);
  if (!res.ok) {
    throw Error("Could not fetch the career details.");
  }
  return res.json();
};
