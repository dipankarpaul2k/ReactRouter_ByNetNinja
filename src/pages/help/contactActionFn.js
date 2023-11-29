import { redirect } from "react-router-dom";

export default async function contactFormAction({ request }) {
  const formData = await request.formData();

  const response = {
    email: formData.get("email"),
    message: formData.get("message"),
    errors: {},
  };

  // validate the fields
  if (typeof response.email !== "string" || !response.email.includes("@")) {
    response.errors.email = "That doesn't look like an email address.";
  }

  if (typeof response.message !== "string" || response.message.length < 6) {
    response.errors.message = "Message must be at least 6 characters long.";
  }

  // return data if we have errors
  if (Object.keys(response.errors).length) {
    console.log("response: ", response);
    return response.errors;
  }

  // print response
  console.log("response: ", response);
  return redirect("/");
}
